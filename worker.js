self.addEventListener('message', (event) => {
  if (event.data === 'runScript') {
    while (true) {
      setTimeout(() => {
        console.log('JavaScript running from web worker!');
      }, 5000);
    }
  }
});
