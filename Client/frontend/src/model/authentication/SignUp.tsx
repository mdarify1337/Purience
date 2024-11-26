import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import  CalendarIcon  from '../../Image/calendar.png';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../Components/ui/button';
import { Input } from './Input';

const FormSchema = z
  .object({
    Fullname: 
      z.string()
       .min(1, 'Username is required')
       .max(100),
    Email: 
       z.string()
        .min(1, 'Email is required')
        .email('Invalid email'),
    Birthday:
        z.string(),
    UserType:
        z.string(),
    Password: 
       z.string()
        .min(1, 'Password is required')
        .min(8, 'Password must have than 8 characters'),
    ConfirmPassword: 
       z.string()
        .min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.Password === data.ConfirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

function SignUp() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Fullname: '',
      Email: '',
      Birthday: '',
      UserType: '',
      Password: '',
      ConfirmPassword: '',
    },
  });
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log('values -> ', values);
  }
  return (
    <div className='flex w-full justify-center items-center h-[1285px] bg-[#ED662B] bottom-5'>
       <div className='flex flex-col items-center  w-[500px] h-[1000px] gap-8 rounded-[8px] bg-[#FFFFFF]  p-4'>
          <div className='w-[350px] h-[125px] gap-8 flex flex-col justify-center items-center  relative top-4 '>
              <h2 className='font-poppins text-2xl font-semibold leading-[20px] text-center 
                   decoration-from-font decoration-skip-ink-none'>
                Sign Up  
              </h2>
              <p className='font-poppins text-base font-bold leading-[20px] text-center text-[#808080]
                    decoration-from-font decoration-skip-ink-none'>
                Create an account to start booking experiences
              </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full font-bold'>
              <div className='space-y-2 flex flex-col justify-center items-center gap-4'>
                <FormField
                  control={form.control}
                  name='Fullname'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-white font-bold  bg-slate-600 p-2 rounded'>
                          <h3 className='font-bold'>FullName</h3>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          className='placeholder:text-black text-black bg-[#30324D] border-black border-[1px]' 
                          placeholder='Fullname' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='Email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-white font-bold'>
                          <h3 className='font-bold'>Email</h3>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          className='placeholder:text-black text-black bg-[#30324D] border-black border-[1px]' 
                          placeholder='username' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* <FormField
                  control={form.control}
                  name='Birthday'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-bold text-lg'>Birthday</FormLabel>
                      <div className="relative">
                        <DatePicker
                          selected={field.value}
                          onChange={(date) => field.onChange(date)}
                          className="w-full p-2 text-black bg-gray-200 rounded-md"
                          placeholderText="Select your birthday"
                        />
                        <div 
                          className="absolute top-2.5 right-3 cursor-pointer text-gray-600" 
                          onClick={() => document.querySelector('.react-datepicker-wrapper input')?.focus()}
                        >
                          <CalendarIcon className="h-5 w-5" />
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
              </div>
            </form>
          </Form>
      </div>
    </div>
  )
}

export default SignUp