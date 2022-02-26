export const submitComment = async (obj) => {
  const result = await fetch('/api/postcomment', {
    method: 'POST',
    body: JSON.stringify(obj),
  })
  return result.json()
}
