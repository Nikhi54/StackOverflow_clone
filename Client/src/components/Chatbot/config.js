import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Chat-Bot';

const config = {
  // @ts-ignore
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName} \n Type: hello or help`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;