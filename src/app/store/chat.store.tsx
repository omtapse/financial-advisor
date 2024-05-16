import { create } from "zustand";

export enum AppStates {
    MAIN = 'main',
    EXTRA = 'extra',
    FUTURE = 'future'
}
interface appStore {
    infoState: any,
    setInfoState: (state: AppStates) => void
    istemplateOpen: boolean
    toggleTemplate: () => void
    chat: Array<any> | []
    currentChat: any | null
    setCurrentChat: (data: any) => void
    pushChat: (chat: any) => void

    values: null | {
        monthlyIncome: string,
        monthlyExpense: string,
        variableExpense: string
        savings: string
    },
    setValues: (data: any) => void
}

export const useAppStore = create<appStore>((set, get) => ({
    values: {
        monthlyIncome: '',
        monthlyExpense: '',
        variableExpense: '',
        savings: ''
    },
    setValues(data) {
        set({ values: data })
    },
    istemplateOpen: false,
    infoState: null,
    setCurrentChat(chat: any) {
        set({ currentChat: chat })
    },
    setInfoState(state) {
        set({ infoState: state })
    },
    toggleTemplate() {
        console.log(get().istemplateOpen)
        set({ istemplateOpen: !get().istemplateOpen })
    },
    chat: [],
    currentChat: null,
    pushChat(chat) {
        set({ chat: [...get().chat, chat], currentChat: null })
    },
}))