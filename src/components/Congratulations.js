import Steps from "./Steps";


function Congratulations() {
    return (
        <div className="p-5 my-0 mx-0 md:mx-48 md:my-12 " >
            <div className="mx-0 md:mx-48   ">
                <img src="eden.PNG" alt="eden" className="m-auto "/>
                   <Steps/>
            </div>
            <div className="my-8 ">
                <div className="rounded-full transition duration-500 ease-in-out h-14 w-14 mx-auto  border-2 bg-violet-700  border-violet-700 text-center">
                    <svg className="m-3 w-7 h-7 fill-white text-white" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512"><path fill="" d="M193.6,435.3c-10.3,0-20.6-3.9-28.5-11.8L11.8,270.2c-15.7-15.7-15.7-41.2,0-56.9c15.7-15.7,41.2-15.7,56.9,0   l124.9,124.9L443.3,88.4c15.7-15.7,41.2-15.7,56.9,0c15.7,15.7,15.7,41.2,0,56.9L222,423.5C214.2,431.3,203.9,435.3,193.6,435.3z" /></svg>
                </div>
                <div className="my-5">
                    <div className=" text-center text-3xl font-bold text-gray-700">Congratulations, Eren!</div>
                    <div className=" text-center text-gray-500 p-2 text-md font-light">You have completed onboarding, you can start using Eden.</div>


                </div>
            </div>


            <div class=" px-3 mx-0 md:mx-64">

                <div class="flex p-2 mt-4">
                    <button class="text-base mx-auto  w-3/5 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-violet-600  
                    bg-violet-700 
                    text-violet-100 
                    border duration-200 ease-in-out 
                    border-violet-700 transition">
                        Launch Eden
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Congratulations;