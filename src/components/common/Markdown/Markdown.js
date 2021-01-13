import React from 'react'
import MarkdownToJsx from 'markdown-to-jsx'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './Markdown.module.scss'

export default function Markdown ({ children, className, ...options }) {
  if (!children) children = ''
  if (typeof children !== 'string') {
    console.error('Markdown children must be string, but expected', children)
    children = ''
  }

  return (
    <div className={cn(css.root, className)}>
      <MarkdownToJsx
        options={{
          ...options,
          namedCodesToUnicode: {
            mdash: '\u2014',
            ndash: '\u2013',
            laquo: '\u00AB',
            raquo: '\u00BB'
          }
        }}
      >
        {children}
      </MarkdownToJsx>
    </div>
  )
}

Markdown.propTypes = {
  children: PropTypes.string,
  className: PropTypes.any
}
