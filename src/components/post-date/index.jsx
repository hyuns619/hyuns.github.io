import React from 'react'

import './index.scss'

export const PostDate = ({ date, category }) => {
  return (
    <p className="post-date">
      <span>{category} | </span>
      <span style={{ color: '#a9a9a9' }}>{date}</span>
    </p>
  )
}
