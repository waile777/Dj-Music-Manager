import React, { useState } from "react";
import api from "../api";
import logo from "../assets/djmm-pro-logo.png";
import { User, Eye, EyeOff, Contact, Lock } from "lucide-react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await api.post("/login", {
                email,
                password,
            });

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col w-[100%] items-center ">
            <header className="flex w-[100%] px-5 py-1 justify-between bg-[#1A1C1F] border-b border-[#3B3B3B] ">
                <div className="flex flex-col gap-[1px] items-left">
                    <img src={logo} className="w-25" alt="logo" />
                    <h3 className="text-[10px] font-bold">
                        TACTICAL AUDIO WORKSTATION
                    </h3>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="flex flex-row items-center gap-2">
                        <p className="text-[10px] font-bold">
                            DSP ENGIN: 32-BIT FLOAT / 96KHZ
                        </p>
                        <User size={10} className="w-5 h-5 bg-[#D2F7FF] rounded-[100%] " />
                    </span>
                </div>
            </header>
            {/* Form */}
            <form onSubmit={handleLogin}
                autoComplete="off"
                className="flex flex-col gap-4 bg-[#1A1C1F] p-1 rounded-[20px] w-[50%] p-7">
                <div className="flex gap-2 items-center justify-center mt-4">
                    <img
                        className="w-[200px]"
                        src={logo}
                        alt="DJMM PRO"

                    />
                    <span className="text-[#EE9800] font-bold text-[9px]">RESIDENT PRO SUITE</span>

                </div>
                <h1 className="text-center font-bold text-[22px]">SIGN IN TO YOUR DJ LIBRARY</h1>

                <div className="flex flex-col gap-1 w-[100%]">
                    <label className="text-[9px] font-bold">DJ ID / PIONNER CLOUD ACCOUNT</label>
                    <div className="flex relative w-[100%]">
                        <input
                            className="p-4 pl-[7%]  border-none bg-[#0D0F12] w-[100%] text-[12px]"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="dj.name@booking.com"
                        />
                        <Contact className="absolute top-[50%] translate-y-[-50%] left-[10px] w-4" />
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-[100%]">
                    <div className="flex justify-between w-[100%]">
                        <label className="text-[9px] font-bold">DJ ID / PIONNER CLOUD ACCOUNT</label>
                        <span className="text-[9px] font-bold text-[#00DAF3] cursor-pointer hover:underline">Forget your password ?</span>
                    </div>
                    <div className="relative">
                        <input
                            className="p-4 pl-[7%]  border-none bg-[#0D0F12] w-[100%] text-[12px]"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="*************"
                        />
                        <Lock className="absolute top-[50%] translate-y-[-50%] left-[10px] w-4" />
                        {
                            showPassword ? (
                                <EyeOff size={10} onClick={() => setShowPassword(false)} className="absolute top-[50%] translate-y-[-50%] right-[10px] w-5 h-5 hover:bg-[#1A1C1F] p-[4px] rounded-[100%] transition-all cursor-pointer " />
                            ) : (
                                <Eye size={10} onClick={() => setShowPassword(true)} className="absolute top-[50%] translate-y-[-50%] right-[10px] w-5 h-5 hover:bg-[#1A1C1F] p-[4px] rounded-[100%] transition-all cursor-pointer" />
                            )
                        }
                    </div>

                </div>
                <div className="flex justify-between mt-[-10px]">
                    <div className="flex gap-[6px] items-center">
                        <input type="checkbox" name="" id="" className="w-3 h-3" />
                        <span className="text-[10px]">Remember this workstation token</span>
                    </div>
                    <span className="text-[9px] font-bold">NODE 01: ONLINE</span>
                </div>
                <button type="submit" className="bg-[#00DAF3] p-3 text-[#004F58] font-bold text-[12px] cursor-pointer hover:text-[#00DAF3] hover:bg-[#004F58] transition-all duration-300">
                    SIGN IN TO WORKSTATION
                </button>
                <a className="text-[10px] underline text-[#00DAF3] font-bold mt-[-10px]" href="#">Need an account?</a>
            </form>
            <footer>
                this is the Footer
            </footer>
        </div>

    );
}

export default Login;
