import React from 'react';
// import {ReactComponent as SvgBatch} from '../assets/launchoffer/batch.svg'
// import {ReactComponent as Plus} from '../assets/launchoffer/plus-solid.svg'
function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen">
  
        <div className="relative flex flex-col w-full lg:w-[60%] h-[50%] lg:h-full">
 
          <img
            className="w-full h-full object-cover lg:object-fill"
            src="../../public/designify_gallery.png"
            alt=""
          />

    
          <p className="absolute text-white poppins-bold text-2xl md:text-4xl lg:text-5xl top-[20%] left-[5%] lg:top-[25%] lg:left-[12%]">
            Turn Any Photo <br /> Into Awesome
          </p>
          <p className="absolute text-white poppins-regular text-sm md:text-lg lg:text-2xl top-[35%] left-[5%] lg:top-[42%] lg:left-[12%]">
            100% Automatically and <span className="poppins-bold underline">Free</span>
          </p>

  
          <div className="absolute w-[90%] md:w-[533px] bgcolor top-[50%] left-[5%] lg:top-[55%] lg:left-[12%] cursor-pointer rounded-md h-[40px] flex items-center">
            <div className="pinkcolor rounded-xl text-white w-[42px] h-[23px] text-center m-2">
              <p>New</p>
            </div>
            <div>
              <p className="text-sm md:text-base text-center poppins-light m-2 ml-1">
                Advanced Batch-Editing and API access with Designify Pro
              </p>
            </div>
          </div>

  
          <img
            className="hidden lg:block absolute w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] ml-[95%] top-[45%] lg:top-[40%]"
            src="https://www.designify.com/start/arrow_green.svg"
            alt=""
          />

          <div className="hidden lg:flex lg:flex-col absolute ml-[50%] mt-[70%] items-center">
            <p className="w-[90px] text-white h-[24px] text-md poppins-regular"> Learn More</p>
            <img
              className="w-[38px] ml-1 h-[38px]"
              src="../../src/assets/downarrow.svg"
              alt=""
            />
          </div>
        </div>

   
        <div className="w-full lg:w-[40%] h-[50%] lg:h-full flex flex-col items-center justify-center lg:mt-0 px-5 lg:px-0">

          <div className="w-full md:w-[376px] flex flex-col rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-5 lg:p-10">
            <div className="w-full flex flex-col items-center">
              <img
                className="w-[60px] h-[60px] scale-110"
                src="https://www.designify.com/designify_icon_gray.svg"
                alt=""
              />

            
              <div className="flex flex-row cursor-pointer mt-4 gap-2 rounded-md h-[40px] md:h-[45px] bg-blue-500 items-center justify-center">
                <img
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                  src="../../public/upload.svg"
                  alt=""
                />
                <button className="text-base md:text-xl lg:text-2xl text-white poppins-bold">
                  Upload Image
                </button>
              </div>

       
              <p className="poppins-regular text-xs md:text-lg lg:text-xl mt-3 text-center">
                or drop a file
              </p>
            </div>
            <p className="mt-3 lg:mt-5 text-center text-xs md:text-sm lg:text-base">
              Paste Image cmd + V
            </p>
          </div>

       
          <div className="w-full flex flex-col items-center mt-5 lg:mt-16">
            <div className="flex flex-col items-center text-center">
              <div>
                <span className="lg:poppins-semibold">No Image?</span>
              </div>
              <div>
                <span className="poppins-semibold">Try one of these:</span>
              </div>
            </div>
            <div className="flex gap-2 mt-3 justify-center">
              <img
                className="w-[40px] h-[40px] md:w-[42px] md:h-[42px] rounded-md cursor-pointer"
                src="https://www.designify.com/demo-image-1-thumb.jpeg"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] md:w-[42px] md:h-[42px] rounded-md cursor-pointer"
                src="https://www.designify.com/demo-image-0-thumb.jpeg"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] md:w-[42px] md:h-[42px] rounded-md cursor-pointer"
                src="https://www.designify.com/demo-image-2-thumb.jpeg"
                alt=""
              />
              <img
                className="w-[40px] h-[40px] md:w-[42px] md:h-[42px] rounded-md cursor-pointer"
                src="https://www.designify.com/demo-image-3-thumb.jpeg"
                alt=""
              />
            </div>
          </div>

    
          <div className="w-full mt-5 text-center px-5">
            <p className="textcolor poppins-regular font">
              By uploading an image or URL you agree to our
              <span className="font-medium underline cursor-pointer">Terms of Service.</span> This site is <br />
              protected by hCaptcha and its
              <span className="font-medium underline cursor-pointer">Privacy Policy</span> and
              <span className="font-medium underline cursor-pointer">Terms of Service</span> apply.
            </p>
          </div>
        </div>
      </div>

      {/* create automotive */}
       <div className='w-screen h-[726px] pt-[112px] pb-[112px  relative' >
  
       <div className='absolute  '>
          <img className="w-[20px] h-[20px] ml-[100px] " src="https://www.designify.com/sprites/element_4.svg" alt="" />
       <img  className=' w-[53px] h-[52px] ml-[140px] mt-[30px] 'src="https://www.designify.com/sprites/element_1.svg" alt="" />
       </div>
 
     
      <div className='absolute   mt-[23%] '>
          <img className="w-[20px]  ml-[1500px]" src="https://www.designify.com/sprites/element_4.svg" alt="" />
     
          <img  className=' w-[53px]  mt-[3%] ml-[1420px] h-[52px] 'src="https://www.designify.com/sprites/element_3.svg" alt="" />
        </div> 
    
   
        <div className='w-[990px] h-[462px]  ml-[290px]  mr-[290px]   '> 
            <p className='poppins-bold text-4xl fontcolor2 text-center ml-4 mb-[29px]' > Create automatic designs using your favorite <br />photos</p>
            <p className='text-center fontcolor2 text-lg'>
            Pick any image to create AI-powered designs by automatically removing backgrounds, enhancing colors, adjusting smart shadows, and so much more. Save, download, or share your designs right away.
            </p>
            <div className='w-[958px] h-[263px] mt-[40px] flex justify-evenly align-baseline mb-[40px] ml-4 '> 
            <div className='w-[215px] h-[215px] '><img className='w-[128px] ml-[20px] mt-[22%] h-[128px] ' src="https://www.designify.com/start/intro/upload.png" alt="" />
            <p className='mt-[28%]  poppins-bold fontcolor2'>
              1. Upload Your Image
            </p>
            </div>
            <div className='w-[108px] h-[215px] '><img className='w-[64px]  mt-[90%] h-[64px] ' src="https://www.designify.com/start/arrow.svg" alt="" /></div>
            <div className='w-[215px] h-[215px] '><img className='w-[110px] mt-[30%] h-[110px] ' src="https://www.designify.com/logo_color.svg" alt="" />
            <p className='m-2 ml-6 mt-[30%] poppins-bold fontcolor2'>
              2.Magic
            </p>
            </div>
            <div className='w-[108px] h-[215px] '><img className='w-[64px] mt-[90%] h-[64px] ' src="https://www.designify.com/start/arrow.svg" alt="" /></div>
            <div className='w-[215px] h-[215px] '><img className='w-[215px] mt-3 h-[215px] ' src="https://www.designify.com/start/intro/choose.png" alt="" />
            <p className='mt-[20px] ml-[18px] poppins-bold fontcolor2'>
              3.Choose Your Design
            </p>
            </div>
            </div>
        </div>
      </div>
      {/* responsive */}
      {/* <div className="w-full h-screen pt-28 pb-28 relative">
  
  <div className="absolute top-0 left-0">
    <img className="w-5 h-5 ml-24 md:ml-10 lg:ml-32 xl:ml-36" src="https://www.designify.com/sprites/element_4.svg" alt="" />
    <img className="w-14 h-14 ml-36 md:ml-20 mt-8" src="https://www.designify.com/sprites/element_1.svg" alt="" />
  </div>


  <div className="absolute top-1/4 right-0">
    <img className="w-5 ml-96 md:ml-40 lg:ml-80 xl:ml-96" src="https://www.designify.com/sprites/element_4.svg" alt="" />
    <img className="w-14 h-14 mt-3 ml-72 md:ml-20 lg:ml-64 xl:ml-72" src="https://www.designify.com/sprites/element_3.svg" alt="" />
  </div>

  <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto text-center p-4">
    <p className="poppins-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-6">
      Create automatic designs using your favorite <br /> photos
    </p>
    <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-10">
      Pick any image to create AI-powered designs by automatically removing backgrounds, enhancing colors, adjusting smart shadows, and so much more. Save, download, or share your designs right away.
    </p>


    <div className="flex flex-col md:flex-row justify-center items-start gap-8">

      <div className="flex flex-col items-center mb-4">
        <img className="w-32 h-32" src="https://www.designify.com/start/intro/upload.png" alt="" />
        <p className="mt-4 poppins-bold text-gray-800 text-sm md:text-base">1. Upload Your Image</p>
      </div>

 
      <div className="flex items-center justify-center mb-4">
        <img className="w-16 h-16" src="https://www.designify.com/start/arrow.svg" alt="" />
      </div>

      <div className="flex flex-col items-center mb-4">
        <img className="w-28 h-28" src="https://www.designify.com/logo_color.svg" alt="" />
        <p className="mt-4 poppins-bold text-gray-800 text-sm md:text-base">2. Magic</p>
      </div>


      <div className="flex items-center justify-center mb-4">
        <img className="w-16 h-16" src="https://www.designify.com/start/arrow.svg" alt="" />
      </div>

      <div className="flex flex-col items-center mb-4">
        <img className="w-48 h-48" src="https://www.designify.com/start/intro/choose.png" alt="" />
        <p className="mt-4 poppins-bold text-gray-800 text-sm md:text-base">3. Choose Your Design</p>
      </div>
    </div>
  </div>
</div> 
*/}
{/* e commerce */}
<div className='w-[1556px] h-[727px] pt-[112px] pb-[112px] '>
  <div className='w-[990px]  h-[503px] ml-[283px] mr-[283px]pl-[16px] flex  pr-[16px] '>
   <div className='w-[479px] h-[503px]  '>
  <div className='w-[479px] h-[24px] text-xl poppins-bold text-[#5CE0A6]  ml-4 mb-[29px]'> <p>E-COMMERCE</p></div>
