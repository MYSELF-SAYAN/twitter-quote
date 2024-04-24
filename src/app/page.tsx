import Image from "next/image";
import Controls from "@/components/Controls";
import FinalCard from "@/components/FinalCard";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-screen h-screen md:px-20 sm:px-5 px-1">
      <div className="flex items-center justify-between py-5">
        <p className="text-3xl font-bold">Sayan</p>
        <div className="flex items-center gap-x-8">
          <Link href="https://github.com/MYSELF-SAYAN">
            
          <span className="text-3xl cursor-pointer">
            <FaGithub />
          </span>
          </Link>
          <Link href="https://www.linkedin.com/in/sayan-mukherjee-898a47257/">
          <span className="text-3xl cursor-pointer text-[#0077B5]">
            <FaLinkedin />
          </span>
          </Link>
        </div>
      </div>
      <div className="w-full items-center flex justify-center flex-col mt-10 ">
        <p className="md:text-5xl text-3xl text-center font-bold">Twitter Card Generator</p>
        <p className="md:text-xl text-sm text-center font-semibold text-gray-600  mt-3">
          Unleash your thoughts and craft Twitter-style quote cards
          effortlessly. Design, customize, and share inspiring messages in a
          sleek, modern format
        </p>
      </div>
      <div className="w-full flex-grow flex mt-5 lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full">
          <FinalCard />
        </div>
        <div className="lg:w-1/2 w-full">
          <Controls />
        </div>
      </div>
    </div>
  );
}
