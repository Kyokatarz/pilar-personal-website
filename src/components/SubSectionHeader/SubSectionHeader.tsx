import React from 'react'

type Props = {
  level: number
  children: React.ReactNode
  id?: string
}

const SubSectionHeader = ({ level, children, id }: Props) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  return (
    <Tag id={id} className='underline font-bold text-left'>
      {children}
    </Tag>
  )
}

export default SubSectionHeader
