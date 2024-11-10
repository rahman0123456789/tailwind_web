import React from 'react'

function Hero() {
  return (
    
      <div className=''>
      <section className="body-font">
  <div className="container mx-auto flex px-5 lg:my-10 md:flex-row flex-col items-center py-20">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mt-0 items-center text-center lg:pl-20 md:pl-10">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-400 border-b-2 ">
        Hello I'm Abdul Rahman
      </h1>
      <p className="mb-8 leading-relaxed text-lg">
      I am expert in Html,Tailwind Css, Javascript, Typescript, Nextjs, Sanity and also Postgre Sql i have made many websites.
Enthusiastic learner at PIAIC diving deep into the realms of certified cloud applied Generative AI.
Fueled by a passion for cutting-edge technologies, I'm on a mission to leverage these skills for impactful freelancing venture.
With a commitment to continuous growth, I'm excited about contributing to innovative projects and connecting with like-minded professionals. I am very passionate and hard working person . <br />

Contact: Please email me at <span className='text-orange-300 border-b-2'> rahmansiddiqui331@gmail.com </span> to reach out to me.
      </p>
      <div className="flex w-full md:justify-center justify-center items-center">
        <a href="/cv.pdf" target='_blank'>
        <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg font-bold">
          View CV
        </button></a>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:pr-20 md:pr-10">
      <img
        className="object-cover object-center rounded-full"
        alt="pic"
        src="/pic.jpeg"
      width={300} height={200}/>
    </div>
  </div>
</section>

    </div>
    
  )
}

export default Hero