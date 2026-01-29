import { useState, useRef, useEffect } from "react";




function HeroSection() {

 const texts = [
  "Contribute Data, Create Value", 
  "Access the Power of Cooperative Intelligence", 
  "Invest in the Future of Cooperative Data"];


  return (
    <>
      <div className="mx-[5%] pb-7 ">
        <div className="text-4xl text-white mt-[7%]">Empowering the Credit Union Movement Through Shared Data</div>
        <div className="text-2xl text-white mt-[1%] w-[50%] pb-[10%]">The Credit Union Data Exchange (CUDX) turns shared credit union data into collective intelligence, economic opportunity, and innovation</div>
       
    <div 
      style={{
        position: "relative",
        height: "3rem",
        overflow: "hidden",
        fontSize: "2rem",
        fontWeight: "bold",
        color: "white",
      }}
    >
      {texts.map((text, index) => (
        <span
          key={text}
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0,
            animation: "fadeText 6s infinite",
            animationDelay: `${index * 2}s`,
          }}
        >
          {text}
        </span>
      ))}

      <style>
        {`
          @keyframes fadeText {
            0% { opacity: 0; transform: translateY(10px); }
            10% { opacity: 1; transform: translateY(0); }
            30% { opacity: 1; }
            40% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 0; }
          }
        `}
      </style>
    </div>
    
  </div>
        


    </>
  )
}

export default HeroSection;