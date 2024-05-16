import Image from "next/image";
import AITextBox from "@/app/components/AITextBox";
import TextHello from "@/app/components/TextHello";
import localFont from "@next/font/local";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import FinanceForm from "./components/FinanceForm";



export default function Home() {
  return (
    <main className="bg-[#131314] h-screen  flex flex-col items-center justify-center" >

      
        {/* <AITextBox />
        
        <Footer/> */}

        <FinanceForm/>

  
    </main>
  );
}
