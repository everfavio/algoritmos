// Enunciado
/*
Dado una cadena, retornar una nueva cadena con el orden reverso de los caracteres\
-- ejemplos:
reverse('apple') = 'leppa'
reverse('hello') = 'olleh'
*/


/* solucion 1*/
function reverse1(str) {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
}

/* solucion 2*/
function reverse2(str) {
  let reversed = '';
  for (let character of str) {
    reversed += character;
  }
  return reversed;
}

/* solucion 3*/
function reverse3(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = {
  reverse1,
  reverse2,
  reverse3,
};



