self.addEventListener('message', (event) => {
  if (event.data === 'runScript') {
    setTimeout(() => {
      console.log('JavaScript running from web worker!');
    }, 5000);
  }
});
