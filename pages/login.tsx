import Head from 'next/head'
import { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import GithubLogo from '../public/github-logo.svg'
import Image from 'next/image'
interface IProps {
  providers: {
    id: string
    name: string
    type: string
    signinUrl: string
    callbackUrl: string
  }[]
}

const Home: NextPage<IProps> = ({ providers }) => {
  return (
    <div className=" flex h-screen w-screen flex-col items-center justify-center gap-10 bg-gray-900">
      <Head>
        <title>Login | GraphBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative -mt-[15vh] h-40 w-40 ">
        <Image src={GithubLogo} layout="fill" />
      </div>
      {Object.values(providers).map((provider) => (
        <>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            className="rounded-full bg-white px-10 py-3 text-xs font-semibold md:px-20 md:text-sm "
          >
            Login With {provider.name}
          </button>
        </>
      ))}
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default Home
