// const fs = require('fs'); // require to core module
// const moment = require('moment') // require to third party modules

//require local module
const coba = require('./coba');

console.log(coba.sayHello('Indie'), coba.umur, 'Tahun');
console.log(coba.mahasiswa.cetakData());
console.log(new coba.Hello());



