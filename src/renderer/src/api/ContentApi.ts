import ContentEntity from '../../../pojo/entity/ContentEntity'

export default class ContentApi {
  public static async createContent(data: ContentEntity) {
    window.api.mapper('ContentMapper.addContent', data)
  }
}
