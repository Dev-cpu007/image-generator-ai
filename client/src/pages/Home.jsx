import React from 'react';

const Home = () => {
    return (
        <>
        {/* <!-- Mobile-first header --> */}
    <header className="w-full py-4 sm:py-5 px-4 sm:px-8 md:px-16 flex flex-wrap justify-between items-center bg-white shadow-sm">
      {/* <!-- Logo --> */}
      <div className="flex items-center space-x-2">
        <span className="inline-block bg-[#3885ff] rounded-lg p-2">
          {/* <!-- Logo --> */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#3885ff"/>
            <circle cx="8" cy="8" r="2" fill="white"/>
            <circle cx="16" cy="8" r="2" fill="white"/>
            <circle cx="12" cy="16" r="2" fill="white"/>
            <path d="M8 8L12 16M16 8L12 16" stroke="white" stroke-width="1.5"/>
          </svg>
        </span>
        <span className="text-xl sm:text-2xl font-bold text-black">Kalpana-AI</span>
      </div>
      
      {/* <!-- Mobile menu toggle --> */}
      <button id="menu-toggle" className="md:hidden p-2 focus:outline-none" aria-label="Menu">
        <i className="fas fa-bars text-xl text-gray-700"></i>
      </button>
      
      {/* <!-- Mobile nav (hidden by default) --> */}
      <nav id="mobile-nav" className="w-full md:hidden bg-white">
        <div className="flex flex-col space-y-3 py-3">
          <a href="#" className="text-gray-700 text-sm hover:underline p-2">Pricing</a>
          <a href="#" className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition text-center">
            Login
          </a>
        </div>
      </nav>
      
      {/* <!-- Desktop nav --> */}
      <nav className="hidden md:flex items-center space-x-4 lg:space-x-2">
        <a href="#" className="text-gray-700 text-sm lg:text-base hover:underline p-2">Pricing</a>
        <a href="#" className="px-8 py-2 bg-black text-white rounded-full text-sm lg:text-base font-medium hover:bg-gray-800 focus:outline-none transition">
          Login
        </a>
      </nav>
    </header>

    {/* <!-- Hero section --> */}
    <main className="flex-grow">
      <section className="pt-6 pb-12 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* <!-- Badge - using original placeholder --> */}
          <div className="mb-4 sm:mb-8 text-center">
            <span className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-gray-200 bg-white shadow-sm text-sm sm:text-base font-normal">
              Best text to image generator
              <span className="ml-1 sm:ml-2">🧡</span>
            </span>
          </div>
          
          {/* <!-- Responsive headline --> */}
          <h1 className="hero-heading text-center text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            Turn text to <span className="text-[#3885ff]">image</span>, <br className="sm:hidden"/>in seconds
          </h1>
          
          {/* <!-- Description --> */}
          <p className="hero-description text-center text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Unleash your creativity with AI. Turn your imagination into visual art instantly.
          </p>
          
          {/* <!-- CTA - using original styling --> */}
          <div className="flex justify-center">
            <button className="w-full sm:w-auto px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition flex items-center justify-center">
              <span className="mr-2 text-base sm:text-lg">Generate Images</span>
              <span>✨</span>
            </button>
          </div>
          
          {/* <!-- Images - using original placeholders --> */}
          <div className="mt-6 sm:mt-10"> 
            {/* <!-- Reduced top margin on mobile --> */}
            <div className="grid grid-cols-2 sm:flex gap-2 sm:gap-3 justify-center"> 
                {/* <!-- Tighter gap on mobile --> */}
              {/* <!-- Image 1 - Always visible --> */}
              <div className="flex justify-center"> 
                {/* <!-- Wrapper for better centering --> */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDNxoeiMi1MIf18hNC8kWiGzwtYDl0qcVA6fQQ4GvVSQ&s&ec=72940545" 
                     alt="AI artwork sample" 
                     className="w-20 sm:w-24 aspect-square rounded-lg object-cover" 
                     loading="lazy"/> 
                     {/* <!-- Smaller size (w-20) on mobile --> */}
              </div>
              
              {/* <!-- Image 2 - Always visible --> */}
              <div className="flex justify-center">
                <img src="https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp" 
                     alt="AI artwork sample" 
                     className="w-20 sm:w-24 aspect-square rounded-lg object-cover"
                     loading="lazy"/>
              </div>
              
              {/* <!-- Image 3 - Hidden on mobile --> */}
              <div className="hidden sm:flex justify-center"> 
                {/* <!-- More semantic hiding --> */}
                <img src="https://asset.gecdesigns.com/img/wallpapers/hyper-realistic-beautiful-young-woman-with-party-gown-ai-generated-image-sr14062404-cover.webp" 
                     alt="AI artwork sample" 
                     className="w-24 aspect-square rounded-lg object-cover"
                     loading="lazy"/>
              </div>
              
              {/* <!-- Image 4 - Hidden on mobile --> */}
              <div className="hidden sm:flex justify-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmCEcMIJGwOqEtCFCxu8LErGvaNYnOTOtXBI1DwCsTw&s&ec=72940545" 
                     alt="AI artwork sample" 
                     className="w-24 aspect-square rounded-lg object-cover"
                     loading="lazy"/>
              </div>
            </div>
            <p className="text-center text-gray-500 text-xs mt-1 sm:mt-2"> 
                {/* <!-- Tighter spacing --> */}
              Examples generated by Kalpana-AI
            </p>
          </div>
          
        </div>
      </section>
      
      {/* <!-- Customer Testimonials Section --> */}
      
      {/* <!-- Showcase grid - using original placeholders --> */}
      <section className="py-6 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">AI Generated Masterpieces</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* <!-- Card 1 --> */}
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="aspect-square overflow-hidden rounded-lg mb-2">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/033/096/522/small_2x/volcanic-eruption-disaster-ai-generated-photo.jpg" 
                alt="Volcanic eruption" 
                className="w-full h-full object-cover"
                loading="lazy"/>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 text-center">"Sunset over mountains"</p>
            </div>
            {/* <!-- Card 2 --> */}
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="aspect-square overflow-hidden rounded-lg mb-2">
                <img src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/398a7fa4-5de3-4b47-aeb7-18060ae4a772/d34436e8-f22b-4a0e-90d0-ab3f8e81f2f5.png" 
                alt="Ocean view" 
                className="w-full h-full object-cover"
                loading="lazy"/>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 text-center">"Ocean at sunset"</p>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="aspect-square overflow-hidden rounded-lg mb-2">
                <img src="https://t3.ftcdn.net/jpg/05/58/17/60/360_F_558176055_q1eGdm8DLq9I6por4yilpNCaL3O8Fguf.jpg" 
                alt="Forest path" 
                className="w-full h-full object-cover"
                loading="lazy"/>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 text-center">"Misty forest pathway"</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* <!-- Steps section - original layout --> */}
      <section className="py-8 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">How it works</h2>
          <p className="text-center text-gray-600 text-sm sm:text-base mb-6">Transform Words Into Stunning Images</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center bg-white p-4 rounded-lg shadow-sm">
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="fas fa-edit text-blue-600"></i>
              </div>
              <h3 className="font-bold text-base">Describe</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Enter your vision in text</p>
            </div>
            <div className="text-center bg-white p-4 rounded-lg shadow-sm">
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="fas fa-bolt text-blue-600"></i>
              </div>
              <h3 className="font-bold text-base">Generate</h3>
              <p className="text-gray-600 text-xs sm:text-sm ">AI creates your artwork</p>
            </div>
            <div className="text-center bg-white p-4 rounded-lg shadow-sm">
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="fas fa-image text-blue-600"></i>
              </div>
              <h3 className="font-bold text-base">Enjoy</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Download or share</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <section>
      <header className="pt-16 pb-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Create AI Images</h1>
        <p className="mt-3 text-lg text-gray-400 font-normal">Turn your imagination into visuals</p>
      </header>
      
      {/* <!-- Main Section --> */}
      <section className="flex flex-col lg:flex-row gap-12 items-center justify-center mt-2 max-w-6xl mx-auto px-4 py-8">
        {/* <!-- Left: Image --> */}
        <div className="flex-shrink-0">
          <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="AI generated, monster and cake"
          className="rounded-xl shadow-lg max-w-xs sm:max-w-md lg:max-w-lg w-full object-cover"
          style={{ aspectRatio: '1/1' }}
          />
        </div>
        {/* <!-- Right: Text --> */}
        <div className="max-w-xl text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5 leading-snug">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-500 text-base mb-4">
            Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
          </p>
          <p className="text-gray-500 text-base">
            Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
          </p>
        </div>
      </section>
    </section>
    
    
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* <!-- Section Header --> */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Customer testimonials</h2>
          <p className="text-blue-600 mt-2">What Our Users Are Saying</p>
        </div>
        
        {/* <!-- Testimonial Cards --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <!-- Card 1 --> */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Donald Jackman" className="w-12 h-12 rounded-full object-cover mr-4 "/>
              <div>
                <h4 className="font-bold">Donald Jackman</h4>
                <p className="text-gray-500 text-sm">Graphic Designer</p>
              </div>
            </div>
            <div className="flex mb-3 text-yellow-400">
              ★ ★ ★ ★ ★
            </div>
            <p className="text-gray-600 italic">
              "I've been using Kalpana-AI for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier."
            </p>
          </div>
          
          {/* <!-- Card 2 --> */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Richard Nelson" className="w-12 h-12 rounded-full object-cover mr-4"/>
              <div>
                <h4 className="font-bold">Richard Nelson</h4>
                <p className="text-gray-500 text-sm">Content Creator</p>
              </div>
            </div>
            <div className="flex mb-3 text-yellow-400">
              ★ ★ ★ ★ ★
            </div>
            <p className="text-gray-600 italic">
              "Kalpana-AI has transformed how I create visual content. The quality is consistently impressive and saves me hours of work each week."
            </p>
          </div>
          
          {/* <!-- Card 3 --> */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="James Washington" className="w-12 h-12 rounded-full object-cover mr-4"/>
              <div>
                <h4 className="font-bold">James Washington</h4>
                <p className="text-gray-500 text-sm">Co-Founder</p>
              </div>
            </div>
            <div className="flex mb-3 text-yellow-400">
              ★ ★ ★ ★ ★
            </div>
            <p className="text-gray-600 italic">
              "As a startup founder, Kalpana-AI has been invaluable for creating professional marketing materials without needing a design team."
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Footer - original styling --> */}
    <footer className="bg-gray-900 text-white py-8 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <span className="text-xl font-bold text-blue-400">Kalpana-AI</span>
            <p className="text-gray-400 text-xs mt-1">© 2024 All rights reserved</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
        </>
    );
}

export default Home;
