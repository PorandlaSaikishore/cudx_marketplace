import Button from "../../components/Button"


function Access() {
    return (
        <>
            <div className="bg-[#EDF2F7] mx-0 pr-[2%] pl-[2%] pt-[100px] pb-[100px]">
                <div class="grid grid-cols-2 gap-4">
                    <div class="text-center"> <div class="grid grid-rows-3 gap-2">
                        <div></div>

                        <div className="px-[10%] py-[2%] text-center mx-auto bg-white rounded-lg [box-shadow:0_0_25px_rgba(0,0,0,0.2)]">

                            <div className="text-[16px] font-thin">Access the richest, most trusted cooperative data set in the credit union industry. Fintechs, vendors, and researchers can securely access aggregated insights for innovation and market discovery.</div>
                        </div>

                        <div></div>
                    </div></div>
                    <div>  <div class="grid grid-rows-3 gap-2">
                        <div><div className="text-[#0989b1] text-[26px] font-bold pb-4">Access the Power of Cooperative Intelligence</div>
                        <div className="text-[18px] font-thin">Enable use cases tailored to your needs:</div>
                        </div>
                        
                        <div className="pb-4 text-[16px] justify-center">
                            <div>Fintechs: Identify growth opportunities</div>
                            <div>Vendors: Benchmark performance</div>
                            <div>Researchers: Understand member behavior</div>
                        </div>
                        <div><Button buttonText="Explore Data Options" /></div>


                    </div></div>




                </div>
            </div>
        </>
    )
}

export default Access;