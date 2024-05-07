import Image from "next/image";
import AITextBox from "@/app/components/AITextBox";
import TextHello from "@/app/components/TextHello";
import localFont from "@next/font/local";
import SideBar from "./components/SideBar";



export default function Home() {
  return (
    <main className="bg-white flex flex-row justify-center" >

      <div className="fixed left-0">
      <SideBar/>
      </div>

      <div className="flex flex-col items-center">
        <AITextBox />
      </div>
  
    </main>
  );
}
