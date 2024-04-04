"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { loginServerAction } from "../action";
import { LoginInput } from "../type";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

export default function Login() {
  let [show, setShow] = useState(true);
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("error");


  const handleSubmit = async (formData: FormData) => {
    // Handle the search term as you wish

    const rawFormData = {
      email: formData.get("email"),
      password: formData.get("password"),
    } as LoginInput;

    await loginServerAction(rawFormData);
    if (errorMessage) {
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <div className=" h-auto flex items-center justify-center xl:mb-20">
        {/* <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" /> */}
        <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-blue-600 bottom-0 leading-5 h-full w-full overflow-hidden" />
        <div className="relative min-w-full sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
          <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md md:max-w-md z-10">
            <div className="self-start hidden lg:flex flex-col text-white">
              <h1 className="my-3 font-semibold text-4xl ">Welcome back</h1>
              <p className="pr-3 text-sm opacity-75 ">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups
              </p>
            </div>
          </div>
          <div className="flex justify-center self-center z-10 shadow-lg">
            <div className="p-12 bg-white mx-auto rounded-3xl w-96">
              <div className="mb-7">
                <h3 className="font-semibold text-2xl text-gray-800">
                  Sign In{" "}
                </h3>
                <p className="text-gray-400">
                  Belum punya akun?{" "}
                  <Link
                    href="/register"
                    className="text-sm text-blue-700 hover:text-orange-700"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>

              <div className="space-y-6">
                {/* Login form */}
                <form action={handleSubmit} className="space-y-6">
                  <div className="">
                    <input
                      name="email"
                      className="w-full text-sm px-4 py-3 bg-white text-black focus:bg-white focus:text-black border border-gray-500 rounded-lg focus:outline-none focus:border-orange-400"
                      type=""
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative" x-data={{ show: true }}>
                    <input
                      name="password"
                      placeholder="Password"
                      type={show ? "password" : "text"}
                      className="w-full text-sm px-4 py-3 bg-white text-black focus:bg-white focus:text-black border border-gray-500 rounded-lg focus:outline-none focus:border-orange-400"
                    />
                    <div
                      onClick={() => {
                        show ? setShow(false) : setShow(true);
                      }}
                      className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5"
                    >
                      <svg
                        className={`h-4 text-purple-700 ${
                          show ? "hidden" : "block"
                        }`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.85 47.85 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                        />
                      </svg>
                      <svg
                        className={`h-4 text-purple-700 ${
                          show ? "block" : "hidden"
                        }`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="currentColor"
                          d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm ml-auto">
                      <a
                        href="#"
                        className="text-blue-700 hover:text-orange-600"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center bg-blue-800 hover:bg-orange-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                {/* Google and Facebook login */}
                <div className="flex items-center justify-center space-x-2 my-5">
                  <span className="h-px w-16 bg-gray-100"></span>
                  <span className="text-black font-normal">or</span>
                  <span className="h-px w-16 bg-gray-100"></span>
                </div>
                <div className="flex justify-center gap-5 w-full ">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3 rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500"
                  >
                    <svg
                      className="w-4 mr-2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#EA4335"
                        d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                      />
                    </svg>
                    Google
                  </button>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3 rounded-lg tracking-wide font-mediumcursor-pointer transition ease-in duration-500"
                  >
                    <svg
                      className="w-4 mr-2"
                      viewBox="0 0 100 100"
                      xmlSpace="preserve"
                    >
                      <style>
                        {`.st0{fill:#fff},.st1{fill:#f5bb41},.st2{fill:#34A853},.st3{fill:#4A90E2},.st4{fill:#4CA853},.st5{fill:#398039},.st6{fill:#D74F3F},.st7{fill:#D43C89},.st8{fill:#B2005F},.st9,.st10,
                      .st11{fill:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10},.st9,
                      .st11{fill:none;stroke-miterlimit:10},.st10{stroke:#000},.st11{stroke:#040404},.st13{fill:#040404},.st14{fill:url(#SVGID_1_)},
                      .st15{fill:url(#SVGID_2_)},.st16{fill:url(#SVGID_3_)},.st17{fill:url(#SVGID_4_)},.st18{fill:url(#SVGID_5_)},.st19{fill:url(#SVGID_6_)},
                      .st20{fill:url(#SVGID_7_)},.st21{fill:url(#SVGID_8_)},.st22{fill:url(#SVGID_9_)},.st23{fill:url(#SVGID_10_)},.st24{fill:url(#SVGID_11_)},
                      .st25{fill:url(#SVGID_12_)},.st26{fill:url(#SVGID_13_)},.st27{fill:url(#SVGID_14_)},.st28{fill:url(#SVGID_15_)},.st29{fill:url(#SVGID_16_)},
                      .st30{fill:url(#SVGID_17_)},.st31{fill:url(#SVGID_18_)},.st32{fill:url(#SVGID_19_)},.st33{fill:url(#SVGID_20_)},.st34{fill:url(#SVGID_21_)},
                      .st35{fill:url(#SVGID_22_)},.st36{fill:url(#SVGID_23_)},.st37{fill:url(#SVGID_24_)},.st38{fill:url(#SVGID_25_)},.st39{fill:url(#SVGID_26_)},
                      .st40{fill:url(#SVGID_27_)},.st41{fill:url(#SVGID_28_)},.st42{fill:url(#SVGID_29_)},.st43{fill:url(#SVGID_30_)},.st44{fill:url(#SVGID_31_)},
                      .st45{fill:url(#SVGID_32_)},.st46{fill:url(#SVGID_33_)},.st47{fill:url(#SVGID_34_)},.st48{fill:url(#SVGID_35_)},.st49{fill:url(#SVGID_36_)},
                      .st50{fill:url(#SVGID_37_)},.st51{fill:url(#SVGID_38_)},.st52{fill:url(#SVGID_39_)},.st53{fill:url(#SVGID_40_)},.st54{fill:url(#SVGID_41_)},
                      .st55{fill:url(#SVGID_42_)},.st56{fill:url(#SVGID_43_)},.st57{fill:url(#SVGID_44_)},.st58{fill:url(#SVGID_45_)},.st59{fill:#040404},
                      .st60{fill:url(#SVGID_46_)},.st61{fill:url(#SVGID_47_)},.st62{fill:url(#SVGID_48_)},.st63{fill:url(#SVGID_49_)},.st64{fill:url(#SVGID_50_)},
                      .st65{fill:url(#SVGID_51_)},.st66{fill:url(#SVGID_52_)},.st67{fill:url(#SVGID_53_)},.st68{fill:url(#SVGID_54_)},.st69{fill:url(#SVGID_55_)},
                      .st70{fill:url(#SVGID_56_)},.st71{fill:url(#SVGID_57_)},.st72{fill:url(#SVGID_58_)},.st73{fill:url(#SVGID_59_)},.st74{fill:url(#SVGID_60_)},
                      .st75{fill:url(#SVGID_61_)},.st76{fill:url(#SVGID_62_)},.st77,
                      .st78{fill:none;stroke-miterlimit:10},.st77{stroke:#000;stroke-width:3},.st78{stroke:#fff}`}
                      </style>
                      <g id="Layer_1" />
                      <g id="Layer_2">
                        <path
                          className="st0"
                          d="M50 2.5c-58.892 1.725-64.898 84.363-7.46 95h14.92c57.451-10.647 51.419-93.281-7.46-95z"
                        />
                        <path
                          className="st1"
                          d="M57.46 64.104h11.125l2.117-13.814H57.46v-8.965c0-3.779 1.85-7.463 7.781-7.463h6.021V22.101c-12.894-2.323-28.385-1.616-28.722 17.66V50.29H30.417v13.814H42.54V97.5h14.92V64.104z"
                        />
                      </g>
                    </svg>
                    Facebook
                  </button>
                </div>
              </div>

              <div className="mt-7 text-center text-gray-300 text-xs"></div>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="absolute bottom-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </svg>
    </>
  );
}
