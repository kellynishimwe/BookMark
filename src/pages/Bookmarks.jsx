
import Button from "../component/Button"
import Input from "../component/Input"

const Bookmarks = () => {
  return (
    <div>
        <h1 className="text-8xl font-extrabold text-center text-cyan-400 mb-40 ">Bookmarks System</h1>
        <form className="bg-red-300 w-[800px] mx-auto p-12 rounded-[20px]">
<input type={"text"} placeholder="Website Name" />
<input type={"URL"} placeholder="Website Link" />
<Button buttonElement={"Add"} />

   </form>
    </div>
  )
}

export default Bookmarks


