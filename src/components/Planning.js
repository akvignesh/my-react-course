import {Link} from 'react-router-dom';
import Steps from './Steps';

function Planning() {
   
    return (  
        <div className="p-5 my-0 mx-0 md:mx-48 md:my-12 " >
        <div className="mx-0 md:mx-48   ">
           <img src="eden.PNG" alt="eden" className="m-auto "/>
           <Steps/>
        </div>
        <div className="my-8">
           <div className=" text-center text-3xl font-bold text-gray-700">How are you planning to use Eden?</div>
           <div className=" text-center text-gray-500 p-2 text-md font-light">We'll streamline your setup experience accordingly</div>
        </div>
       

        <div className=" px-3 mx-auto md:w-3/5">
           <div className="flex justify-center ">
              <div className="basis-1/2 rounded-md mx-3 md:mx-7 md:px-5 md:py-3 p-2 border-2 border-violet-600 hover:border-violet-700">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 fill-violet-500 text-violet-500">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                 </svg>
               <div className="text-md font-bold my-3">For Myself</div>
               <div className="text-md text-gray-500 font-light my-3">Write better. Think more clearly. Stay organized.</div>
            </div>
            <div className="basis-1/2 rounded-md mx-3 md:mx-7 md:px-5 md:py-3 p-2 border-2 border-gray-300 hover:border-violet-700">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8  text-gray-500">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                 </svg>
                 
               <div className="text-md font-bold my-3">With my team</div>
               <div className="text-md text-gray-500 font-light my-3">Wikis, docs, tasks & projects, all in one place.</div>
            </div>

           </div>
           <div className="flex p-2 mt-4 ">
               <Link to="/congratulations" className="text-base  w-3/5 mx-auto focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-violet-600  
                    bg-violet-700 
                    text-violet-100 
                    border duration-200 ease-in-out 
                    border-violet-700 transition">
                    Create Workspace
               </Link>
                 
           </div>
        </div>
     </div>
    );
}

export default Planning;