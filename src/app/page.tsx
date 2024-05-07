import Image from "next/image";
import AITextBox from "@/app/components/AITextBox";
import TextHello from "@/app/components/TextHello";
import localFont from "@next/font/local";



export default function Home() {
  return (
    <main className="bg-white flex flex-col gap-3" >

     <AITextBox/>

    </main>
  );
}
