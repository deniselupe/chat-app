import Link from "next/link";

export default function Footer() {
    return(
        <footer className="text-white font-light drop-shadow-xl">
            ©2023 {" "}
            <Link href="https://github.com/deniselupe">Denise Rodriguez</Link>
        </footer>
    );
}