function Button({buttonText,  content = "non-hero"}){
    return(
        <>
        {content === "hero" ? 
        <button className='mt-4 px-4 text-[18px] bg-[#0989b1] rounded-lg text-white py-2 hover:bg-white hover:text-[#0989b1] font-semibold  transition-all duration-300 ease-in-out'>{buttonText}</button>
         : 
        <button className='mt-4 px-4 bg-[#0989b1] rounded-lg text-white py-2 hover:bg-[#a2845e] font-semibold'>{buttonText}</button>
        
        }
        </>
    )
}

export default Button;