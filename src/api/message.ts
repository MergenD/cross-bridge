interface Message {
  email: string;
  content: string;
}

import { apiUrl } from '@/constants/api';

export const sendMessage = async (data: Message) => {
  const response = await fetch(`${apiUrl}/message`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
