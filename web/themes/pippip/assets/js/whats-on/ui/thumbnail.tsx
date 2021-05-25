import React from 'react'
import { htmlDecode } from '../utils/helpers'
import { EventEntity } from '../utils/types'
import Link from './link'

type Props = {
  post: EventEntity
}

export default function Thumbnail({ post }: Props) {
  return (
    <Link
      href={post.link}
      classes={'o-listing-teaser__thumb'}
      ariaLabel={`Link to ${htmlDecode(post.title)}`}
      tabIndex={-1}
      title={`Thumbnail for ${htmlDecode(post.title)}`}
    >
      <figure>
        <picture>
          <img
            src={post.image}
            alt={
              post.imageAlt
                ? post.imageAlt
                : `Thumbnail for ${htmlDecode(post.title)}`
            }
            loading="lazy"
          />
        </picture>
      </figure>
    </Link>
  )
}
