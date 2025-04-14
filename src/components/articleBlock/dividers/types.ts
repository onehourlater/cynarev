import { DIVIDER_EMPTY, DIVIDER_LINE } from '../types'
import { SIZE_SMALL, SIZE_MEDIUM, SIZE_BIG } from '../types'


// TODO: тут скорее всего получается string | string | string. Ресерчнуть
type DividerBlockProps = {
  data: {
    type: typeof DIVIDER_EMPTY | typeof DIVIDER_LINE,
    size: typeof SIZE_SMALL | typeof SIZE_MEDIUM | typeof SIZE_BIG,
  }
}

export type {
  DividerBlockProps
}