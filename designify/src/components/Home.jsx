import React from 'react';
import Faq from './faq';
// import {ReactComponent as SvgBatch} from '../assets/launchoffer/batch.svg'
// import {ReactComponent as Plus} from '../assets/launchoffer/plus-solid.svg'
function Home() {
  return (
    <>
   <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
  {/* Left Section */}
  <div className="relative flex flex-col w-full lg:w-[60%] h-auto lg:h-full">
    <img
      className="w-full h-[40vh] md:h-[50vh] lg:h-full object-cover lg:object-fill"
      src="../../public/designify_gallery.png"
      alt=""
    />

    <p className="absolute text-white poppins-bold text-2xl md:text-4xl lg:text-5xl top-[30%] left-[10%] lg:top-[25%] lg:left-[12%]">
      Turn Any Photo <br /> Into Awesome
    </p>
    <p className="absolute text-white poppins-regular text-sm md:text-lg lg:text-2xl top-[60%] left-[10%] lg:top-[42%] lg:left-[12%]">
      100% Automatically and <span className="poppins-bold underline">Free</span>
    </p>

    <div className="absolute w-[90%] md:w-[533px] bgcolor top-[80%] left-[10%] lg:top-[55%] lg:left-[12%] cursor-pointer rounded-md h-[40px] flex items-center">
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

  {/* Right Section */}
  <div className="w-full lg:w-[40%] h-auto lg:h-full flex flex-col items-center bg-[#F9FAFA] justify-center lg:mt-0">
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
      <div className="flex gap-2 mt-3 justify-center flex-wrap">
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
      <div className='w-screen h-auto pt-[112px] pb-[112px] relative'>
  
  <div className='absolute'>
    <img className="w-[20px] h-[20px] ml-[100px]" src="https://www.designify.com/sprites/element_4.svg" alt="" />
    <img className='w-[53px] h-[52px] ml-[140px] mt-[30px]' src="https://www.designify.com/sprites/element_1.svg" alt="" />
  </div>

  <div className='absolute ml-[310px] mt-[-50px]'>
    <img src="https://www.designify.com/sprites/element_6.svg" alt="" />
  </div>

  <div className='absolute mt-[23%]'>
    <img className="w-[20px] ml-[1500px]" src="https://www.designify.com/sprites/element_4.svg" alt="" />
    <img className='w-[53px] mt-[3%] ml-[1420px] h-[52px]' src="https://www.designify.com/sprites/element_3.svg" alt="" />
  </div>

 
  <div className='w-full max-w-[990px] mx-auto h-auto'>
    <p className='poppins-bold text-4xl fontcolor2 z-50 text-center mb-[29px]'>
      Create automatic designs using your favorite  photos
    </p>
    <p className='text-center fontcolor2 text-lg px-4'>
      Pick any image to create AI-powered designs by automatically removing backgrounds, enhancing colors, adjusting smart shadows, and so much more. Save, download, or share your designs right away.
    </p>

    <div className='flex flex-col lg:flex-row justify-evenly items-center mt-[40px] mb-[40px]'>
   
      <div className='flex flex-col items-center w-full max-w-[215px] mb-5'>
        <img className='w-[128px] h-[128px]' src="https://www.designify.com/start/intro/upload.png" alt="" />
        <p className='mt-2 poppins-bold fontcolor2 text-center'>1. Upload Your Image</p>
      </div>

      <div className='hidden lg:flex items-center mb-5'>
        <img className='w-[64px] h-[64px]' src="https://www.designify.com/start/arrow.svg" alt="" />
      </div>

    
      <div className='flex flex-col items-center w-full max-w-[215px] mb-5'>
        <img className='w-[110px] h-[110px]' src="https://www.designify.com/logo_color.svg" alt="" />
        <p className='mt-2 poppins-bold fontcolor2 text-center'>2. Magic</p>
      </div>

     
      <div className='hidden lg:flex items-center mb-5'>
        <img className='w-[64px] h-[64px]' src="https://www.designify.com/start/arrow.svg" alt="" />
      </div>

      <div className='flex flex-col items-center w-full max-w-[215px]'>
        <img className='w-[215px] h-[215px]' src="https://www.designify.com/start/intro/choose.png" alt="" />
        <p className='mt-2 poppins-bold fontcolor2 text-center'>3. Choose Your Design</p>
      </div>
    </div>
  </div>
</div>


{/* e commerce */}
<div className='w-full max-w-[1556px] h-auto pt-[112px] bg-[#F9FAFA] pb-[112px]'>
  <div className='w-full max-w-[990px] h-auto mx-auto flex flex-col lg:flex-row px-4'>
    
    
    <div className='w-full lg:w-[479px] h-auto mb-10 lg:mb-0'>
      <div className='text-xl poppins-bold text-[#5CE0A6] ml-4 mb-[29px]'>
        <p>E-COMMERCE</p>
      </div>
      <div>
        <p className='poppins-bold text-4xl fontcolor2 ml-4 mb-[29px]'>
          Create professional product photos - no studio required
        </p>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-start mt-[100px]'>
        <div className='flex flex-col items-center'>
          <img className='w-[240px] h-[184px] mt-5' src="https://www.designify.com/start/ecommerce/original.png" alt="Original" />
          <p className='poppins-bold text-[#98A0A6] ml-[8px] text-lg'>Original</p>
        </div>

       
        <img className='hidden lg:block w-[98px] h-[98px] mx-5 mt-[50px]' src="https://www.designify.com/start/arrow.svg" alt="Arrow" />
        
      </div>
    </div>

    <div className='w-full lg:w-[479px] h-auto'>
      <img className='w-full h-auto' src="https://www.designify.com/start/ecommerce/design.png" alt="Automatic Design" />
      <p className='poppins-bold text-[#98A0A6] mt-2 text-lg text-center'>Automatic Design</p>
    </div>
  </div>
</div>

{/* marketing */}
<div className='w-full max-w-[1556px] h-auto pt-[112px] pb-[112px]'>
  <div className='w-full max-w-[990px] h-auto mx-auto px-4 flex flex-col lg:flex-row'>
   
    <div className='w-full lg:w-[479px] h-auto order-2 lg:order-1'>
      <img className='w-full h-auto mx-auto' src="https://www.designify.com/start/marketing/design.png" alt="Automatic Design" />
      <p className='poppins-bold text-[#98A0A6] mt-2 text-lg text-center'>Automatic Design</p>
    </div>

    <div className='w-full lg:w-[479px] h-auto order-1 lg:order-2'>
      <div className='text-xl poppins-bold text-[#5CE0A6] mb-[29px]'>
        <p>MARKETING</p>
      </div>
      <div>
        <p className='poppins-bold text-3xl lg:text-4xl fontcolor2 mb-[29px]'>
          Launch engaging campaigns with unique visuals
        </p>
      </div>

     
      <div className='flex flex-col lg:flex-row items-center justify-start mt-[60px]'>
        <div className='flex flex-col items-center lg:flex-row'>
         
          <img className='w-[50px] hidden lg:block lg:w-[98px] h-auto mb-5 lg:mb-0  ml-5 lg:rotate-180 lg:mr-[35px]' src="https://www.designify.com/start/arrow.svg" alt="Arrow" />

          <div>
            <img className=' w-[240px] h-[180px] lg:mt-12  mx-auto' src="https://www.designify.com/start/marketing/original.png" alt="Original" />
            <p className='poppins-bold text-[#98A0A6] text-lg mt-2 text-center'>Original</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* automotive */}

<div className='w-full max-w-[1556px] h-auto pt-[112px] bg-[#F9FAFA] pb-[112px]'>
  <div className='w-full max-w-[990px] h-auto mx-auto flex flex-col lg:flex-row px-4'>
    
    
    <div className='w-full lg:w-[479px] h-auto mb-10 lg:mb-0'>
      <div className='text-xl poppins-bold text-[#5CE0A6] ml-4 mb-[29px]'>
        <p>AUTOMOTIVE</p>
      </div>
      <div>
        <p className='poppins-bold text-4xl fontcolor2 ml-4 mb-[29px]'>
        Display professional car photos to boost sales
        </p>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-start mt-[100px]'>
        <div className='flex flex-col lg:mt-10 items-center'>
          <img className='w-[240px] h-[184px] mt-5' src="https://www.designify.com/start/automotive/original.png" alt="Original" />
          <p className='poppins-bold text-[#98A0A6] ml-[8px] text-lg'>Original</p>
        </div>

   
        <img className='hidden lg:block w-[98px] h-[98px] mx-5 mt-[50px]' src="https://www.designify.com/start/arrow.svg" alt="Arrow" />
        
      </div>
    </div>

  
    <div className='w-full lg:w-[479px] h-auto'>
      <img className='w-full h-auto' src="https://www.designify.com/start/automotive/design.png" alt="Automatic Design" />
      <p className='poppins-bold text-[#98A0A6] mt-2 text-lg text-center'>Automatic Design</p>
    </div>
  </div>
</div>


{/* SMART EDITOR */}
<div className='w-full max-w-[1570px] h-auto pt-10 pb-10'>
  <div className='w-full max-w-[990px] h-auto mx-auto px-4 flex flex-col lg:flex-row lg:justify-between'>
  
    <div className='w-full lg:w-[479px] h-auto'>
      <div className='w-full h-auto text-xl poppins-bold text-[#5CE0A6] mb-7'>
        <p>SMART EDITOR</p>
      </div>
      <div>
        <p className='poppins-bold text-3xl lg:text-4xl fontcolor2 mb-7'>Make it yours</p>
      </div>
      <div className='w-full h-auto mb-4'>
        <p className='fontcolor2 text-sm lg:text-base'>
          Edit your designs by adding a logo or any additional images. Adjust smart shadows, or automatically match the colors of your design elements.
        </p>
      </div>
      <div className='w-full h-auto mb-4'>
        <p className='fontcolor2 text-sm lg:text-base'>
          Sign up to save your designs, then use them to automate your editing work.
        </p>
      </div>
      <button className='rounded-md border text-[#2699FB] pt-2 pb-2 pl-6 pr-6 text-sm poppins-semibold mt-5'>
        CREATE FREE ACCOUNT
      </button>
    </div>
    
    
    <div className='w-full lg:w-[463px] h-auto mt-5 lg:mt-0'>
      <img src="https://www.designify.com/start/smart_editor.gif" alt="Smart Editor" className='w-full h-auto' />
    </div>
  </div>
</div>


{/*   launch offer */}
<div className='w-full h-auto pt-10 pb-10 lg:pt-[144px] lg:pb-[144px]'>
  <div className='w-full max-w-[990px] h-auto mx-auto px-4 flex flex-col lg:flex-row lg:justify-between'>
  
    <div className='w-full lg:w-[479px] pr-[40px] pl-[20px] flex justify-center'>
      <div className='w-full h-auto mb-[12px] px-4'>
        <div className='flex justify-start lg:justify-start items-center mb-4'>
          <img className='w-[40px] h-[40px] mr-2' src="../../src/assets/downarrow.svg" alt="Down Arrow" />
          <p className='text-lg poppins-semibold text-[#454545] text-center'>Batch Processing</p>
        </div>
        <div className='flex justify-start lg:justify-start items-center mb-4'>
          <img className='w-[40px] h-[40px] mr-2' src="../../src/assets/downarrow.svg" alt="Down Arrow" />
          <p className='text-lg poppins-semibold text-[#454545] text-center'>High Resolution</p>
        </div>
        <div className='flex justify-start lg:justify-start items-center mb-4'>
          <img className='w-[40px] h-[40px] mr-2' src="../../src/assets/downarrow.svg" alt="Down Arrow" />
          <p className='text-lg poppins-semibold text-[#454545] text-center'>API Access</p>
        </div>
        <div className='flex justify-start lg:justify-start items-center mb-4'>
          <img className='w-[40px] h-[40px] mr-2' src="../../src/assets/downarrow.svg" alt="Down Arrow" />
          <p className='text-lg poppins-semibold text-[#454545] text-center'>Lifetime Feature Updates</p>
        </div>
        <div className='flex justify-start lg:justify-start items-center'>
          <img className='w-[40px] h-[40px] mr-2' src="../../src/assets/downarrow.svg" alt="Down Arrow" />
          <p className='text-lg poppins-semibold text-[#454545] text-center'>Lifetime Price Guarantee</p>
        </div>
      </div>
    </div>

   
    <div className='w-full lg:w-[479px] h-auto mt-8 lg:mt-0 flex flex-col items-center lg:items-start'>
      <div className='w-full text-center lg:text-left text-xl poppins-bold text-[#FE4C61] mb-6'>
        <p>NEW</p>
      </div>
      <div>
        <p className='poppins-bold text-3xl lg:text-4xl fontcolor2 mb-6 text-center lg:text-left'>Designify Pro</p>
      </div>
      <div className='w-full mb-4'>
        <p className='fontcolor2 text-sm lg:text-base text-center lg:text-left'>
          Get access to our Batch Editor & API to supercharge your workflow and download all your images in HD!
        </p>
      </div>
      <button className='rounded-md border text-[#2699FB] pt-2 pb-2 pl-6 pr-6 text-sm poppins-semibold mt-5'>
        Launch Offer
      </button>
    </div>
  </div>
</div>


    {/* they love us */}
    <div className='w-full h-auto pt-10 pb-10 lg:pt-[128px] lg:pb-[128px] '>
  <div className='w-full max-w-[990px] h-auto mx-auto px-5 lg:px-0'>
 
    <div className='w-full text-center'>
      <p className='poppins-bold text-2xl lg:text-4xl fontcolor2 mb-6 lg:mb-[24px]'>
        They love us. You will too.
      </p>
    </div>

   
    <div className='w-full mt-6 lg:mt-[40px] flex flex-wrap gap-5 justify-center'>
    
      <div className='p-5 w-full sm:w-[80%] md:w-[45%] lg:w-[304px] h-auto rounded-lg border-4'>
        <div className='w-full h-auto flex justify-center'>
          <img className='max-w-[150px] h-auto' src="https://www.designify.com/testimonials/shira_brown.png" alt="Shira Brown" />
        </div>
        <div className='w-full h-auto mt-6'>
          <p className='text-base lg:text-lg poppins-semibold text-[#454545] text-center'>
            “It is intuitive and makes amazing photos - even out of a boring photo. Designify.com is an essential tool in my work with clients of all industries.”
          </p>
        </div>
        <div className='w-full h-auto text-center mt-3'>
          <p className='text-base lg:text-lg poppins-semibold text-[#454545]'>
            Shira
          </p>
          <p className='fontcolor2 text-sm lg:text-base'>
            CEO of Shirabrown.com
          </p>
        </div>
      </div>

     
      <div className='p-5 w-full sm:w-[80%] md:w-[45%] lg:w-[304px] h-auto rounded-lg border-4'>
        <div className='w-full h-auto flex justify-center'>
          <img className='max-w-[150px] h-auto' src="https://www.designify.com/testimonials/snapautos.jpg" alt="Snap Autos" />
        </div>
        <div className='w-full h-auto mt-6'>
          <p className='text-base lg:text-lg poppins-semibold text-[#454545] text-center'>
            “Designify has allowed my company to remove and add backgrounds to vehicle photos easily. The best AI photo editing app by far!”
          </p>
        </div>
        <div className='w-full h-auto text-center mt-3'>
          <p className='text-base lg:text-lg poppins-semibold text-[#454545]'>
            Shergio Diaz
          </p>
          <p className='fontcolor2 text-sm lg:text-base'>
            CEO of Snap Autos
          </p>
        </div>
      </div>

     
      <div className='p-5 w-full sm:w-[80%] md:w-[45%] lg:w-[304px] h-auto rounded-lg border-4'>
        <div className='w-full h-auto flex justify-center'>
          <img className='max-w-[150px] h-auto' src="https://www.designify.com/testimonials/ad_brain.png" alt="Adbrain" />
        </div>
        <div className='w-full h-auto mt-6'>
          <p className='text-base lg:text-lg poppins-semibold text-[#454545] text-center'>
            “Designify Pro helps me create professional-looking marketing assets for my clients. It is really easy to use, and I am genuinely amazed by the images’ resolution within the paid version. I love it!”
          </p>
        </div>
        <div className='w-full h-auto text-center mt-3'>
          <p className='text-base lg:text-lg poppins-semibold text-[#454545]'>
            Wiktoria
          </p>
          <p className='fontcolor2 text-sm lg:text-base'>
            CEO of Adbrain
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


    {/* how it work */}
    <div className='w-full h-auto pt-10 pb-10 lg:pt-[144px] lg:pb-[144px] bg-[#F9FAFA] relative'>
  
  <div className='hidden lg:block absolute top-0 left-0 '>
    <img className='w-[217px] h-auto' src="https://www.designify.com/sprites/element_5.svg" alt="" />
  </div>

  <div className='hidden lg:block absolute right-0 top-0 mt-[-100px]'>
    <img src="https://www.designify.com/sprites/element_7.svg" alt="" />
  </div>
  
  <div className='hidden lg:block absolute right-0 mt-[280px]'>
    <img src="https://www.designify.com/sprites/element_8.svg" alt="" />
  </div>

  <div className='hidden lg:block absolute left-0 mt-[110px]'>
    <img src="https://www.designify.com/sprites/element_6.svg" alt="" />
  </div>

  <div className='hidden lg:block absolute right-0 mt-[240px]'>
    <img src="https://www.designify.com/sprites/element_4.svg" alt="" />
  </div>

  <div className='hidden lg:block absolute left-[230px] mt-[-80px]'>
    <img src="https://www.designify.com/sprites/element_4.svg" alt="" />
  </div>

  {/* Main Content */}
  <div className='w-full lg:w-[958px] mx-auto h-auto'>
    <div className='text-center text-lg lg:text-xl font-bold text-[#5CE0A6] mb-5 lg:mb-[29px]'>
      <p>HOW IT WORKS</p>
    </div>

    <div className='w-full h-auto text-center'>
      <p className='text-2xl lg:text-4xl font-bold text-[#454545] mb-6 lg:mb-[29px]'>
        Artificial intelligence for design
      </p>
    </div>

    <div className='w-full lg:w-[958px] h-auto mb-4 lg:mb-[16px] px-5 lg:px-[94px]'>
      <p className='text-center text-sm lg:text-base text-[#454545]'>
        Designify combines the world's most advanced visual AIs into one simple tool. Remove backgrounds from any image in high quality, add realistic shadows, and enhance colors to create beautiful designs using artificial intelligence.
      </p>
    </div>
  </div>
</div>

    {/* FAQ  */}
    <div className='w-full h-auto pb-10 pt-10 lg:pb-[112px] lg:pt-[112px]'>
  <div className='w-full lg:w-[990px] h-auto lg:h-[540px] mx-auto px-4 lg:px-[16px]'>
    <div className='w-full lg:w-[958px] h-auto'>
      <div>
        <p className='poppins-bold text-2xl sm:text-3xl lg:text-4xl text-center fontcolor2 mb-6 lg:mb-[40px]'>
          Frequently asked questions
        </p>
      </div>
      <Faq/>
    </div>
  </div>
</div>

    {/* try it yourself */}
    <div className='w-full h-auto bg-[#F9FAFA] relative pt-10 pb-10 lg:pt-[112px] lg:pb-[112px]'>

 <div className='relative lg:block hidden'>

 <img className='absolute left-[35%] translate-x-[-50%] mt-[40px] lg:mt-[50px] w-[60px] h-[60px] lg:w-[105px] lg:h-[105px]' src="https://www.designify.com/start/arrow_green.svg" alt="Arrow" />


<div className='absolute left-[10px] lg:left-[100px] top-[240px] lg:top-[340px]'>
  <img src="https://www.designify.com/sprites/element_4.svg" alt="Element" />
</div>

<img className='absolute right-[10px] lg:right-[100px] top-[90px]' src="https://www.designify.com/sprites/element_9.svg" alt="Element" />

<img className='absolute left-[10px] mt-8' src="https://www.designify.com/sprites/element_7.svg" alt="Element" />

<div className='absolute left-[40px] lg:left-[140px] top-[180px] lg:top-[240px]'>
  <img src="https://www.designify.com/sprites/element_4.svg" alt="Element" />
</div>

 </div>
 
  <div className="w-full lg:w-[40%] h-auto lg:h-full mx-auto flex flex-col items-center justify-center px-4 lg:px-0">
    <div className="w-full md:w-[376px] flex flex-col rounded-md">
      <div className="w-full flex flex-col items-center">
     
        <p className='poppins-bold text-2xl sm:text-3xl lg:text-4xl text-center fontcolor2 mb-6 lg:mb-[40px]'>Try it yourself</p>

       
        <div className="flex flex-row cursor-pointer mt-4 gap-2 rounded-md h-[40px] md:h-[45px] bg-blue-500 items-center justify-center w-full lg:w-[270px] max-w-xs lg:max-w-md">
          <img className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]" src="../../public/upload.svg" alt="Upload Icon" />
          <button className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white poppins-bold">Upload Image</button>
        </div>

        <p className="poppins-regular text-xs sm:text-sm md:text-lg lg:text-xl mt-3 text-center">or drop a file</p>
      </div>
    </div>

  
    <div className="w-full flex flex-col  lg:ml-[40%] lg:flex-row gap-2 mt-5 items-center lg:items-start">
      <div className="text-center lg:mt-6 lg:text-left">
        <p className="poppins-semibold">No Image?</p>
        <p className="poppins-semibold">Try one of these:</p>
      </div>
      <div className="flex gap-2 justify-center mt-3 lg:mt-6">
    
        <img className="w-[40px] h-[40px] md:w-[42px] md:h-[42px] lg:w-[50px] lg:h-[50px] rounded-md cursor-pointer" src="https://www.designify.com/demo-image-1-thumb.jpeg" alt="Demo 1" />
        <img className="w-[40px] h-[40px] md:w-[42px] md:h-[42px] lg:w-[50px] lg:h-[50px] rounded-md cursor-pointer" src="https://www.designify.com/demo-image-0-thumb.jpeg" alt="Demo 2" />
        <img className="w-[40px] h-[40px] md:w-[42px] md:h-[42px] lg:w-[50px] lg:h-[50px] rounded-md cursor-pointer" src="https://www.designify.com/demo-image-2-thumb.jpeg" alt="Demo 3" />
        <img className="w-[40px] h-[40px] md:w-[42px] md:h-[42px] lg:w-[50px] lg:h-[50px] rounded-md cursor-pointer" src="https://www.designify.com/demo-image-3-thumb.jpeg" alt="Demo 4" />
      </div>
    </div>

  
    <div className="w-full mt-5 font text-center px-5 lg:px-0">
      <p className="textcolor poppins-regular font  ">
        By uploading an image or URL you agree to our <span className="font-medium underline cursor-pointer">Terms of Service</span>. This site is <br />
        protected by hCaptcha and its <span className="font-medium underline cursor-pointer">Privacy Policy</span> and <span className="font-medium underline cursor-pointer">Terms of Service</span> apply.
      </p>
    </div>
  </div>
