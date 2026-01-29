import Button from "../../components/Button"

function Invest() {
    return (
        <>
            <div className="bg-white mx-0 pr-[2%] pl-[2%] pt-[100px] pb-[100px]">
                <div class="grid grid-cols-2 gap-4">
                    <div>  <div class="grid grid-rows-3 gap-2">
                        <div className="text-[#0989b1] text-[26px] font-bold"><div>Invest in the Future of Cooperative</div> <div>Data</div></div>
                        <div className="pb-4 text-[18px]">Be part of a credit-union-owned cooperative redefining how the industry collaborates. Your investment fuels growth, enhances data value, and expands the network effect.</div>
                        <div><Button buttonText="Views Propectus" /></div>


                    </div></div>

                    <div> <div class="grid grid-rows-3">

                        <div>
                            <div className="px-[14.5%] py-[2%] text-center mx-auto bg-white rounded-lg [box-shadow:0_0_25px_rgba(0,0,0,0.2)]">
                                <div className="font-bold text-[20px] pb-2">Own the Future of Credit Union Data</div>
                                <div>CUDX is a cooperative built for – and owned by – credit unions and their partners.</div>

                            </div>
                            <div><Button buttonText="Learn More" /></div> </div>
                        <div></div>
                    </div></div>


                </div>
            </div>
        </>
    )
}

export default Invest;