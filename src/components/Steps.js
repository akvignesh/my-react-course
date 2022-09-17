import { useLocation ,Link} from 'react-router-dom';

function Steps() {

   const location = useLocation();
   return (

      <div className="flex items-center p-3 md:p-6">
         <div className="flex items-center text-white text-lg relative ">
            <Link to="/" className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-2 border-2 bg-violet-700 border-violet-700 text-center ">
               1
            </Link>
         </div>
         <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-violet-500"></div>
         <div className="flex items-center text-lg text-gray-500 relative">
         {
               (location.pathname === "/congratulations"|| location.pathname === "/planning")
                  ?
                  <Link to="/home" className={"rounded-full transition duration-500 ease-in-out h-12 w-12 py-2 border-2 " + ((location.pathname === "/home" || location.pathname === "/planning" || location.pathname === "/congratulations") ? "bg-violet-700 border-violet-700 text-white text-center" : "border-gray-300 text-center")}>
                     2
                  </Link>
                  :
                  <div className={"rounded-full transition duration-500 ease-in-out h-12 w-12 py-2 border-2 " + ((location.pathname === "/home" || location.pathname === "/planning" || location.pathname === "/congratulations") ? "bg-violet-700 border-violet-700 text-white text-center" : "border-gray-300 text-center")}>
                     2
                  </div>
         }
         </div>
         <div className={"flex-auto  border-t-2 transition duration-500 ease-in-out" + ((location.pathname === "/home"||location.pathname === "/planning" || location.pathname === "/congratulations") ? " border-violet-500" : "border-gray-300")}></div>
         <div className="flex items-center text-lg text-gray-500 relative">
            {
               (location.pathname === "/congratulations")
                  ?
                  <Link to="/planning" className={"rounded-full transition duration-500 ease-in-out h-12 w-12 py-2 border-2 " + ((location.pathname === "/planning" || location.pathname === "/congratulations") ? "bg-violet-700 border-violet-700 text-white text-center" : "border-gray-300 text-center")}>
                     3
                  </Link>
                  :
                  <div className={"rounded-full transition duration-500 ease-in-out h-12 w-12 py-2 border-2 " + ((location.pathname === "/planning" || location.pathname === "/congratulations") ? "bg-violet-700 border-violet-700 text-white text-center" : "border-gray-300 text-center")}>
                     3
                  </div>      
            }
         </div>
         <div className={"flex-auto  border-t-2 transition duration-500 ease-in-out" + ((location.pathname === "/planning" || location.pathname === "/congratulations") ? " border-violet-500" : "border-gray-300")}></div>
         <div className="flex items-center text-lg text-gray-500 relative">
            <div className={"rounded-full transition duration-500 ease-in-out h-12 w-12 py-2 border-2 " + ((location.pathname === "/congratulations") ? "bg-violet-700 border-violet-700 text-white text-center" : "border-gray-300 text-center")}>
               4
            </div>
         </div>
      </div>




   )
}

export default Steps;