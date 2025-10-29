import type { StateCreator } from 'zustand';
import type { User } from '.';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';
import { getProfile } from '../api/requests/get-profile.request';

export type UserState = {
  profile: User | null;
};

export type UserActions = {
  getProfile: () => void;
};

type createUserStoreT = StateCreator<
  UserState & UserActions,
  [['zustand/devtools', never]]
>;

const userSlice: createUserStoreT = (set) => ({
  profile: null,
  getProfile: async () => {
    const profile = await getProfile();

    set({ profile });
  },
});

export const useUserStore = createWithEqualityFn<UserState & UserActions>()(
  devtools(userSlice, { name: 'userStore' })
);
