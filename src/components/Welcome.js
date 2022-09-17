import React from "react";
import { Link } from 'react-router-dom';
import Steps from "./Steps";




function Welcome() {

    return (
        <div className="p-5 my-0 mx-0 md:mx-48 md:my-12 " >
            <div className="mx-0 md:mx-48   ">
                <img src="eden.PNG" alt="eden" className="m-auto " />
                <Steps />
            </div>
            <div className="my-8">
                <div className="text-center text-3xl font-bold text-gray-700">Welcome! First things first...</div>
                <div className=" text-center text-gray-500 p-2 text-md font-light">You can always change them later</div>
            </div>


            <div className=" px-3 mx-auto md:w-2/5 sm:w-2/5 w-full">
                <div>
                    <div className="font-bold text-gray-600 text-sm leading-8h-6 mx-2 ">Full Name</div>
                    <div className="flex flex-col ">
                        <div className="w-full flex-1 mx-2 ">
                            <div className="bg-white my-2 p-1 mx-3 flex border border-gray-200 rounded ">
                                <input placeholder="Steve Jobs" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col ">
                        <div className="w-full mx-2 flex-1 ">
                            <div className="font-bold h-6  text-gray-600 text-sm leading-8 "> Display Name</div>
                            <div className="bg-white my-2 p-1 mx-3 flex border border-gray-200 rounded ">
                                <input placeholder="Steve" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex p-2 mt-4">
                    <Link to="/home" className="text-base  w-full focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                     hover:bg-violet-600  
                     bg-violet-700 
                     text-violet-100 
                     border duration-200 ease-in-out 
                     border-violet-700 transition" >
                        Create Workspace
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Welcome;