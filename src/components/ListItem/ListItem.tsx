import React from 'react'

type Props = {
  children: React.ReactNode
}

const ListItem = ({ children }: Props) => {
  return <li className='list-disc ml-4'>{children}</li>
}

export default ListItem
