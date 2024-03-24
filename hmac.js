const { createHmac } = require('crypto');

const key = 'super-secret!';
const message = 'boo 👻';

const hmac = createHmac('sha256', key).update(message).digest('hex');

console.log(hmac);

// Hash and hmac are same , but hmac is more secure than hash. As it requires a secret key to generate the hmac.