export default async ({ request }) => {
  const data = await request.formData()
  // console.log(data)
  console.log(data.get('content'))

  return {}
}
