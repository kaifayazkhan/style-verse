import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-between px-[5%] gap-8 flex-wrap py-10 items-start w-full bg-slate-300">
            <div className="md:w-1/4">
                <h2 className="text-2xl font-semibold"><Link to="/">STYLE VERSE</Link></h2>
                <p> Explore our latest products </p>
            </div>
            <div className="flex flex-col gap-5 md:flex-row justify-between  md:w-2/4">
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold">Products</h3>
                    <Link to="/shop">All Products</Link>
                    <Link to="/shop">Trending</Link>
                    <Link to="/shop">New Arrivals</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold">Company</h3>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/careers">Careers</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold">Support</h3>
                    <Link to="/help">Help & FAQs</Link>
                    <Link to="/shipping">Shipping</Link>
                    <Link to="/returns">Returns</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer