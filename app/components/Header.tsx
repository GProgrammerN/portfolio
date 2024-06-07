import Profile from "./Profile";
import Stack from "./Stack";

export default function Header() {
    return (
        <header className="lg:sticky top-0 lg:w-1/2 lg:h-screen shadow-xl
        sm:pl-24 md:pl-30 lg:pl-48 2xl:pl-96 py-6 md:py-20 lg:py-24 
        md:flex md:flex-col lg:justify-between
        ">
            <Profile />
            <Stack />
        </header >
    )
}