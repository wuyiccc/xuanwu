class StringUtils {
  static readonly EMPTY: string = ''

  static readonly SLASH: string = '/'

  static readonly UNDERLINE: string = '_'

  static readonly DASHED: string = '-'

  static readonly EQUAL: string = '='

  static readonly BLANK: string = ' '

  static readonly C_LF = '\n'

  static readonly COLON = ':'

  public static equals(str1?: string, str2?: string) {
    return str1 === str2
  }

  public static isEmpty(str: string | undefined | null): boolean {
    if (str === undefined || str === null) {
      return true
    }
    return str.trim() === ''
  }

  public static isNotEmpty(str: string | undefined | null): boolean {
    if (str === undefined || str === null) {
      return false
    }
    return str.trim() !== ''
  }
}

export default StringUtils
