import { useEffect, useState } from "react";
import CountUpOnView from "../../components/CountUpOnView";

function DataCount() {

    const [count1, setCount1] = useState(0);
    const target1 = 1250;
    const duration1 = 2000; // ms (2 seconds)
    const stepTime1 = 20;

    useEffect(() => {
        const steps1 = duration1 / stepTime1;
        const increment = Math.ceil(target1 / steps1);

        const timer1 = setInterval(() => {
            setCount1((prev) => {
                if (prev >= target1) {
                    clearInterval(timer1);
                    return target1;
                }
                return prev + increment;
            });
        }, stepTime1);

        return () => clearInterval(timer1);
    }, []);

    return (<>
        <div className="bg-white">
            <div className="mx-[5%] pt-[4%]">
                <div className="flex items-center justify-center gap-[40%]">
                    <div className="text-[#0989b1] text-3xl  pb-[2%]">CUDX Data Footprint</div>
                    <div className="font-bold text-2xl"> A snapshot of our growing network, datasets, and digital reach across credit unions</div>
                </div>
                <div>
                    <div className="flex items-center justify-center gap-7">
                        <div className="rounded-xl border p-6"><div className="text-blue-900 text-4xl font-bold"><CountUpOnView end={5000} suffix="+" /></div>
                            <div className="text-3xl font-bold">Credit Unions Covered</div>
                            <div className="text-2xl">Actively contributing to and supported within our data</div>
                        </div>
                        <div className="rounded-xl border p-6"><div className="text-blue-900 text-4xl font-bold"><CountUpOnView end={120} suffix="+" /></div>
                            <div className="text-3xl font-bold">Platform Supported</div>
                            <div className="text-2xl">Web and digital platforms actively integrated with our data network</div>
                        </div>
                        <div className="rounded-xl border p-6"><div className="text-blue-900 text-4xl font-bold"><CountUpOnView end={5000000} suffix="+" /></div>
                            <div className="text-3xl font-bold">Records Available</div>
                            <div className="text-2xl">Verified data records accessible across our connected platforms</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default DataCount;