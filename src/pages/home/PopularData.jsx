import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import provideImg from "../../assets/data_provider_img.jpg"

function PopularData() {
    const dataProvider = [
        {
            imageUrl: provideImg,
            providerName: "Factori",
            rating: "4.9",
            buyerName: "Verified Buyer",
            buyerRating: "4.8",
            buyerReview: "“I’m really happy with the contact data I got from success.ai. After talking to a bunch of other providers, they were either way too expensive or didn’t offer the best implementation options. But success.ai was a great fit for me! ”"

        },
         {
            imageUrl: provideImg,
            providerName: "Factori",
            rating: "4.9",
            buyerName: "Verified Buyer",
            buyerRating: "4.8",
            buyerReview: "“I’m really happy with the contact data I got from success.ai. After talking to a bunch of other providers, they were either way too expensive or didn’t offer the best implementation options. But success.ai was a great fit for me! ”"

        },
         {
            imageUrl: provideImg,
            providerName: "Factori",
            rating: "4.9",
            buyerName: "Verified Buyer",
            buyerRating: "4.8",
            buyerReview: "“I’m really happy with the contact data I got from success.ai. After talking to a bunch of other providers, they were either way too expensive or didn’t offer the best implementation options. But success.ai was a great fit for me! ”"

        },
         {
            imageUrl: provideImg,
            providerName: "Factori",
            rating: "4.9",
            buyerName: "Verified Buyer",
            buyerRating: "4.8",
            buyerReview: "“I’m really happy with the contact data I got from success.ai. After talking to a bunch of other providers, they were either way too expensive or didn’t offer the best implementation options. But success.ai was a great fit for me! ”"

        },
         {
            imageUrl: provideImg,
            providerName: "Factori",
            rating: "4.9",
            buyerName: "Verified Buyer",
            buyerRating: "4.8",
            buyerReview: "“I’m really happy with the contact data I got from success.ai. After talking to a bunch of other providers, they were either way too expensive or didn’t offer the best implementation options. But success.ai was a great fit for me! ”"

        }
    ]
    return (<>
        <div className="bg-white">
            <div className="mx-[5%] pt-[4%]">
                <div className="text-[#0989b1] text-3xl  pb-[2%]">Popular Data Provider</div>
                <div className="grid grid-cols-2 gap-7">
                    {dataProvider.map((provider,index) => (<div className="flex  rounded border-gray-400 border items-center p-6 gap-7">

                        <div className='w-[200%]'><img className=" h-80" src={provider.imageUrl} alt="" /></div>
                        {/* <div class="w-px h-32 bg-gray-400 ml-7"></div> */}
                        <div className="mx-auto">
                            <div className="text-2xl font-bold">{provider.providerName}</div>
                            <div className="text-3l font-bold"><FontAwesomeIcon icon={faStar} style={{color: "#f28e02",}} />{provider.rating}</div>
                            <hr class="border-t-2 border-gray-300 my-4" />
                            <div className="flex  gap-[30%]">
                                <div className="flex justify-center items-center gap-2">
                                    <div class="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-semibold">A</div>
                                    <div className="text-3l font-bold">{provider.buyerName}</div>
                                   
                                </div>
                                 <div><FontAwesomeIcon icon={faStar} style={{color: "#f28e02",}} />{provider.buyerRating}</div>
                            </div>
                            <div className="line-clamp-4">{provider.buyerReview}</div>
                            <hr class="border-t-2 border-gray-300 my-4" />
                            <div className="border border-blue-900 text-blue-900 p-2 rounded-xl text-center font-bold hover:bg-blue-900 hover:text-white">View Provider</div>
                        </div>
                    </div>))
                    
                    }

                </div>
                <div className='border border-blue-900 text-blue-900 p-2 rounded-xl text-center font-bold hover:bg-blue-900 hover:text-white w-64 mx-auto mt-7'>View More Provider</div>
            </div>
        </div>
    </>)
}

export default PopularData;