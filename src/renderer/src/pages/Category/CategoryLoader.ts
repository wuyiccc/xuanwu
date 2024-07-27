import StringUtils from '../../utils/StringUtils'

export default async () => {
  return window.api.sql(StringUtils.EMPTY, 'findAll')
}
