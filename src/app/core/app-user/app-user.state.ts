export interface AppUserState {
  id: number;
  username: string;
}

export const initialUserState: AppUserState = {
  id: null,
  username: ''
};
