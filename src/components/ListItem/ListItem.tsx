import React from 'react'

type Props = {
  children: React.ReactNode
  level?: number
  listStyle?: 'list-disc' | 'list-square'
}

const ListItem = ({ children, level = 1, listStyle = 'list-disc' }: Props) => {
  const indent = level * 4
  const levelIndent = `ml-${indent}`

  const className = `${levelIndent} ${listStyle}`

  return <li className={className}>{children}</li>
}

export default ListItem
