import { JSX } from 'react'

import { TextBlockProps } from './text'
import { MediaBlockProps } from './media'
import { DividerBlockProps } from './dividers/types'

const BLOCK_TYPE_TEXT: string = 'block-type-text'
const BLOCK_TYPE_RICH_TEXT: string = 'block-type-rich-text'
const BLOCK_TYPE_MEDIA: string = 'block-type-media'
const BLOCK_TYPE_DIVIDER: string = 'block-type-divider'

const DIVIDER_EMPTY: string = 'block-type-divider-empty'
const DIVIDER_LINE: string = 'block-type-divider-line'

const SIZE_SMALL: string = 'size-small'
const SIZE_MEDIUM: string = 'size-medium'
const SIZE_BIG: string = 'size-big'

type BLOCK_TYPE_DIVIDERS = typeof DIVIDER_EMPTY | typeof DIVIDER_LINE
type BLOCK_TYPES = typeof BLOCK_TYPE_RICH_TEXT | typeof BLOCK_TYPE_TEXT | typeof BLOCK_TYPE_MEDIA | typeof BLOCK_TYPE_DIVIDER
type SIZES = typeof SIZE_SMALL | typeof SIZE_MEDIUM | typeof SIZE_BIG

type BlocksPropsMapper = {
  [BLOCK_TYPE_TEXT]: (data: TextBlockProps) => JSX.Element;
  [BLOCK_TYPE_RICH_TEXT]: (data: TextBlockProps) => JSX.Element;
  [BLOCK_TYPE_MEDIA]: (data: MediaBlockProps) => JSX.Element;
  [BLOCK_TYPE_DIVIDER]: (data: DividerBlockProps) => JSX.Element;
}
type BlocksComponentsMapper = {
  [key in BLOCK_TYPES]: BlocksPropsMapper[key]
}


export { 
  BLOCK_TYPE_TEXT,
  BLOCK_TYPE_RICH_TEXT,
  BLOCK_TYPE_MEDIA,
  BLOCK_TYPE_DIVIDER,

  DIVIDER_EMPTY,
  DIVIDER_LINE,

  SIZE_SMALL,
  SIZE_MEDIUM,
  SIZE_BIG,
}
export type {
  SIZES,
  BLOCK_TYPES,
  BLOCK_TYPE_DIVIDERS,
  BlocksComponentsMapper,
}