<div><p className='poppins-bold text-4xl fontcolor2  ml-4 mb-[29px]'>Create professional product photos - no studio required</p></div>
<div className='flex w-[470px] h-[207px] mt-[100px]'>
 <div>
<div>
<img className='w-[240px] h-[184px] mt-5' src="https://www.designify.com/start/ecommerce/original.png" alt="" />
<p className='poppins-bold text-[#98A0A6] ml-[8px] text-lg'>Original</p>
</div>
 </div>
  <img className='w-[98px] h-[98px] ml-[50px] mt-[50px]' src="https://www.designify.com/start/arrow.svg" alt="" />
</div>
   </div>
   <div className=' w-[479px] h-[479px] '>
   <img src="https://www.designify.com/start/ecommerce/design.png" alt="" />
   <p className='poppins-bold text-[#98A0A6] ml-[8px] text-lg'>Automatic Design</p>
   </div>
  </div>

</div>
{/* marketing */}
<div className='w-[1556px] h-[727px] pt-[112px] pb-[112px] '>
  <div className='w-[990px]  h-[503px] ml-[283px] mr-[283px] pl-[16px] flex  pr-[16px] '>
  <div className=' w-[479px] h-[479px] '>
   <img src="https://www.designify.com/start/marketing/design.png" alt="" />
   <p className='poppins-bold text-[#98A0A6] ml-[8px] text-lg'>Automatic Design</p>
   </div>
   <div className='w-[479px] h-[503px] '>
  <div className='w-[479px] h-[24px] text-xl poppins-bold text-[#5CE0A6]  ml-4 mb-[29px]'> <p>MARKETING</p></div>
