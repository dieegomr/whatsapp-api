# Whatsapp API

Whatsapp API is an API designed to facilitate communication with the [Evolution API](https://doc.evolution-api.com/docs/docker-installation) for WhatsApp. It provides functionality to send messages, read messages from a number, and listen for incoming or sent messages.

## Features

- **Send Message**: Send a message to a specific number.
- **Read Messages**: Retrieve all messages from a specific number.
- **Listen for Messages**: Receive notifications for incoming or sent messages.

## Installation

To use the Evolution API Wrapper, follow these steps:

1. Clone the repository:
   ```bash
    git clone https://github.com/dieegomr/whatsapp-api.git
    ```

2. Install dependencies:
   ```bash
    yarn
    ```

3. Copy `.env.example` and use it as `.env` by running the following command:

    For Unix/Linux/MacOS:
    ```bash
    cp .env.example .env
    ```

    For Windows:
    ```cmd
    copy .env.example .env
    ```

4. Fill in the environment variables in the .env file with your own values.

5. Execute the following command to start the project in development mode:
   ```bash
    yarn start:dev
    ```