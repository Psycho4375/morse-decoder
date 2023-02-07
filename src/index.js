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
    let str = ""
    let arr = []
    for (let i = 0; i < expr.length; i +=10){
        arr.push(expr.substr(i, 10))
    }
    arr.forEach(item =>{
        let str2 = ""
        for (let i = 0; i < item.length; i += 2){
            if (item.substr(i, 2) == '10'){
                str2 = str2.concat('.')
            } else if (item.substr(i, 2) == '11'){
                str2 = str2.concat('-')
            } else if (item.substr(i, 2) == '**'){
                str2 = str2.concat(' ')
                i += 8
            } 

        };
        return arr.push(str2)
    });
    arr.forEach(item => {
        if (MORSE_TABLE.hasOwnProperty(item)){
            str = str.concat(MORSE_TABLE[item])
        }
    })
    return str
    
}

module.exports = {
    decode
}
