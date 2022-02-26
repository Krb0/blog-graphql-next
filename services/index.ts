export const submitComment = async (obj: {
  name: string
  email: string
  comment: string
  slug: string
}) => {
  const result = await fetch('/api/postcomment', {
    method: 'POST',
    body: JSON.stringify(obj),
  })
  return result.json()
}
