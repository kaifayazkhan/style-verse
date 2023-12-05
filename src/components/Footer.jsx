import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer className="px-[5%] gap-8 flex-wrap py-14 items-start w-full bg-slate-300 text-center">
            <h2 className="text-2xl font-semibold"><Link to="/">STYLE VERSE</Link></h2>
            <p> Explore our latest products </p>
        </footer>
    )
}

export default Footer