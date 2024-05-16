import Image from "next/image";
import AITextBox from "@/app/components/AITextBox";
import TextHello from "@/app/components/TextHello";
import localFont from "@next/font/local";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import FinanceForm from "./components/FinanceForm";
import FinanceForm2 from "./components/FinanceForm2";
import UPIIntegration from "./components/UPIIntegration";
import PaymentHistory from "./components/PaymentHistory";
import MutualFunds from "./components/MutualFunds";
import AskLoan from "./components/AskLoan";
import LoanDetails from "./components/LoanDetails";



export default function Home() {
  return (
    <main className="bg-[#131314] h-screen  flex flex-row gap-4 items-center justify-center" >

      
        {/* <AITextBox />
        
        <Footer/> */}

        {/* <FinanceForm/> */}
        <FinanceForm2/>
        <AskLoan/>
        <LoanDetails/>
        
        {/* <PaymentHistory/>  */}

        {/* <MutualFunds/> */}
  
    </main>
  );
}
