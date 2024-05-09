import Image from "next/image";
import AITextBox from "@/app/components/AITextBox";
import TextHello from "@/app/components/TextHello";
import localFont from "@next/font/local";
import SideBar from "./components/SideBar";



export default function Home() {
  return (
    <main className="bg-[#131314] flex flex-row items-center justify-center" >

      
        <AITextBox />

  
    </main>
  );
}
