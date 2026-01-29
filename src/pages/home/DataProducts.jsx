function DataProviders() {
    const cards = [
        {
            image: "https://cudx.com/wp-content/uploads/2024/03/cropped-CUDX_WHT_Reflective-ezgif.com-png-to-webp-converter-1-e1711521683907.webp",
            companyName: "Factori",
            tags: "Mobile Location Data | United States | +300M Unique Devices | +150M Dialy Users | +200B Events/ Month",
            rating: "4.9",
            country : "USA"
        },
       {
            image: "https://cudx.com/wp-content/uploads/2024/03/cropped-CUDX_WHT_Reflective-ezgif.com-png-to-webp-converter-1-e1711521683907.webp",
            companyName: "Factori",
            tags: "Mobile Location Data | United States | +300M Unique Devices | +150M Dialy Users | +200B Events/ Month",
            rating: "4.9",
            country : "USA"
        },
        {
            image: "https://cudx.com/wp-content/uploads/2024/03/cropped-CUDX_WHT_Reflective-ezgif.com-png-to-webp-converter-1-e1711521683907.webp",
            companyName: "Factori",
            tags: "Mobile Location Data | United States | +300M Unique Devices | +150M Dialy Users | +200B Events/ Month",
            rating: "4.9",
            country : "USA"
        },
        {
            image: "https://cudx.com/wp-content/uploads/2024/03/cropped-CUDX_WHT_Reflective-ezgif.com-png-to-webp-converter-1-e1711521683907.webp",
            companyName: "Factori",
            tags: "Mobile Location Data | United States | +300M Unique Devices | +150M Dialy Users | +200B Events/ Month",
            rating: "4.9",
            country : "USA"
        },
        {
            image: "https://cudx.com/wp-content/uploads/2024/03/cropped-CUDX_WHT_Reflective-ezgif.com-png-to-webp-converter-1-e1711521683907.webp",
            companyName: "Factori",
            tags: "Mobile Location Data | United States | +300M Unique Devices | +150M Dialy Users | +200B Events/ Month",
            rating: "4.9",
            country : "USA"
        },
        {
            image: "https://cudx.com/wp-content/uploads/2024/03/cropped-CUDX_WHT_Reflective-ezgif.com-png-to-webp-converter-1-e1711521683907.webp",
            companyName: "Factori",
            tags: "Mobile Location Data | United States | +300M Unique Devices | +150M Dialy Users | +200B Events/ Month",
            rating: "4.9",
            country : "USA"
        },
        {
            image: "https://cudx.com/wp-content/uploads/2024/03/cropped-CUDX_WHT_Reflective-ezgif.com-png-to-webp-converter-1-e1711521683907.webp",
            companyName: "Factori",
            tags: "Mobile Location Data | United States | +300M Unique Devices | +150M Dialy Users | +200B Events/ Month",
            rating: "4.9",
            country : "USA"
        },
        {
            image: "https://cudx.com/wp-content/uploads/2024/03/cropped-CUDX_WHT_Reflective-ezgif.com-png-to-webp-converter-1-e1711521683907.webp",
            companyName: "Factori",
            tags: "Mobile Location Data | United States | +300M Unique Devices | +150M Dialy Users | +200B Events/ Month",
            rating: "4.9",
            country : "USA"
        },
        {
            image: "https://cudx.com/wp-content/uploads/2024/03/cropped-CUDX_WHT_Reflective-ezgif.com-png-to-webp-converter-1-e1711521683907.webp",
            companyName: "Factori",
            tags: "Mobile Location Data | United States | +300M Unique Devices | +150M Dialy Users | +200B Events/ Month",
            rating: "4.9",
            country : "USA"
        }

    ]
    return (<>
        <div className="bg-white">
            <div className="mx-[5%] pt-[4%]">
                <div className="text-blue-900 text-3xl">
                    Popular Data Products
                </div>
                <div className="max-w-7xl mx-auto px-6 pt-7">
                    <div className="flex gap-10">

                        {/* LEFT: Fancy cards (scroll normally) */}
                        <div className="w-2/3 space-y-8 grid grid-cols-2 gap-3">
                            {cards.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative rounded-3xl overflow-hidden shadow-2xl group"
                                >
                                    {/* Background image */}
                                    {/* <img
                                        src={item.image}
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                                    /> */}


                                    {/* Dark gradient overlay */}
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

                                    {/* Fancy text */}
                                    <div className="relative z-10 h-full flex flex-col justify-end p-6 text-black">
                                        <div className="border rounded-sm w-[40%]"><img className="bg-gradient-to-r from-sky-400 via-blue-900 to-black" src={item.image} alt="" /></div>
                                        <h3 className="font-bold tracking-wide pt-7">
                                            {item.tags}
                                        </h3>
                                        <p className="text-sm opacity-90 mt-1 line-clamp-2 text-black pt-7">
                                            by {item.companyName}
                                        </p>
                                        <div className="flex  items-center gap-2">
                                            <div className="border rounded-2xl px-2 text-center border-gray-400 text-[12px]  mt-7">{item.country}</div>
                                            <div className="border rounded-2xl px-2 text-center border-gray-400 text-[12px]  mt-7">UK</div>
                                            <div className="border rounded-2xl px-2 text-center border-gray-400 text-[12px]  mt-7">Germany</div>
                                        </div>

<div className="flex justify-center items-center gap-7 text-[12px] mt-7">
    <div className="border rounded-2xl border-blue-900 p-1 text-blue-900">Free Sample Preview</div>
    <div className="border rounded-2xl border-blue-900 p-1 text-blue-900">Pricing Available upon Request</div>
</div>
                                        <div className="mt-7 border border-blue-900 text-blue-900 p-2 rounded-xl text-center font-bold hover:bg-blue-900 hover:text-white">View Provider</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT: Sticky fancy summary card */}
                        <div className="w-1/3">
                            <div className="sticky top-24">
                                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">

                                    {/* Background image */}
                                    <img
                                        src="https://cudx.com/wp-content/uploads/2024/03/cropped-CUDX_WHT_Reflective-ezgif.com-png-to-webp-converter-1-e1711521683907.webp"
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-900 to-black"></div>

                                    {/* Content */}
                                    <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                                        <h3 className="text-3xl font-extrabold tracking-tight">
                                           Want to check more data products in CUDX?
                                        </h3>
                                        <p className="text-sm opacity-90 mt-2">
                                           Want to discover more ? Browse additional data products from CUDX and find solutions tailored to your data needs.
                                        </p>
                                        <p className="text-sm opacity-90">
                                            5M+ Records
                                        </p>

                                        <button className="mt-4 px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
                                            Explore Data
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </>)
}

export default DataProviders;