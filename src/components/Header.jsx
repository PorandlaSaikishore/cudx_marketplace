import logo from "../assets/cudx_logo.png"
import HeaderMenu from "./HeaderMenu";
import HeroSection from "./HeroSection";
import img from  "../assets/bg-img.webp"

function Header() {
  return (
    <>
    {/* <div className="flex items-center justify-between px-16 md:px-8 lg:px-16 py-4" >

      <div><img src="https://cudx.com/wp-content/uploads/2024/03/cropped-CUDX_WHT_Reflective-ezgif.com-png-to-webp-converter-1-e1711521683907.webp" alt="cudx_logo" width={150} height={150} /></div>
      <div className="text-white font-semibold flex gap-7">
        <div>About US</div>
        <div>Contribute Data</div>
        <div>Acquire Data</div>
        <div>News&Media</div>
        <div>Contact</div>
      </div>
    </div> */}
    <div className="bg-gradient-to-r from-sky-400 via-blue-900 to-black relative h-[450px] bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-900 to-black/60" />
         <div className="relative z-10 h-full">
      {/* <div className="border border-gray-300 rounded-[10px] w-[95%] mx-auto"> <HeaderMenu /></div> */}
     <div><HeroSection /></div>
    </div>
    </div>
    </>
  )
}

export default Header;