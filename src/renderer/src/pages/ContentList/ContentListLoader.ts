export default async ({ params, request }) => {
  console.log(request.url)

  const url = new URL(request.url)

  const searchWord = url.searchParams.get('searchWord')

  if (searchWord !== undefined && searchWord !== null) {
    return window.api.mapper('ContentMapper.searchContentByTitle', searchWord)
  }

  return window.api.mapper('ContentMapper.getContentListByCategoryId', params.cid)
}