<div><p className='poppins-bold text-4xl fontcolor2  ml-4 mb-[29px]'>Launch engaging campaigns with unique visuals</p></div>
<div className='flex w-[470px] h-[207px]  mt-[100px]'>
<div>
<img className='w-[98px] h-[98px] ml-[35px] mt-[50px] rotate-180' src="https://www.designify.com/start/arrow.svg" alt="" />
</div>

<div>
<img className='w-[240px] h-[184px] mt-5 ml-[30px]' src="https://www.designify.com/start/marketing/original.png" alt="" />
<p className='poppins-bold text-[#98A0A6] ml-[38px] text-lg'>Original</p>
</div>
 

</div>
   </div>
 
  </div>

</div>
{/* automotive */}
<div className='w-[1556px] h-[727px] pt-[112px] pb-[112px] '>
  <div className='w-[990px]  h-[503px] ml-[283px] mr-[283px]pl-[16px]  flex  pr-[16px] '>
   <div className='w-[479px] h-[503px]  '>
  <div className='w-[479px] h-[24px] text-xl poppins-bold text-[#5CE0A6]  ml-4 mb-[29px]'> <p>AUTOMOTIVE</p></div>
<div><p className='poppins-bold text-4xl fontcolor2  ml-4 mb-[29px]'>Display professional car photos to boost sales</p></div>
<div className='flex w-[470px] h-[207px] mt-[100px]'>
 <div>
  
<div>
<img className='w-[240px] h-[184px] mt-[60px]' src="https://www.designify.com/start/automotive/original.png" alt="" />
<p className='poppins-bold text-[#98A0A6] ml-[8px] text-lg'>Original</p>
</div>
 </div>
  <img className='w-[98px] h-[98px] ml-[50px] mt-[100px]' src="https://www.designify.com/start/arrow.svg" alt="" />
