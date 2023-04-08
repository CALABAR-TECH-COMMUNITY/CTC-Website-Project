import { create } from "zustand";

interface IModalStore {
  isModalOpen: boolean;
  toggleModal: () => void;
}

const modalStore = create<IModalStore>((set, get) => ({
  isModalOpen: false,
  toggleModal: () => set(() => ({ isModalOpen: !get().isModalOpen })),
}));

export const useModalStore = (): IModalStore => {
  const store = modalStore(({ isModalOpen, toggleModal }) => ({
    isModalOpen,
    toggleModal,
  }));
  return store;
};
