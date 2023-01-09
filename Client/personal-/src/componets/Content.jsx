import React from 'react'

const Content = () => {
  return (
    <div name='content' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
       
       <form method='POST' action='https://getform.io/f/2df54861-1c27-4246-849d-76155c8d4bad' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className=' text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Content</p>
            <p className=' text-gray-300 py-4'>submit the from or send me an email - roee.lustiger@gmail.com</p>
        </div>
        <input  className=' p-2 bg-[#ccd6f6]' type='text' placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] py-2' name='massage' rows='10' placeholder='Message' ></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex item-center'>Let's talk</button>
       </form>
    </div>
  )
}

export default Content