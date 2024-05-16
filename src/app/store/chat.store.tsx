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

    pushChat: (chat: any) => void
}

export const useAppStore = create<appStore>((set, get) => ({
    istemplateOpen: false,
    infoState: null,
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
        set({ chat: [...get().chat, chat] })
    },
}))