"use client";

import Button from "./Button/Button";
import Image from "next/image";
import heroImg from "../public/hero.png";
import { ArrowRight, Book, CircleCheck, Zap } from "lucide-react";

export default function Hero() {
    return (
        <div className="flex mt-5 items-center justify-between px-20">
            <div>
                <div className="py-2 px-5 text-[#5d6ecd] rounded-4xl font-bold w-fit bg-[#e1e4fa] flex gap-2"><Zap />Client Portal for Freelancers & Agencies</div>
                <h2 className="text-6xl mt-5 font-bold">Client collaboration,<br />finnaly <span className="text-blue-600">organized.</span></h2>
                <p className="max-w-xl mt-5 text-xl">Relvio is a client portal for freelancers and agencies to share progress, gather feedback, and keep projects moving.</p>
                <div className="flex gap-5 mt-10">
                    <Button buttonType="blue" text="Start free" icon={ArrowRight} func={() => alert("hi")} />
                    <Button buttonType="white" text="Book demo" icon={Book} func={() => alert("hi")} />
                </div>
                <div className="flex gap-5 mt-10">
                    <div className="flex items-center gap-2">
                        <CircleCheck />
                        <span>Set up in minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CircleCheck />
                        <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CircleCheck />
                        <span>Built for freelancers & agencies</span>
                    </div>
                </div>
            </div>
            <div>
                <Image src={heroImg} width={600} alt="Hero image don't exists." />
            </div>
        </div>
    );
}