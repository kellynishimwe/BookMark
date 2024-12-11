

const Login = () => {
  return (
    <main className="w-full h-[900px] ">
    <div className="bg-slate-400 w-[600px] h-[450px] my-20   mx-auto justify-center items-center rounded-lg hover:bg-blue-500">  
     <h1 className="text-white text-center">Login</h1>   
 <input type="text "placeholder="Email" className="px-4 py-4 bg-white flex-1 mt-20 rounded-lg border-green-400 focus:ring-4 focus:ring-red-500 w-[450px] justify-center mx-auto items-center" /><br />
 <br />
 <input type="text "placeholder="Password" className="px-4 py-4 bg-white flex-1 mt-25  rounded-lg border-green-400 focus:ring-4 focus:ring-red-500 w-[450px]"  /><br />
 
  <button className="bg-purple-600 text-white mt-10 rounded-md w-32 h-10">Submit</button>       
    </div>
    </main>
  )
}

export default Login
