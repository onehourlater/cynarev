import React from 'react'

import { DividerBlockProps } from './types'
import EmptyDividerBlock from './emptyDividerBlock'
import LineDividerBlock from './lineDividerBlock'

import { SIZES, DIVIDER_EMPTY, DIVIDER_LINE } from '@/src/components/articleBlock/types'
import UnknownBlock from '@/src/components/articleBlock/unknown'

// const dividerBlocksMapper: { [key: string]: React.FC<{ size: Sizes }> } = {
const dividerBlocksMapper: { [key: string]: React.FC<{ data: any }> } = {
  [DIVIDER_EMPTY]: EmptyDividerBlock,
  [DIVIDER_LINE]: LineDividerBlock,
}

const DividerBlock = (props: DividerBlockProps) => {
  const { data } = props

  const DividerComponent = dividerBlocksMapper[data.type] ?? UnknownBlock
  return <DividerComponent data={data} />
}
export default DividerBlock