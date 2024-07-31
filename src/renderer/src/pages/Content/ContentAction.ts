import ContentEntity from '../../../../pojo/entity/ContentEntity'

export default async ({ request }) => {
  const data = await request.formData()
  const formData = Object.fromEntries(data) as ContentEntity

  await window.api.mapper('ContentMapper.updateContentById', formData)

  return {}
}
