import fetch from 'node-fetch';

async function sendMessage(
  message: string,
  phoneNumber: string,
  instance: string
) {
  const evolutionBaseUrl = process.env.EVOLUTION_BASE_URL;
  const url = `${evolutionBaseUrl}/message/sendText/${instance}`;
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      apiKey: process.env.INSTANCE_API_KEY,
    },
    body: JSON.stringify({
      number: phoneNumber,
      options: {
        delay: 1200,
        presence: 'composing',
        linkPreview: false,
      },
      textMessage: {
        text: message,
      },
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error sending message', error);
  }
}

const evolutionAPI = {
  sendMessage,
};

export default evolutionAPI;
