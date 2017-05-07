const readline = require('readline');



const log = (message, replace = false, newLine = false) => {
  if (replace) {
    readline.clearLine(process.stdout);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(String(message));
    return;
  }

  process.stdout.write(`${newLine ? '\n' : ''}${message}`);
};



const addLog = (message) => {
  process.stdout.write(String(message));
};



exports.log = log;

exports.addLog = addLog;
