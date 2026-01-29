import Contribute from "../pages/home/Contribute";
import Button from "./Button";
import { useEffect, useRef } from "react";

function Card() {
  const cardsData = [
  { title: "Card 1", description: "This card appears first as you scroll down." },
  { title: "Card 2", description: "Second card appears below the first one." },
  { title: "Card 3", description: "Third card slides in as you scroll." },
];

const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
    return (<> 
    {/* <div className='max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-6 cursor-pointer'>
   
   
    <div className='p-4'>
      
      <div className="text-[#0989b1] text-[26px] font-bold">{title}</div>
      <p className='mt-2 text-gray-600 text-sm'>{subtext}</p>
      <Button buttonText={buttonText}/>
      
    </div>
   </div> */}
  {/* <div class="flex flex-wrap gap-4 p-8">
  
  <div class="flex-1 min-w-[220px] bg-white border border-gray-200 rounded-xl mt-8 shadow-md p-6 transition-all duration-300 hover:flex-[2_2_0%] hover:shadow-xl hover:scale-105 cursor-pointer">
     <div className="text-[#0989b1] text-[26px] font-bold">{title1}</div>
      <p className='mt-2 text-gray-600 text-sm'>{subtext1}</p>
      <Button buttonText={buttonText1}/>
  </div>

  <div class="flex-1 min-w-[220px] bg-white border border-gray-200 rounded-xl mt-8 shadow-md p-6 transition-all duration-300 hover:flex-[2_2_0%] hover:shadow-xl hover:scale-105 cursor-pointer">
   <div className="text-[#0989b1] text-[26px] font-bold">{title2}</div>
      <p className='mt-2 text-gray-600 text-sm'>{subtext2}</p>
      <Button buttonText={buttonText2}/>
  </div>

  <div class="flex-1 min-w-[220px] bg-white border border-gray-200 rounded-xl mt-8 shadow-md p-6 transition-all duration-300 hover:flex-[2_2_0%] hover:shadow-xl hover:scale-105 cursor-pointer">
 <div className="text-[#0989b1] text-[26px] font-bold">{title3}</div>
      <p className='mt-2 text-gray-600 text-sm'>{subtext3}</p>
      <Button buttonText={buttonText3}/>
  </div>
</div> */}

<div className="flex flex-col gap-6 p-8">
      {cardsData.map((card, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="card opacity-0 translate-y-8 bg-white rounded-lg shadow-md transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          <Contribute />
        </div>
      ))}
    </div>
   </>)
}

export default Card;