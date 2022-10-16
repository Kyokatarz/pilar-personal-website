import clsx from 'clsx'
import React from 'react'

type Props = {
  children: React.ReactNode
  level?: number
  listStyle?: 'list-disc' | 'list-square'
}

const ListItem = ({ children, level = 1, listStyle = 'list-disc' }: Props) => {
  const levelIndent = `ml-${level * 4}`

  const className = clsx(listStyle, levelIndent)

  return <li className={className}>{children}</li>
}

export default ListItem
