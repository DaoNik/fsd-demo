import { http } from '@/shared';
import { USER_API } from '../routes';
import type { User } from '../../model';

export async function getProfile() {
  const { status, statusText, data } = await http.get<User>(USER_API.profile);

  if (status !== 200) {
    throw new Error(`Failed to fetch profile: ${status} ${statusText}`);
  }

  return data;
}
