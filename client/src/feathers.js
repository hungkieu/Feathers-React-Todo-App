import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import authentication from '@feathersjs/authentication-client';

const app = feathers();
const restClient = rest('http://localhost:3030');
app.configure(restClient.fetch(window.fetch));
app.configure(authentication({
  storageKey: 'authentication'
}));

export default app;
