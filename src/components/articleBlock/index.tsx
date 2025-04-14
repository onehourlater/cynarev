import React from 'react'
import { BLOCK_TYPE_DIVIDER, BLOCK_TYPE_RICH_TEXT, BLOCK_TYPES } from './types'
import { BLOCK_TYPE_TEXT, BLOCK_TYPE_MEDIA } from './types'

import MediaBlock, { MediaBlockProps } from './media'
import TextBlock, { TextBlockProps } from './text'
import RichTextBlock from './richText'
import DividerBlock from './dividers'
import UnknownBlock from './unknown'


// TODO: replace any with { MediaBlockProps or TextBlockProps }
const blocksMapper: { [key: string]: React.FC<{ data: any }> } = {
  [BLOCK_TYPE_TEXT]: TextBlock,
  [BLOCK_TYPE_RICH_TEXT]: RichTextBlock,
  [BLOCK_TYPE_MEDIA]: MediaBlock,
  [BLOCK_TYPE_DIVIDER]: DividerBlock,
}

// TODO: replace any with { MediaBlockProps or TextBlockProps }
type getBlockProps = {
  type: BLOCK_TYPES,
  data: any,
}
const getBlock = (props: getBlockProps) => {
  const { type, data } = props

  const BlockComponent = blocksMapper[type] ?? UnknownBlock
  //console.log('BlockComponent: ')
  //console.log(BlockComponent)
  return <BlockComponent data={data} />
}

const ArticleBlock = (props: any) => {
  const Block = getBlock({
    type: props.type,
    data: props.data,
  })

  return Block
}
export default ArticleBlock