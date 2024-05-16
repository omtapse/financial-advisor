import { create } from "zustand";

interface appStore {

    istemplateOpen: boolean
    toggleTemplate: () => void
    chat: Array<any> | []
    currentChat: any | null

    pushChat: (chat: any) => void;

}

export const useAppStore = create<appStore>((set, get) => ({
    istemplateOpen: false,

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