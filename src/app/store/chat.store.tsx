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
}

export const useAppStore = create<appStore>((set, get) => ({
    istemplateOpen: false,
    infoState: null,
    setCurrentChat(chat: any) {
        // if (get().currentChat) {
        //     get().pushChat(get().currentChat)
        //     set({ currentChat: null })
        // }
        set({ currentChat: chat })
    },
    setInfoState(state) {
        set({ infoState: state })
    },
    toggleTemplate() {
        console.log(get().istemplateOpen)
        set({ istemplateOpen: !get().istemplateOpen })
    },
    chat: [{ _id: 1, answer: 'answer the wsiaasdfk j', question: 'whati adskfjasldkfa' },
    { _id: 2, answer: 'answer the wsiaasdfk j', question: 'whati adskfjasldkfa' },
    { _id: 3, answer: 'answer the wsiaasdfk j', question: 'whati adskfjasldkfa' },
    { _id: 4, answer: 'answer the wsiaasdfk j', question: 'whati adskfjasldkfa' },
    { _id: 6, answer: 'answer the wsiaasdfk j', question: 'whati adskfjasldkfa' },
    ],
    currentChat: null,
    pushChat(chat) {
        set({ chat: [...get().chat, chat] })
    },
}))