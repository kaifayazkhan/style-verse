import { Link } from "react-router-dom"
import { style } from "../constant/globalStyle"
const Home = () => {
  return (
    <section
      className="relative bg-[url(https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)] bg-cover bg-center bg-no-repeat h-screen"
    >
      <div
        className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl">
          <h1 className={`${style["heading-large"]}`}>
            Find  you perfect 
            <strong className="block font-extrabold text-rose-700">
              Men's wear Collection
            </strong>
          </h1>
          <p className="mt-2">
          Elevate your wardrobe with our curated men's collection. Discover impeccable fashion and redefine your style effortlessly
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-center">
            <Link to='/shop'
                className={`${style["global-btn"]}`}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home