import { style } from "src/constant/globalStyle"
const Loader = () => {
  return (
    <div className={`${style["flex-row-start"]} justify-center gap-5 w-full min-h-[70vh] `}>
        <span className="w-8 h-8 rounded-[50%] border-2 border-purple-500  animate-ping"></span>
        <span className="text-purple-500">Loading...</span>
    </div>
  )
}

export default Loader