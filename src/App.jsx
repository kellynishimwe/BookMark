// import Button from "./component/Button"


// const App = () => {
//   return (
//     <main className='w-full h-screen '>
//       <div className='w-[600px] h-[400px] bg-gray-600 mx-auto px-4 py-5 mb-auto mt-10 border-[3px] rounded-lg '>
//         <input type="text" className="mx-auto w-full h-10 focus:ring-purple-900 focus:ring-8 rounded-md mt-40 text-2xl" placeholder="Your name"/>
//         <Button text="Show Name"bgColor="bg-purple-600" type={type} onClick={}/>
//       </div>
//     </main>
//   )
// }

// export default App

import { useState } from "react";
import Button from "./component/Button";

const App = () => {
  const [name, setName] = useState(""); 


  const handleClick = () => {
    setName("Kelly"); 
  };
const handleReset=()=>{
  setName("")
}

  return (
    <div className="w-[600px]  flex-auto h-[400px] bg-gray-600 mx-auto px-4 py-5 mb-auto mt-10 border-[7px] rounded-2xl space-x-0 " >
      <p className="mt-32 ">what my name</p>
      
      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="mx-auto mt-[40px] w-full h-10 focus:ring-purple-900 focus:ring-8 rounded-md mt-40 text-2xl"placeholder="Your Name"/>

      <div className=" ml-8 flex-none space-x-10 mt-20">
            <Button text="Clear" bgColor="bg-purple-900" type="submit" onClick={handleReset} />
            <Button text="Show Name" bgColor="bg-purple-600" type="submit" onClick={handleClick} />
    </div>

    </div>
 
  );
};

export default App;
