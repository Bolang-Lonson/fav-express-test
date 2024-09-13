import React from 'react';
import Image from 'next/image';

import logo from '../assets/VERSION 1.png';
import loginart from '../assets/loginart.png';
const SignIn = () => {
  return (
    <section className="bg-white flex w-full h-full">
      {/* left */}
      <div className="basis-1/2 px-16">
        <Image src={logo} width={100} className='mt-3'/>
        <p className="font-poppins font-bold text-4xl my-16 text-center">Login to your Account</p>
        <form action="" className='w-[90%] mx-auto'>
          <div className="border my-6 text-[#00000080] h-10 rounded-x flex items-center gap-4 bg-[#FAFBFE]">
            <i className="bi bi-telephone ms-4"></i>
            <input type="text" placeholder='Input your email or Phone Number' className='w-full h-full text-[#00000080] bg-transparent text-base outline-none font-poppins font-medium'/>
          </div>
          <div className="border my-10 text-[#00000080] h-10 rounded-x flex items-center gap-4 bg-[#FAFBFE]">
            <i className="bi bi-lock ms-4"></i>
            <input type="password" placeholder='Password' className='w-full h-full text-[#00000080] bg-transparent text-base outline-none font-poppins font-medium'/>
          </div>
          <div className="flex items-center justify-between">
            <div className='flex gap-2'>
              <input type="checkbox" id="rememberme" className='w-4'/>
              <label htmlFor="rememberme">Remember me</label>
            </div>
            <a href="/pass_recovery" className="text-blue-600 text-lg font-semibold">Forgot Password</a>
          </div>
          <input type="submit" value="Submit" className="bg-favblue text-white rounded-full py-2 w-3/5 block mx-auto my-8 font-poppins text-xl hover:opacity-90 cursor-pointer" />
        </form>
      </div>
      {/* right */}
      <div className="basis-1/2 bg-favblue flex flex-col py-12 items-center">
        <Image src={loginart}/>
        <p className="font-semibold font-poppins text-3xl text-white mt-10">Manage your Customers</p>
        <p className="font-semibold font-poppins text-lg text-white mt-4">Complete the information</p>
      </div>
    </section>
  )
}

export default SignIn;