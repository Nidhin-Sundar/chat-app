import { cn } from '@/lib/utils';
import React from 'react'
import { format } from 'date-fns';  

type Props = {
  fromCurrentUser: boolean;
  senderImage: string;
  senderName: string;
  lastByUser: boolean;
  content: string[];
  createdAt: number;
  type: string;
}

const Message = ({ fromCurrentUser, senderImage, senderName, lastByUser, content, createdAt, type }: Props) => {
  const formatTime = (timestamp: number) => {
    return format(new Date(timestamp), "HH:mm");
  }

  return (
    <div className={cn("flex flex-col w-full mx-2", {
      "items-end": fromCurrentUser,
      "items-start": !fromCurrentUser
    })}>
      <div className={cn("px-4 py-2 rounded-lg max-w-[70%]", {
        "bg-primary text-secondary-foreground": fromCurrentUser,
        "bg-primary text-primary-foreground": !fromCurrentUser,
        "rounded-br-none": lastByUser && fromCurrentUser,
        "rounded-bl-none": lastByUser && !fromCurrentUser,
      })}>
        {type === "text" ? (<p className='text-secondary text-wrap break-words whitespace-pre-wrap'>
          {content}
        </p>) : null}
        <span className="text-xs text-gray-500">{formatTime(createdAt)}</span>
      </div>
    </div>
  )
}

export default Message
