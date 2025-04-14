import React from 'react'


type TextBlockProps = {
  data: {
    size: 'small' | 'medium' | 'big';
    text: string;
  },
}
const TextBlock = (props: TextBlockProps) => {
  console.log('TextBlock props')
  console.log(props)
  const { data } = props
  if (!data?.text) return <></>

  return (
    <p className={`article-block-text article-block-text-${data?.size} mb-5`}>
      { data?.text }
    </p>
  )
} 
export default TextBlock
export type {
  TextBlockProps,
}