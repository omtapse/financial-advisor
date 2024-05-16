import AITextBox from "@/app/components/AITextBox";
import Footer from "./components/Footer";

import FinanceForm from "./components/FinanceForm";
import FinanceForm2 from "./components/FinanceForm2";
import UPIIntegration from "./components/UPIIntegration";


export default function Home() {
  return (
    <main className="bg-[#131314] h-screen  flex flex-col items-center" >
      <AITextBox />
      <Footer />
      <FinanceForm />
      <FinanceForm2 />
      <UPIIntegration />

    </main>
  );
}