</div>

  {/* footer */}
  <div className='w-full h-auto pt-[64px] pb-[24px]'>
  <div className='w-full lg:w-[990px] h-auto mx-auto px-[16px]'>
    <div className='w-full lg:w-[958px] h-auto pb-[16px]'>
      <div className='flex flex-col lg:flex-row'>
     
        <div className='w-full lg:w-[239px] pr-[16px] h-auto mb-8 lg:mb-0'>
          <div className='w-full h-auto'>
            <p className='text-lg mb-[12px] poppins-semibold text-[#454545]'>Designify</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>Designs</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>Pricing</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>API</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>Batch Editor</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>Product Feedback</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>Help & Contact</p>
          </div>
        </div>

        
        <div className='w-full lg:w-[239px] pr-[16px] h-auto mb-8 lg:mb-0'>
          <div className='h-auto'>
            <p className='text-lg mb-[12px] poppins-semibold text-[#454545]'>Get Started</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>E-Commerce</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>Car Dealership</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>Batch Editing</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>API Integration</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>Customize Design</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>3D Shadows</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>Background Removal</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>Auto Enhance</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>Fix pixelation</p>
          </div>
        </div>

       
        <div className='w-full lg:w-[239px] pr-[16px] h-auto mb-8 lg:mb-0'>
          <div className='w-full h-auto'>
            <p className='text-lg mb-[12px] poppins-semibold text-[#454545]'>Our Company</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>About us</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>Press</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>Image Background Removal</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>Video Background Removal</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>Enterprise Solutions</p>
            <p className='fontcolor2 poppins-regular mb-[12px]'>Careers</p>
          </div>
        </div>

       
        <div className='w-full lg:w-[239px] h-auto mb-8 lg:mb-0'>
          <div className='w-full h-auto'>
            <p className='text-lg mb-[12px] poppins-semibold text-[#454545]'>Follow Designify</p>
            <div className='flex lg:justify-evenly mb-8'>
              <img className='w-[41px] h-[41px] cursor-pointer' src="../../public/twiter.svg" alt="Twitter" />
              <img className='w-[41px] h-[41px] cursor-pointer' src="../../public/facebook.svg" alt="Facebook" />
              <img className='w-[41px] h-[41px] cursor-pointer' src="../../public/instagram.svg" alt="Instagram" />
            </div>
            <img src="https://api.producthunt.com/widgets/embed-image/v1/product_rating.svg?product_id=461578&theme=light" alt="Product Rating" />
          </div>
        </div>
      </div>

      <hr />

    
      <div className='w-full lg:w-[958px] mt-[24px] h-auto flex flex-col lg:flex-row justify-between'>
        <p className='font12px poppins-regular text-[#454545]'>© Designify, a <span className='underline cursor-pointer'>Canva Austria GmbH</span> brand</p>
        <div className='flex flex-wrap mt-4 lg:mt-0'>
          <p className='font12px poppins-regular text-[#454545] ml-[4px] mr-[4px] cursor-pointer'>Terms of Service</p>
          <p className='font12px poppins-regular text-[#454545] ml-[4px] mr-[4px] cursor-pointer'>| General Terms and Conditions</p>
          <p className='font12px poppins-regular text-[#454545] ml-[4px] mr-[4px] cursor-pointer'>| Privacy Policy</p>
          <p className='font12px poppins-regular text-[#454545] ml-[4px] mr-[4px] cursor-pointer'>| Cookie Policy</p>
          <p className='font12px poppins-regular text-[#454545] ml-[4px] mr-[4px] cursor-pointer'>| Refunds</p>
          <p className='font12px poppins-regular text-[#454545] ml-[4px] mr-[4px] cursor-pointer'>| Imprint</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Home 
