import { Card } from '@/components/ui/card'
import React from 'react'

type Props = React.PropsWithChildren<{}>

const ConversationContainer = ({children}: Props) => {
  return (
    <div>
          <Card className='w-full h-[calc(100svh)] lg:h-full p-2 flex flex-col gap-2' style={{ height: '54rem',width: '80rem' ,marginLeft: '24rem',marginTop:'-54rem'} }>
              {children}
      </Card>
    </div>
  )
}

export default ConversationContainer