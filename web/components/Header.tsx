"use client";

import Link from "next/link";
import Button from "./Button/Button";

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
                <Button buttonType="white" text="Log in" func={() => alert("hello")} />
                <Button buttonType="blue" text="Start free" func={() => alert("hello")} />
            </div>
        </header>
    );
}