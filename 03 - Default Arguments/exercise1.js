const delayMe = (callback, delay = 1000) => {
  let date = new Date;
  console.log(`Starting delay function at ${date.toTimeString()} with ${delay}ms delay`);
  setTimeout(callback, delay);
}

const timeLogger = (msg = '1 second delay') => {
  return () => {
    let date = new Date;
    console.log(`${date.toTimeString()} => ${msg}`);
  }
}

delayMe(timeLogger());
delayMe(timeLogger('5 seconds delay'), 5000);