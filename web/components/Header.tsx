import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center px-20 h-[100px]">
            <h1 className="text-3xl font-bold">Relvio</h1>
            <ul className="flex gap-20">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/templates">Templates</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
            </ul>
            <div className="flex gap-5">
                <button className="w-[120px] h-[50px] cursor-pointer font-bold border-2 rounded-2xl border-[#cdcdcd]">Log in</button>
                <button className="w-[150px] h-[50px] text-white cursor-pointer font-bold border-2 bg-[#506aea] rounded-2xl">Start free</button>
            </div>
        </header>
    );
}