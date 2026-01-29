import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal"
import Stepper from "./Stepper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'


function HeaderMenu() {

    const navigate = useNavigate();
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loginType, setLoginType] = useState("signup");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState({ email: "", password: "" });
    const [enableSigninButton, SetEnableSigninButton] = useState(false);

    const sidetexts = [
        "Maintain full control over who accesses your data and under what terms.",

        "Earn revenue while meeting strict security and compliance standards.",

        "Share data only with verified, approved consumers.",

        "Set pricing, permissions, and access rules with confidence.",

        "All data exchanges are secure, auditable, and transparent.",


    ]



    function selectLoginType(type) {
        console.log(type)
        setLoginType(type);
    }

    const areAllFieldsFilled = (user) => {
        return Object.values(user).every(
            (value) => value !== null && value.toString().trim() !== ""
        );
    };

    const isFormValid = areAllFieldsFilled(user);
    function enableSignin() {

        if (isFormValid) {
            SetEnableSigninButton(true)
        } else {
            SetEnableSigninButton(false)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
        enableSignin();
    };

    const getStrength = () => {
        let score = 0;

        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        if (score <= 2) return { label: "Weak", color: "bg-red-500", width: "w-1/3" };
        if (score === 3 || score === 4)
            return { label: "Medium", color: "bg-yellow-500", width: "w-2/3" };
        return { label: "Strong", color: "bg-green-500", width: "w-full" };
    };

    const strength = getStrength();
    return (
        <>

            <div class="sticky top-0 z-50 bg-gradient-to-r from-sky-400 via-blue-900 to-black text-white border border-gray-300 rounded-[10px] w-[95%] mx-auto">
                <div class="max-w-7xl mx-auto flex items-center justify-between p-4">
                    <div class="font-bold"><img className="cursor-pointer" src="https://cudx.com/wp-content/uploads/2024/03/cropped-CUDX_WHT_Reflective-ezgif.com-png-to-webp-converter-1-e1711521683907.webp" alt="cudx_logo" width={80} height={80} onClick={() => navigate("/")} /></div>
                    {location.pathname.includes("contribute-data") ? <div className="text-white font-semibold flex gap-7">



                        <div className="cursor-pointer">Shared Data</div>
                        <div className="cursor-pointer">Transactions</div>
                        <div className="cursor-pointer">Profile</div>
                        <div className="cursor-pointer">Contact</div>

                    </div> : <div className="text-white font-semibold flex gap-7">

                        <div className="relative inline-block group">
                            <div className='flex items-center justify-center cursor-pointer'> <div className=" text-white rounded">
                                All Categories
                            </div><span
                                    className="
    ml-1 inline-block w-2 h-2
    border-r-2 border-b-2
    rotate-45
    transition-transform duration-200
    group-hover:-rotate-135
  "
                                /></div>

                            <div className="
        absolute left-0 mt-2 w-40 bg-white shadow-lg rounded
        opacity-0 invisible
        group-hover:opacity-100 group-hover:visible
        transition-all duration-200
        text-black
      ">
                                <a className="block px-4 py-2 hover:bg-gray-100">Member Data</a>
                                <a className="block px-4 py-2 hover:bg-gray-100">Financial Data</a>
                                <a className="block px-4 py-2 hover:bg-gray-100">Operational Data</a>
                                <a className="block px-4 py-2 hover:bg-gray-100">Regulatory & Compliance Data</a>
                                <a className="block px-4 py-2 hover:bg-gray-100">Analytics & Marketing Data</a>
                                <a className="block px-4 py-2 hover:bg-gray-100">Historical / Archival Data</a>
                            </div>
                        </div>

                        <div className="cursor-pointer">Acquire Data</div>
                        <div className="cursor-pointer">About US</div>
                        <div className="cursor-pointer">News&Media</div>
                        <div className="cursor-pointer">Contact</div>

                    </div>}
                    {location.pathname.includes("contribute-data") ? <div className="text-white font-semibold flex gap-4">
                        <div><FontAwesomeIcon className="text-sky-400 text-3xl" icon={faCircleUser} /></div>
                        <div>Kishore</div>
                        <div className="relative group inline-block">
                            <div><FontAwesomeIcon className="text-sky-400 text-3xl" icon={faCertificate} /></div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                  hidden group-hover:block
                  bg-gray-900 text-white text-sm px-2 py-1 rounded
                  whitespace-nowrap">
                                Verified Contributor
                            </div>
                        </div>

                    </div> : <div className="text-white font-semibold flex gap-7">

                        <div className="border border-blue-900 bg-blue-900 rounded-[5px] p-2 cursor-pointer">Sign in</div>
                        <div className="border border-white bg-white text-black rounded-[5px] p-2 cursor-pointer" onClick={() => setIsModalOpen(true)} >Join as a Provider</div>

                    </div>}

                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title=""
                type={loginType}
                enableSigninButton={enableSigninButton}
            >
                <Stepper currentStep={1} />
                <div className="flex justify-center items-center mt-7">
                    <div className="w-1/2">
                        <div className="text-3xl text-blue-900 font-bold">Monetize your data through secure, authorized exchange.</div>
                        <ul className="list-disc list-inside">
                            {sidetexts.map((sidetext, index) => (
                                <li className="mt-3">{sidetext}</li>
                            ))}
                        </ul>
                    </div>
                    <div class="w-px h-32 bg-gray-400 mx-auto"></div>
                    <div>
                        <div className="flex justify-center items-center gap-[10%]">
                            <div className="text-center cursor-pointer" onClick={() => selectLoginType("signup")}>
                                <div className={loginType === "signup" ? "font-semibold text-blue-900 text-2xl" : "font-semibold text-gray-600 text-2xl"}>Sign-up</div>
                                <hr class={loginType === "signup" ? "border-t-2 border-blue-900 w-[150px] " : "border-t-2 border-gray-600 w-[150px] "} />
                            </div>
                            <div className="text-center cursor-pointer" onClick={() => selectLoginType("signin")}>
                                <div className={loginType === "signin" ? "font-semibold text-blue-900 text-2xl" : "font-semibold text-gray-600 text-2xl"}>Sign-in</div>
                                <hr class={loginType === "signin" ? "border-t-2 border-blue-900 w-[150px] " : "border-t-2 border-gray-600 w-[150px] "} />
                            </div>
                        </div>
                        {loginType === "signup" ?
                            <div>
                                <div className="mt-7">
                                    <label className="text-blue-900">Full Name</label>
                                    <div><input type="text" placeholder="Enter your full name" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900" /></div>
                                </div>
                                <div className="mt-7">
                                    <label className="text-blue-900">Email</label>
                                    <div><input type="email" placeholder="Enter your eamil" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900" /></div>
                                </div>
                                <div className="mt-7">
                                    <label className="text-blue-900">Password</label>
                                    <div><input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                        placeholder="Enter your password"
                                    />

                                        {/* Strength Bar */}
                                        <div className="h-2 w-full bg-gray-200 rounded m-2">
                                            <div
                                                className={`h-2 rounded transition-all duration-300 ${strength.color} ${strength.width}`}
                                            />
                                        </div>

                                        {/* Strength Label */}
                                        {password && (
                                            <p className="text-sm font-medium text-gray-600 mt-2">
                                                Strength: <span className="font-semibold">{strength.label}</span>
                                            </p>
                                        )}</div>
                                </div>
                            </div> : <></>
                        }
                        {loginType === "signin" ?
                            <div>

                                <div className="mt-7">
                                    <label className="text-blue-900">Email</label>
                                    <div><input type="email" placeholder="Enter your eamil" name="email" value={user.email} onChange={handleChange} className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900" /></div>
                                </div>
                                <div className="mt-7">
                                    <label className="text-blue-900">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={user.password}
                                            onChange={handleChange}
                                            name="password"
                                            placeholder="Enter your password"
                                            className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
                                        >
                                            {showPassword ? "🙈" : "👁️"}
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-7">
                                    <div className="text-blue-900">Forgot Password ? </div>
                                    <hr class="border-t-2 border-blue-900 w-[40%] " />
                                </div>
                            </div> : <></>
                        }
                    </div>
                </div>
            </Modal>

        </>
    )
}

export default HeaderMenu;