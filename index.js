const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const hashPassword = (password) => {
    return crypto.createHash('sha256').update(password).digest('hex');
};

rl.question('Enter a password to hash: ', (password) => {
    console.log(`Hashed Password: ${hashPassword(password)}`);
    rl.close();
});
