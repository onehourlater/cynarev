import { DividerBlockProps } from './types'


const LineDividerBlock = (props: DividerBlockProps) => {
  const { data } = props
  console.log('LineDivider data: ')
  console.log(data)
  // TODO менять размер линии в зависимости от size
  return (
    <div className={`line-divider line-divider-${data?.size}`} />
  )
}
export default LineDividerBlock