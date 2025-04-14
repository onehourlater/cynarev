import React from 'react'
import ReactMarkdown from 'react-markdown'

type TitleProps = {
  title: string | React.ReactNode;
}
const PageTitle = (props: TitleProps) => {
  const { title } = props
  return (
    <div className="page-title">
      <h1>
        { title } 
      </h1>
    </div>
  )
}
export default PageTitle