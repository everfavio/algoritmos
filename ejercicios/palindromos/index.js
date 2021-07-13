/*
enunciado
dado una cadena , retornar verdad si la cadena es palindroma o falso si es que no la es
Los palindromos son cadenasque forman la misma palabra si esta es revertida, se debe incluir espacion y signos de puntuacion
para determinar que una cadena sea palindroma
ejemplos :

palindrome('abba') === true
palindrome('abcdefg') === false

*/

function palindrome1(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

function palindrome2(str) {
  str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  })
}
module.exports = {
  palindrome1,
  palindrome2,
};