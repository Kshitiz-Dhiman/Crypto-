const { createHash } = require('crypto');

function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

let password = "Out of time";
let hashedPassword = hash(password);
console.log(hashedPassword)