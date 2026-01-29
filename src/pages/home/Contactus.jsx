import bgImage from "../../assets/contactus.png"

function Contactus() {
    return (<>
        <div className="relative h-screen">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-right"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#a2845e]/87"></div>

            {/* Content */}
            <div className="relative z-10 items-center text-center justify-center h-full text-white pt-[50px] pb-[50px]">
                <div className="text-[48px]">Contact Us</div>
                <div className="text-[24px]">Want to be a part of CUDX?</div>

                <div>Fill out this form and we’ll reach out to you to begin the process.</div>

                <div className="bg-white text-black w-1/2 mx-auto text-center justify-center p-[5%] rounded-[10px] text-[13px] text-black">
                    <div className="flex">
                        <input className="border border-gray-500 text-black rounded-xs p-[5px] py-[10px] w-3xl mr-2" type="text" placeholder="First Name" />
                        <input className="border border-gray-500 text-black rounded-xs p-[5px] py-[10px] w-3xl ml-2" type="text" placeholder="Last Name" />
                        </div>
                        <input className="border border-gray-500 text-black rounded-xs p-[5px] py-[10px] w-[100%] mt-4" type="text" placeholder="Job title" />
                        <input className="border border-gray-500 text-black rounded-xs p-[5px] py-[10px] w-[100%] mt-4" type="text" placeholder="Company name" />
                        <input className="border border-gray-500 text-black rounded-xs p-[5px] py-[10px] w-[100%] mt-4" type="text" placeholder="Email Address" />
                <input className="border border-gray-500 text-white bg-black rounded-xs p-[5px] py-[10px] w-[100%] mt-4 text-[16px]" type="button" value="Submit" />
                </div>
            </div>
        </div>
    </>)
}

export default Contactus;