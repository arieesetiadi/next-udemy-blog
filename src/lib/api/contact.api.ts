import { ContactMessage } from '@/types/contact.type';
import { fakeTimeout } from '../helpers/general.helper';
import axios from 'axios';

export async function storeContactMessage(contactMessage: ContactMessage) {
  await fakeTimeout(2000);
  const response = await axios.post('/api/contact', contactMessage);
  const result = response.data;
  return result;
}
