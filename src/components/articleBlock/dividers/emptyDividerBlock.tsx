import { DividerBlockProps } from './types'
import { SIZES } from '@/src/components/articleBlock/types'

// TODO: тут нужен только size, а не вся data
const EmptyDividerBlock = (props: DividerBlockProps) => { 
  const { data } = props
  return (
    <div className={`empty-divider empty-divider-${data?.size}`} />
  )
}
export default EmptyDividerBlock