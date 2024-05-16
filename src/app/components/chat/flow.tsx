import { AppStates, useAppStore } from "@/app/store/chat.store";
import FinanceForm from "../FinanceForm";
import FinanceForm2 from "../FinanceForm2";

function Flow() {
    const { infoState, setInfoState } = useAppStore()
    const { istemplateOpen } = useAppStore()

    return <div className="no-bar"> <div className={` overflow-hidden ${istemplateOpen ? 'h-[500px]' : 'h-[1px]  opacity-0'}  transition-all duration-300 space-y-6`}>
        <FinanceForm className='' setInfoState={setInfoState} />

    </div>
        <FinanceForm2 className={` overflow-hidden ${infoState === AppStates.EXTRA && istemplateOpen ? 'h-[350px]' : 'h-[1px]'}`} setInfoState={setInfoState} />
    </div>
}


export default Flow