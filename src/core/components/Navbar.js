import Link from "next/link";
import Logo from "src/core/components/Logo";

export default function Navbar() {
    return (
        <div className="nav-container border-b-2 border-black">
            <Link href="">
                <Logo />
            </Link>
            <div className = "nav-menu">
                <Link href = "/login" className = "nav-link white"></Link>
                <Link href = "/pricing" className = "nav-link black"></Link>
            </div>
        </div>
    )
}