import Link from "next/link";

export default function Navbar() {
    return(
       <header>
        <nav>
            <Link href="/">Isaiah Potts</Link>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>

            </div>
        </nav>
       </header>

    );
}