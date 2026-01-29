import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import HeaderMenu from "../../components/HeaderMenu";
import Stepper from "../../components/Stepper";
import { useState } from "react";
import Footer from "../../components/Footer"
import Papa from "papaparse";
import CsvPreviewPagination from "../../components/CsvPreviewPagination";
import CSVExcelPreview from "../../components/CSVExcelPreview";

function Contribute() {
    const [fruit, setFruit] = useState(null);
    const [csvData, setCsvData] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [preview, setPreview] = useState(false)

    const handleFileUpload = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        Papa.parse(file, {
            header: true, // first row as header
            skipEmptyLines: true,
            complete: (results) => {
                setHeaders(results.meta.fields); // CSV headers
                setCsvData(results.data);        // CSV rows
            },
        });
    };
    return (<>
        <div>
            <div className="bg-gradient-to-r from-sky-400 via-blue-900 to-black">
                <HeaderMenu />
                <div class="grid grid-cols-2 gap-4 mt-7">
                    <div>  <div class="grid grid-rows-3 gap-2">
                        <div className="text-[#0989b1] text-[26px] font-bold text-white">Contribute Data, Create Value</div>
                        <div className="pb-4 text-[18px] text-white">Credit unions that contribute data to CUDX gain access to powerful analytics, benchmarking, and shared insights while earning non-interest income from monetizing anonymized data.</div>
                        <div><Button buttonText="Learn the Benefits" /></div>


                    </div></div>

                    <div class="text-center"> <div class="grid grid-rows-3 gap-2">
                        <div></div>

                        <div className="px-[14.5%] py-[2%] text-center mx-auto bg-white rounded-lg [box-shadow:0_0_25px_rgba(0,0,0,0.2)]">
                            <div className="font-bold text-[20px] pb-2">Data in insights + Revenue Out</div>
                            <div>See how your data contributes to the cooperative value network</div>
                        </div>

                        <div></div>
                    </div></div>


                </div>

            </div>
            <div className="bg-white ">
                <div className="mx-auto pt-[4%] pb-[4%]">
                    {preview ? <Stepper currentStep={3} /> : <Stepper currentStep={2} />}
                    
                    <div className="text-center text-3xl mt-7 text-blue-900">Data Contribution</div>
                    <div className=" flex flex-col items-center justify-center bg-gradient-to-br bg-black/10 space-y-6 w-1/2 mx-auto rounded-xl p-6">
                        <div className="flex justify-center items-center gap-7"><div className="text-black text-xl font-bold">Upload Type</div>
                            <Dropdown
                                title="Select Upload Type"
                                options={["Upload", "Share Storage"]}
                                onSelect={(option) => setFruit(option)} // receive selected option
                            /></div>
                        {fruit === "Share Storage" && <div> <div className="flex justify-center items-center gap-7">
                            <div className="text-black text-xl font-bold">Storage Type</div>
                            <Dropdown
                                title="Select Upload Type"
                                options={["Aws", "Azure"]}
                                onSelect={(option) => setFruit(option)} // receive selected option
                            /></div>
                        </div>
                        }

                        {fruit === "Share Storage" && <div className=""><div className="flex justify-center items-center gap-7">
                            <div className="text-black text-xl font-bold">Access Key</div>
                            <input type="text" className=" relative w-64 bg-white/30 backdrop-blur-md text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md flex justify-between items-center" />
                        </div>

                        </div>
                        }

                        {fruit === "Share Storage" && <div className=""><div className="flex justify-center items-center gap-7">
                            <div className="text-black text-xl font-bold">Secret Key</div>
                            <input type="text" className=" relative w-64 bg-white/30 backdrop-blur-md text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md flex justify-between items-center" />
                        </div>

                        </div>
                        }

                        {fruit === "Share Storage" && <div className="flex justify-center items-center gap-7">
                            <div className="text-black text-xl font-bold">Path</div>
                            <input type="text" className=" relative w-64 bg-white/30 backdrop-blur-md text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md flex justify-between items-center" />
                        </div>


                        }


                        

                    </div>
                </div>
<div  onClick={() => setPreview(true)} className="w-[1200px] mx-auto bg-white"> <CSVExcelPreview /> </div>
            </div>
            
        </div>

        <Footer />
    </>)
}

export default Contribute;