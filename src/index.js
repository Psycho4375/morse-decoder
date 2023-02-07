const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arr = [];
    let arr1 = [];
    
    let str2 = "";
    for (let j = 0; j < expr.length; j += 10){
        arr.push(expr.substr(j, 10))
    }
    arr.forEach(item => {
        let str = "";
        for (let i = 0; i < item.length; i += 2){
        if (item.substr(i, 2) == '10'){
            str = str.concat('.')
        } else if (item.substr(i, 2) == '11'){
            str = str.concat('-')
        } else if (item.substr(i, 2) == '**'){
            str = str.concat(' ')
            i += 8
        }       
    }
    return arr1.push(str)
    })
    
    arr1.forEach(item => {
        if(MORSE_TABLE.hasOwnProperty(item)){
            str2 = str2.concat(MORSE_TABLE[item]);
        } else {
            str2 = str2.concat(' ');
        }
    })
    return str2;
}
module.exports = {
    decode
}
