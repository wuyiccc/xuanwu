export default async ({ request }) => {
  const data = await request.formData()

  const searchWorld = data.get('searchWord')

  console.log(searchWorld)

  return {}
}
