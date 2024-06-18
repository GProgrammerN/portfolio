import Profile from "./Profile";
import Social from "./Social";

export default function Header() {
    return (
        <header className="lg:sticky top-0 lg:w-1/2 lg:h-screen lg:shadow-xl
        sm:pl-12 md:pl-30 lg:pl-48 2xl:pl-96 py-6 md:py-12 xl:py-24 
        md:flex md:flex-col lg:justify-between px-6
        ">
            <Profile />
            <Social />
        </header >
    )
}