import clsx from 'clsx'
import React from 'react'

type Props = {
  children: React.ReactNode
  level?: number
  listStyle?: 'list-disc' | 'list-square'
}

const ListItem = ({ children, level = 1, listStyle = 'list-disc' }: Props) => {
  const className = clsx(listStyle, {
    'ml-4': level === 1,
    'ml-8': level === 2,
  })

  return <li className={className}>{children}</li>
}

export default ListItem
