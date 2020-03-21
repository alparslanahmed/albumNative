const dev = {
  server: 'http://127.0.0.1:8000/',
  socket: 'http://127.0.0.1:6001',
  client_id: '2',
  client_secret: 'VuX2lOC41GKjsznYIdniIoK5ALhHV5GMh3gu6jh2',
};

const prod = {
  server: 'https://album.alparslan.me/',
  socket: 'https://album.alparslan.me',
  client_id: '2',
  client_secret: 'AuX7sfpiJSuy1SPaNtdJ4iHgpQUUgGEaJ0r09up0',
};

const env = process.env.NODE_ENV === 'development' ? dev : prod;

export default env;
