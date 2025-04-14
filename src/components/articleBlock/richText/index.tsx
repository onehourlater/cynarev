import React from 'react'
import ReactMarkdown from 'react-markdown'


type TextBlockProps = {
  data: {
    text: string;
  },
}
const RichTextBlock = (props: TextBlockProps) => {
  const { data } = props
  if (!data?.text) return <></>

  return (
    <div className={`article-block-text markdown-body mb-5`}>
      <ReactMarkdown>
        { data?.text }
      </ReactMarkdown>
    </div>
  )
} 
export default RichTextBlock
export type {
  TextBlockProps,
}