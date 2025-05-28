"use client"
// import {
//   useState
// } from "react"
import {
  toast
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
// import {
//   cn
// } from "@/lib/utils"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import {
  Textarea
} from "@/components/ui/textarea"
import axios from "axios"
import { useState } from "react"


const formSchema = z.object({
  name_8050883403: z.string().min(1),
  name_4780931097: z.string(),
  name_7285961518: z.string().min(1),
  name_5307587423: z.string().min(1),
  name_9636041521: z.string().min(1)
});

export default function MyForm() {
    const [name, setTitle]= useState("")
    const [description, setdes]= useState("")
    const [group, setGroup]= useState("")
    const [time, setTime]= useState("")
    const [status, setStatus]= useState("")







const sendData = ()=>{
   axios.post("http://localhost:4000/courses",{
        name,
        description,
        group,
        time,
        status,
   } ).then(res=>console.log(res.data)
   )
}
     

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),

  })

//   function onSubmit(values: z.infer < typeof formSchema > ) {
//     try {
//       console.log(values);
//       toast(
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(values, null, 2)}</code>
//         </pre>
//       );
//     } catch (error) {
//       console.error("Form submission error", error);
//       toast.error("Failed to submit the form. Please try again.");
//     }
//   }
//<form onSubmit={form.handleSubmit(onSubmit)}
  return (
    <Form {...form}>
      <form onSubmit={(e)=>{
        e.preventDefault() 
        sendData()
        }} className="space-y-2 max-w-xl mx-auto py-10">
        
        <div className="grid grid-cols-12 gap-2">
          
          <div className=" col-span-6">
            
    
        <Input 
                placeholder="Name of  Course"
                
                type="text" onChange={(e)=>{setTitle(e.target.value)}}
             />

             <Textarea
                  placeholder="Description of course"
                 onChange={(e)=>{setdes(e.target.value)}}
                  className="resize-none"
                  
                />
          </div>
          
        </div>
        
        {/* <FormField
          control={form.control}
          name="name_4780931097"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Input 
                placeholder="Number"
                
                type="text" onChange={(e)=>{setGroup(e.target.value)}}
                 />
        {/* <FormField
          control={form.control}
          name="name_7285961518"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Group</FormLabel>
              <FormControl>
                
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Input 
                placeholder="Time of course"
                
               type="text" onChange={(e)=>{setTime(e.target.value)}}
                 />
        {/* <FormField
          control={form.control}
          name="name_5307587423"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time</FormLabel>
              <FormControl>
                <Input 
                placeholder="Time of course"
                
               type="text" onChange={(e)=>{setTime(e.target.value)}}
                {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Input 
                placeholder="Status of course"
                
              type="text" onChange={(e)=>{setStatus(e.target.value)}}
                 />
        {/* <FormField
          control={form.control}
          name="name_9636041521"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Input 
                placeholder="Status of course"
                
              type="text" onChange={(e)=>{setStatus(e.target.value)}}
                {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button  >Submit</Button>
      </form>
    </Form>
  )
}