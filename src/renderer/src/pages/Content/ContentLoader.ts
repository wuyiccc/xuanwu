export default async ({ params }) => {
  return window.api.mapper('ContentMapper.getContentById', params.id)
}
