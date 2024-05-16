import AITextBox from "@/app/components/AITextBox";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main className="bg-[#131314] h-screen  flex flex-col items-center justify-center" >
      <AITextBox />
      <Footer />
    </main>
  );
}
