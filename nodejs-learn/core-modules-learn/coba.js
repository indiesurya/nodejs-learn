const sayHello = (nama) =>  {
    return `Nama saya ${nama}`;
}

const umur = 22;

const mahasiswa = {
    nama: 'Indie',
    umur: '22',
    nim: 1808561073,
    cetakData(){
        return `Nama saya ${this.nama}, umur saya ${umur} tahun dengan NIM ${this.nim}`
    }
}

class Hello {
    constructor(){
        console.log('Hello World!');
    }
}

// export to another file to use this function, will be return object
// module.exports.sayHello = sayHello; 
// module.exports.umur = umur;
// module.exports.mahasiswa = mahasiswa;
// module.exports.hello = Hello;

// module export to object
// module.exports = {
//     sayHello : sayHello,
//     umur : umur,
//     mahasiswa : mahasiswa,
//     hello : Hello
// }


// module export same to variable name
module.exports = {sayHello, umur, mahasiswa, Hello}