</div>
   </div>
   <div className=' w-[479px] h-[479px] '>
   <img src="https://www.designify.com/start/automotive/design.png" alt="" />
   <p className='poppins-bold text-[#98A0A6] ml-[8px] text-lg'>Automatic Design</p>
   </div>
  </div>

</div>
{/* SMART EDITOR */}
<div className=' w-[1570px] h-[600px] pt-[112px] pb-[112px]  ' >
  <div  className=' w-[990px] h-[377px] pl-[16px] pr-[16px]  ml-[290px] mr-[290px] flex'>
    <div className='w-[479px] h-[376px] '>
    <div className='w-[479px] h-[24px] text-xl poppins-bold text-[#5CE0A6]  mb-[29px]'> <p>SMART EDITOR</p></div>
    <div><p className='poppins-bold text-4xl fontcolor2  mb-[29px]'>Make it yours</p></div>
    
<div className=' w-[463px] h-[73px] mb-[16px] '>
<p className=' fontcolor2 size'>
    Edit your designs by adding a logo or any additional images. Adjust smart shadows, or automatically match the colors of your design elements.
    </p>
</div>
  
    <div  className=' w-[463px] h-[48px] mb-[16px] '>
      <p  className=' fontcolor2 size'>
      Sign up to save your designs, then use them to automate your editing work.
      </p>
      </div>
         
   <button className='rounded-md border text-[#2699FB] pt-[8px] mt-[20px] pb-[8px] pl-[24px] pr-[24px] text-sm poppins-semibold'>CREATE FREE ACCOUNT</button>
    </div>
    <div className='w-[463px] h-[376px] '>
    </div>
 <img src="https://www.designify.com/start/smart_editor.gif" alt="" />
  </div>
</div>
{/*   launch offer */}
    <div  className='w-[1570px] h-[580px] pt-[144px] pb-[144px] bg-pink-200 '>
      <div className='w-[990px] h-[292px] ml-[290px] mr-[290px] pl-[16px] pr-[16px] flex bg-yellow-200 '>
 <div className='w-[479px] h-[292px] pr-[40px] pl-[20px] bg-blue-100 '>
<div className=' w-[419px] h-[280px] mb-[12px] pl-[32px] pr-[32px] '>
 <div className='flex'> 
  <div>
     <img src="" alt="" />
  </div>
  <div>
<p> Batch Processing</p>
  </div>
 </div>
 <div className='flex'> 
  <div>

  </div>
  <div>
<p>High Resolution</p>
  </div>
 </div>
 <div className='flex'> 
  <div>

  </div>
  <div>
<p>API Access</p>
  </div>
 </div>
 <div className='flex'> 
  <div>
  {/* <SvgBatch width={100} heigth={100}/> */}
  </div>
  <div>
<p>Lifetime Feature Updates</p>
  </div>
 </div>
 <div className='flex'> 
  <div>
<img src="" alt="" />
  </div>
  <div>
    <p>Lifetime Price Guarantee</p>
  </div>
 </div>
</div>
 </div>
 <div className='w-[479px] h-[284px] mt-[8px] pl-[40px] pr-[20px] bg-green-300 '>
 <div className='w-[479px] h-[24px] text-xl poppins-bold text-[#FE4C61]  mb-[29px]'> <p>NEW</p></div>
 <div><p className='poppins-bold text-4xl fontcolor2  mb-[29px]'>Designify Pro</p></div>
 <div className=' w-[419px] h-[48px] mb-[16px] '>
<p className=' fontcolor2 size'>
Get access to our Batch Editor & API to supercharge your workflow and download all your images in HD!
    </p>
</div>
<button className='rounded-md border text-[#2699FB] pt-[8px] mt-[20px] pb-[8px] pl-[24px] pr-[24px] text-sm poppins-semibold'>Launch Offer</button>
</div>
      </div>
    </div>
    {/* FAQ  */}
    <div className='w-[1570px] h-[764px] pb-[112px] pt-[112px] bg-green-100'>
      <div className=' w-[990px] h-[540px] ml-[290px] mr-[290px] pl-[16px] pr-[16px] bg-red-100'>
        <div className='w-[958px] h-[44px] '>
        <div><p className='poppins-bold text-4xl text-center fontcolor2  mb-[40px]'>Frequently asked questions</p></div>
        {/* <Plus width={32} heigth={32}/> */}
        <div>

          <p>bhjhkhkjkhjkj</p>
        </div>
        </div>
 
      </div>
    </div>
    </>
  );
}

export default Home 
