export default async ({ params }) => {
  // console.log(params.cid)
  return window.api.mapper('ContentMapper.getContentListByCategoryId', params.cid)
}
