import { Card } from '@/components/ui/card'
import React from 'react'

const ConversationFallback = () => {
  return (
    <div>
          <Card className='hidden lg:flex h-full w-full p-2 items-center justify-center
          bg-secondary text-secondary-foreground'style={{ height: '54rem',width: '80rem' ,marginLeft: '24rem',marginTop:'-54rem'} }>
              Select/Start a Conversation to get started
      </Card>
    </div>
  )
}

export default ConversationFallback
