import AITextBox from "@/app/components/AITextBox";
import MutualFunds from "./components/MutualFunds";
import RetirementsFund from "./components/RetirementsFund";
import LoanDetails from "./components/LoanDetails";
import FinanceForm from "./components/FinanceForm";
import Scheme from "./components/Scheme";
import UPIIntegration from "./components/UPIIntegration";
import BuyCar from "./components/BuyCar";
import DontBuyCar from "./components/DontBuyCar";
import DelayCar from "./components/DelayCar";



export default function Home() {
  return (
    <main className="bg-[#131314] h-screen flex flex-col items-center gap-3 justify-center" >
      {/* <AITextBox /> */}
      {/* 
      <MutualFunds/>
      <RetirementsFund/> */}

      {/* <UPIIntegration/> */}

      <BuyCar/>
      <DontBuyCar/>
      <DelayCar/>

      {/* <Scheme/> */}
    </main>
  );
}
