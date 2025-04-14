import React, { EventHandler, MouseEventHandler } from 'react'

import classNames from 'classnames'

type ButtonProps = {
  type: 'btn' | 'link';
  title: string | React.ReactNode;
  onClick: React.MouseEventHandler<any>;
}
const Button = (props: ButtonProps) => {
  const { type, title } = props
  const { onClick } = props

  const className = classNames(
    { 'btn btn-blue': type == 'btn' },
    { 'btn btn-link': type == 'link' },
  )

  return (
    <div className={className} onClick={onClick}>
      { title }
    </div>
  )
}
export default Button