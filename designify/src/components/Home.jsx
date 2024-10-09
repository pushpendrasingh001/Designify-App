import React from 'react'

function Home() {
  return (
    <>

    <div className=' flex '>
<div className=' relative flex flex-col lg:w-[60%]'>
<img  className='h-screen'src="../../public/designify_gallery.png" alt="" />
<p className='absolute text-white poppins-bold text-8xl mt-[30%] ml-[10%]'> Turn Any Photo <br /> Into Awesome</p>
<p className='absolute text-white poppins-regular text-2xl mt-[50%] ml-[10%]'>100% Automatically and <span className='poppins-bold underline '>Free</span></p>
<div className=' absolute w-[533px] bgcolor mt-[60%] ml-[10%] cursor-pointer rounded-md h-[40px] flex '>
<div className=' pinkcolor rounded-xl text-white w-[42px] h-[23px] text-center m-2'>
<p> New</p>
</div>
<div>
  <p className='text-center  poppins-light m-2 ml-1'>
 Advanced Batch-Editing and API access with Designify Pro
  </p>
</div>
</div>
<img className=' absolute w-[150px] h-[150px] ml-[95%] mt-[40%] ' src="https://www.designify.com/start/arrow_green.svg" alt="" />
</div>
<div className='w-[376px] h-[650px] mt-[10%] ml-[10%] '>
<div className=' w-[376px] h-[350px] flex flex-col rounded-md drop-shadow-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
  <div className='w-[220px] h-[200px] mt-9 ml-24 '>
   
   <img className='w-[80px] h-[71px] ml-14 flex mt-5 scale-125 ' src="https://www.designify.com/designify_icon_gray.svg" alt="" />

    <div className='flex cursor-pointer mt-16  gap-3 rounded-md h-[45px] bg-blue-500'>
      <img className='w-[32px] mt-1 p-0 h-[32px]' src="../../public/vite.svg" alt="" />
    <button className=' text-2xl text-white poppins-bold'>Upload Image</button>
    </div>
    <p className='poppins-regular text-2xl ml-[15%] mt-[10%]'> or drop a file </p>
  </div>
  <p className='ml-[33%] mt-[15%]'>  Paste Image  cmd + V</p>
</div>
<div className='w-[340px] flex h-[50px] ml-5 mt-16'>
<div className='flex flex-col'>
<div>  <span className='poppins-semibold'>No Image ?</span>
</div>
<div>
  <span className='poppins-semibold'> Try one of these :</span>
</div>
</div>
<div className='flex gap-2 mt-1 justify-evenly ml-2'>
<img className='w-[42px] h-[42px] rounded-md cursor-pointer' src="https://www.designify.com/demo-image-1-thumb.jpeg" alt="" />
<img className='w-[42px] h-[42px] rounded-md cursor-pointer' src="https://www.designify.com/demo-image-0-thumb.jpeg" alt="" />
<img className='w-[42px] h-[42px] rounded-md cursor-pointer' src="https://www.designify.com/demo-image-2-thumb.jpeg" alt="" />
<img className='w-[42px] h-[42px] rounded-md cursor-pointer'  src="https://www.designify.com/demo-image-3-thumb.jpeg" alt="" />
</div>
</div>
<div className='w-[340px] mt-2 ml-5'>
  <p className='text-sm'>
  By uploading an image or URL you agree to our <span className='font-medium underline cursor-pointer'>Terms of Service.</span> This site is protected by hCaptcha and its <span className='font-medium underline cursor-pointer'>Privacy Policy</span> and <span className='font-medium underline cursor-pointer'>Terms of Service</span> apply.
  </p>
</div>
</div>
    </div>
    <div className='h-[500px] bg-red-50
    '>

    </div>
    </>
  )
}

export default Home
