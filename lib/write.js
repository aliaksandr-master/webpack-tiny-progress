const readline = require('readline');



let messages = [];


const flush = () => {
  const msgArray = messages;

  messages = [];

  msgArray.forEach((message) => console.log(message));

  return msgArray;
};


const log = (message, replace = false, newLine = false) => {
  if (replace && messages.length) {
    messages[messages.length - 1] = message;
  } else {
    messages.push(message);
  }
};



const addLog = (message) => {
  if (messages.length) {
    messages[messages.length - 1] = `${messages[messages.length - 1]}${message}`;
  }
};



exports.log = log;

exports.flush = flush;

exports.addLog = addLog;
