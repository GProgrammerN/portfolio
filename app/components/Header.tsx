import Profile from "./Profile";
import Stack from "./Stack";

export default function Header() {
    return (
        <header className="lg:sticky top-0 lg:w-1/2 lg:h-screen overflow-auto shadow-xl
        pl-96 py-12 md:py-20 lg:py-24 
        lg:flex lg:flex-col lg:justify-between">
            <Profile />
            <Stack />
        </header >
    )
}