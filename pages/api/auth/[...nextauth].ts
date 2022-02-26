import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
const options = {
  id: 'github',
  name: 'GitHub',
  type: 'oauth',
  authorization:
    'https://github.com/login/oauth/authorize?scope=read:user+user:email',
  token: 'https://github.com/login/oauth/access_token',
  userinfo: {
    url: 'https://api.github.com/user',
    async request({ client, tokens }) {
      // Get base profile
      const profile = await client.userinfo(tokens)

      // If user has email hidden, get their primary email from the GitHub API
      if (!profile.email) {
        const emails = await (
          await fetch('https://api.github.com/user/emails', {
            headers: {
              Authorization: `token ${process.env.GITHUB_CLIENT_SECRET}`,
            },
          })
        ).json()

        if (emails?.length > 0) {
          // Get primary email
          profile.email = emails.find((email) => email.primary)?.email
          // And if for some reason it doesn't exist, just use the first
          if (!profile.email) profile.email = emails[0].email
        }
      }

      return profile
    },
  },
  profile(profile) {
    return {
      profile: profile,
      id: profile.id.toString(),
      name: profile.name || profile.login,
      email: profile.email,
      image: profile.avatar_url,
    }
  },
}
export default NextAuth({
  providers: [
    GitHubProvider({
      options,
    }),
    ,
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = 'user'
      return token
    },
  },
})
