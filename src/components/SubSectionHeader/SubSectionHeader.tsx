import React from 'react'

type Props = {
  level: number
  children: React.ReactNode
}

const SubSectionHeader = ({ level, children }: Props) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  return <Tag className='underline font-bold text-left'>{children}</Tag>
}

export default SubSectionHeader
