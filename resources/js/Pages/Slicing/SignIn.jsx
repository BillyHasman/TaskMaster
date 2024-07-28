import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import {
    UserPlusIcon as UserOutline,
    EnvelopeIcon,
    LockClosedIcon as PassSolid,
} from "@heroicons/react/24/outline";
import {
    UserPlusIcon as UserSolid,
    UserIcon,
    LockClosedIcon as PassOutline,
} from "@heroicons/react/24/solid";
import InputBox from "@/Components/InputBox";

export default function SignIn() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-primary1 relative">
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <img
                    src="/images/Pattern-1.png"
                    alt="Pattern BG"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl w-full h-full flex flex-row relative z-10 mx-5 my-5">
                <div className="w-full flex justify-center flex-col py-20">
                    <h1 className="font-bold text-2xl text-black pb-5">
                        Sign In
                    </h1>
                    <form action="">
                        <InputBox
                            Icon={UserIcon}
                            name="Username"
                            placeholder="Enter Username"
                            autoComplete="give-name"
                            type="text"
                        />
                        <InputBox
                            Icon={PassSolid}
                            name="Password"
                            placeholder="Enter Password"
                            autoComplete="give-name"
                            type="password"
                        />

                        <div className="flex items-center mb-4">
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="ms-5 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Remember Me
                            </label>
                        </div>
                        <div className="w-full pb-5">
                            <button className="py-4 px-7 bg-button1 text-white rounded-lg">
                                Login
                            </button>
                        </div>
                        <div className="container text-sm">
                            <span className="text-black">
                                Don't have an account?
                            </span>
                            <Link className="ms-2 text-blue-600" href="">
                                Create One
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="w-full items-end justify-end hidden lg:flex">
                    <img
                        src="/images/SignIn-Person.png"
                        alt="Pattern BG"
                        className="w-96"
                    />
                </div>
            </div>
        </div>
    );
}
