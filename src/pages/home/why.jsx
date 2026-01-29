import Carousel from "../../components/Corousel";

function why(){
     const slides = [{ title:"Contribute Data, Create Value",subtitle:"Credit unions that contribute data to CUDX gain access to powerful analytics, benchmarking, and shared insights while earning non-interest income from monetizing anonymized data.", buttonText:"Learn the Benifits" },
  { title:"Access the Power of Cooperative Intelligence",subtitle:"Access the richest, most trusted cooperative data set in the credit union industry. Fintechs, vendors, and researchers can securely access aggregated insights for innovation and market discovery.", buttonText:"Explore Data Options" },
  { title:"Invest in the Future of Cooperative Data",subtitle:"Be part of a credit-union-owned cooperative redefining how the industry collaborates. Your investment fuels growth, enhances data value, and expands the network effect.", buttonText:"View Prospectus" },];
    return(
        <>
        <div className="bg-white pb-7">
            <div className=" mx-[5%] text-[#0989b1] text-3xl">Why CUDX ? </div>
        <div className="max-w-[70%] mx-auto mt-10">
      <Carousel items={slides} interval={3000} />
    </div> 
    </div>
        </>
    )
}

export default why;