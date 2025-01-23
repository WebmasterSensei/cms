import { create } from 'zustand';

export const useOnlineUsersStore = create((set, get) => ({
  onlineUsers: [],
  getOnlineUsers: () => get().onlineUsers,
  setOnlineUsers: (users) => set({ onlineUsers: users }),
  addOnlineUser: (user) => set((state) => ({ onlineUsers: [...state.onlineUsers, user] })),
  removeOnlineUser: (user) =>
    set((state) => ({
      onlineUsers: state.onlineUsers.filter((onlineUser) => onlineUser.id !== user.id),
    })),
}));
