import ampq, { Message, Channel } from 'amqplib';

async function createChannel(uri: string) {
  const connection = await ampq.connect(uri);
  return await connection.createChannel();
}

async function consumeQueue(
  channel: Channel,
  queue: string,
  callback: (message: Message) => void
) {
  return channel.consume(queue, (message: any) => {
    callback(message);
    channel.ack(message);
  });
}

const rabbitMQ = {
  createChannel,
  consumeQueue,
};

export default rabbitMQ;
