import { Message } from './message';
import { User } from './user';

export interface Room {
  id: number;
  title: string;
  messages: Message[];
  users: User[];
}
