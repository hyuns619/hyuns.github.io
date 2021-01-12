import React from 'react'

import './index.scss'

export const PostDate = ({ date, category }) => {
  return (
    <p className="post-date">
      <span></span>
      <span style={{ color: '#808080' }}>{date}</span>
    </p>
  )
}
