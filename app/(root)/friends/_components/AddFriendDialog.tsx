"use client"
import React from 'react'
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tooltip, TooltipTrigger,TooltipContent } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { UserPlus } from 'lucide-react'
import { Input } from "@/components/ui/input"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useMutationState } from '@/hooks/useMutationState'
import { api } from '@/convex/_generated/api'
import { ConvexError } from 'convex/values'
import { toast } from 'sonner'


const addFriendFormSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Email invalid" }),
})

const AddFriendDialog = () => {
    const {mutate:createRequest,pending} = useMutationState(api.request.create)

    const form=useForm<z.infer<typeof addFriendFormSchema>>({
        resolver: zodResolver(addFriendFormSchema),
        defaultValues: {
            email: '',
        }
    })

    const handleSubmit = async (values: z.infer<typeof addFriendFormSchema>) => {
        await createRequest({
            email: values.email
        }).then(() => {
            form.reset();
            toast.success("Request sent!")
        }).catch((error) => { 
            toast.error(error instanceof ConvexError 
                   ? error.data : "Unexpected error")
               
        })
    }
    

  return (
      <Dialog>
          <Tooltip>
              <TooltipTrigger>
                  <Button size="icon" variant="outline">
                      <DialogTrigger>
                          <UserPlus/>
                      </DialogTrigger>
                  </Button>
              </TooltipTrigger>
              <TooltipContent>Add Friend</TooltipContent>
          </Tooltip>

           <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Friend</DialogTitle>
          <DialogDescription>Send a request to connect with your friends!</DialogDescription>
        </DialogHeader>
        <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'> 
                      
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email..." {...field} />
                              </FormControl>
                              <FormMessage/>
              </FormItem>
                      )} />
                      <DialogFooter>
                          <Button disabled={pending}
                          type='submit'>
                              Send
                          </Button>
                      </DialogFooter>
          </form>
        </Form>
          </DialogContent>
          </Dialog>
  )
}

export default AddFriendDialog