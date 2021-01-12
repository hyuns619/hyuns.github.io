import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug}>
      <h3>{node.frontmatter.title || node.fields.slug}</h3>
      <p>
        <time className="">
          <span
            style={{ fontSize: '16px', color: '#335C91', fontWeight: '500' }}
          >
            {node.frontmatter.category}&nbsp;&nbsp;
          </span>
          {node.frontmatter.date}
        </time>
      </p>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  </Link>
)
