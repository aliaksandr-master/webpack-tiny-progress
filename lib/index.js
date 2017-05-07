const webpack = require('webpack');
const { log, addLog } = require('./write');


module.exports = () => {
  let prevWorkMessage = null;
  let prevWorkTime = null;
  let prevPercent = null;
  let startAt = null;

  return new webpack.ProgressPlugin((percentage, msg) => {
    if (Number(percentage) === 0) {
      prevWorkMessage = null;
      prevWorkTime = null;
      prevPercent = null;
      startAt = Date.now();
    }

    if (prevWorkTime === null) {
      prevWorkTime = Date.now();
    }

    const msgStr = `[webpack compiling] ${(percentage * 100).toFixed(0)}%${msg ? ` ${msg}` : ''}`;

    if (msg === prevWorkMessage) {
      if (prevPercent < percentage) {
        log(msgStr, true);
      }
    } else {
      if (prevWorkMessage) {
        addLog(` (${((Date.now() - prevWorkTime) / 1000).toFixed(2)}s)`);
      }
      log(msgStr, false, Boolean(prevWorkMessage));
      prevWorkTime = Date.now();
    }

    if (prevPercent < percentage) {
      prevPercent = percentage;
    }

    prevWorkMessage = msg;

    if (percentage === 1) {
      addLog(` (${((Date.now() - startAt) / 1000).toFixed(2)}s)\n`);
    }
  });
};
