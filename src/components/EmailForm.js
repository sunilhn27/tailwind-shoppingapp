import React from 'react'

function EmailForm() {
  return (
    <div className='bg-[#E5C643] w-full h-[500px] flex items-center'>

      <div className='text-white flex flex-col justify-center mx-auto text-center  h-[500px]'>
        <h1 className='font-extrabold text-5xl w-[850px]'>
          JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </h1>
        <h4 className='text-1xl mt-4'>
          Type your email down below and be young wild generation
        </h4>
        <div className='mt-6 flex justify-center'>
          <div className='relative'>
            <input placeholder='Add your email here' className='w-[400px] px-2 py-4 text-start rounded-lg'></input>
            <button className='text-white bg-black absolute top-0 right-0  px-6 py-3 my-1 mr-2 rounded-lg'>SEND</button>
          </div>
        </div>
      </div>

    </div>



  )
}

export default EmailForm