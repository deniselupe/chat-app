import Link from "next/link";

export default function Footer() {
    return(
        <footer className="w-5/6 md:w-3/4 mx-auto text-white font-light drop-shadow-xl">
            ©2023 {" "}
            <Link href="https://github.com/deniselupe">Denise Rodriguez</Link>
        </footer>
    );
}