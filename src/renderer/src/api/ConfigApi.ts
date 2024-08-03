import StringUtils from '../utils/StringUtils'

export default class ConfigApi {
  public static async find() {
    return window.api.mapper('ConfigMapper.find', StringUtils.EMPTY)
  }

  public static async update(content: string) {
    return window.api.mapper('ConfigMapper.update', content)
  }
}
