import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import evolutionAPI from './evolutionAPI.js';
import mongoDb from './mongoDb.js';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

/*
Send Message route

This route is responsible for sending a message to a phone number using the Evolution API. It receives the message and the phone number from the request body and the instance from the request parameters. It then calls the sendMessage method from the evolutionAPI module, passing the message, phone number, and instance as arguments. If the message is sent successfully, it returns the response from the API. If an error occurs, it returns a 500 status code and an error message.
*/
app.post('/send-message/:instance', async (req, res) => {
  const { message, phoneNumber } = req.body;
  const { instance } = req.params;

  try {
    const response = await evolutionAPI.sendMessage(
      message,
      phoneNumber,
      instance
    );

    if (!response) {
      throw new Error('Error sending message');
    }

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

/*
Get Messages route

This route is responsible for getting all messages from a phone number. It receives the phone number from the request parameters and calls the getAllMessages method from the mongoDb module, passing the phone number as an argument. If the messages are retrieved successfully, it returns them as a response. If an error occurs, it returns a 500 status code and an error message.

To connect to the MongoDB database, the getAllMessages method uses the MONGO_URI, MONGO_DB_NAME, and MONGO_COLLECTION_NAME environment variables. 

You can find them through the following link: http://159.203.97.111:8081/
*/

app.get('/messages/:phoneNumber', async (req, res) => {
  const { phoneNumber } = req.params;
  try {
    const messages = await mongoDb.getAllMessages(phoneNumber);

    if (!messages) {
      throw new Error('Error getting messages');
    }

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
