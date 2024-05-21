import ItemList from '@/components/shared/item-list/ItemList'
import React from 'react'

type Props = React.PropsWithChildren <{}>

const ConversationsLayout = ({children}: Props) => {
  return (

    <div>
      <ItemList title='Conversations'>
ConversationsPage
      </ItemList> 
      {children}</div>
  )
}

export default ConversationsLayout