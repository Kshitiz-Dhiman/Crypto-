let char = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let key = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
key = key.split('').sort(() => Math.random() - 0.5).join('');

let charArray = char.split("");
let keyArray = key.split("");

// ENCRYPT
let cypherText = "";
let encrypt = (text) => {
    for (const letter of text) {
        let index = char.indexOf(letter);
        cypherText += key[index]
    }
    console.log(`Original text: ${text}`)
    console.log(`Encrypted code: ${cypherText}`)
}
encrypt("Kshitiz");

//DECRYPT
let plainText = "";
let decrypt = (text) => {
    for (const letter of text) {
        let index = key.indexOf(letter)
        plainText += char[index]
    }
    console.log(`Encrpyted text: ${text}`)
    console.log(`Original code: ${plainText}`)
}
decrypt(cypherText);