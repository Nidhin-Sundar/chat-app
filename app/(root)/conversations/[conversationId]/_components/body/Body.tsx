"use client"

import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useConversation } from '@/hooks/useConversation'
import { useQuery } from 'convex/react'
import React from 'react'
import Message from './Message'

type Props = { fromCurrentUser: any }

const Body = (props: Props) => {
  const { conversationId } = useConversation()
  
  const messages = useQuery(api.messages.get, { id: conversationId as Id<"conversations"> })
  
  const sortedMessages = messages?.slice().sort((a, b) => a.message._creationTime - b.message._creationTime);

  return (
    <div className='flex-1 w-full flex overflow-y-scroll flex-col gap-2 p-3 no-scrollbar'>
      {sortedMessages?.map(
        ({ message, senderImage, senderName, isCurrentUser }, index) => {
          const lastByUser = sortedMessages[index + 1]?.message.senderId !== message.senderId;

          return <Message
            key={message._id}
            fromCurrentUser={isCurrentUser}
            senderImage={senderImage}
            senderName={senderName}
            lastByUser={lastByUser}
            content={message.content}
            createdAt={message._creationTime}
            type={message.type} />
        }
      )}
    </div>
  )
}

export default Body
