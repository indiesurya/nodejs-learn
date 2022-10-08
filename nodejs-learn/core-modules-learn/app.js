// const fs = require('fs');

// //synchronous
// fs.writeFileSync('text.txt', 'Hello World!');

// //error handling synchronous
// try {
//     fs.writeFileSync('data/text.txt', 'Hello World!');
// } catch (error) {
//     console.log(error);
// }

//asynchronous
// fs.writeFile('data/text.txt', 'Hello World!', (error) => {
//     console.log(error);
// })

//import readline
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('siapa nama anda: ', (nama) => {
    rl.question('no hp: ', (no) => {
        const contact = {nama, no};
        const file = fs.readFileSync('data/contact.json', 'utf8');
        const contactContent = JSON.parse(file); // parse from buffer type
        contactContent.push(contact);
        fs.writeFileSync('data/contact.json', JSON.stringify(contactContent));
        rl.close();
    })
});