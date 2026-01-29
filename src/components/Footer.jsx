function Footer() {
    return (
        <>
            <div className="bg-[#353130] mx-0 pr-[2%] pl-[2%] pt-[100px] pb-[100px] text-white">
                <div class="grid grid-cols-3 gap-4">
                    <div>  <div class="grid grid-rows-2 gap-2">
                        <div><img src="https://cudx.com/wp-content/uploads/2024/03/cropped-CUDX_WHT_Reflective-ezgif.com-png-to-webp-converter-1-e1711521683907.webp" alt="cudx_logo" width={200} height={200} /></div>
                        <div className="pb-4 text-[18px]"><div>7650 W Courtney Campbell Causeway #900, Tampa, FL 33607</div>
                            <div>(888) 930-2728</div>
                        </div>
                    </div></div>
                    <div class="font-semibold"> <div class="grid grid-rows-2 gap-2 ml-[20%]">
                        <div>
                            <div className="mb-4">About Us</div>
                            <div className="mb-4">New&Media</div>
                            <div>Contact</div>
                        </div>
                    </div></div>

                    <div class="font-semibold"> <div class="grid grid-rows-2 gap-2">
                        <div>
                            <div className="mb-4">Connect with Us</div>
                            <div className="mb-4"><input className="bg-white text-black" type="email" placeholder="Email" /></div>

                        </div>
                    </div></div>
                </div>
            </div>
        </>
    )
}

export default Footer;