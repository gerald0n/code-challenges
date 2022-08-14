# Desafio: Encriptar Palavra
*este desafio foi retirado do processo seletivo da Driven*

Descrição do desafio: 

Uma das formas de se gerar uma palavra nova é, para cada letra da palavra original, avançar uma quantidade de letras do alfabeto. Por exemplo, se a palava original é "gato", podemos gerar uma nova palavra avançando para cada letra ("g", "a", "t", "o") duas letras no alfabeto. Portanto, "g" se tornaria "i", "a" se tornaria "c" e a palavra "gato" seria transformada em "icvg".

Implemente a função ao lado que recebe um valor, a quantidade de letras a serem avançadas, e uma string, a palavra original. A função deve retornar outra string, a nova palavra gerada.

Exemplo: se o valor passado for 3 e a palavra original for "escola", a função deve retornar "hvfrod".

Dica: Strings se comportam parecido com arrays. Então, podemos obter o número de caracteres de uma string utilizando a propriedade length como se segue:

let palavra = "abcdef";
let tamanho = palavra.length; // Nesse caso a variável tamanho va receber o valor 6, que é o número de caracteres em palavra.

Outra semelhança é que podemos acessar um caractere da string por sua posição, então se quisermos pegar a primeira letra da string palara acima podemos fazer:

let primeiraLetra = palavra[0]; // Com isso, temos que primeiraLetra recebeu a string "a";
let segundaLetra = palavra[1]; // Com isso, temos que segundaLetra recebeu a string "b";

Você pode achar útil criar uma variável que represente o alfabeto como abaixo:
let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

# Challenge: Encrypt Word
*this challenge was removed from the Driven selection process*

Challenge Description:

One of the ways to generate a new word is, for each letter of the original word, to advance a number of letters of the alphabet. For example, if the original word is "cat", we can generate a new word by advancing each letter ("g", "a", "t", "o") two letters in the alphabet. So "g" would become "i", "a" would become "c", and the word "cat" would become "icvg".

Implement the function on the side that receives a value, the amount of letters to be advanced, and a string, the original word. The function must return another string, the new generated word.

Example: if the value passed is 3 and the original word is "school", the function should return "hvfrod".

Tip: Strings behave similarly to arrays. So, we can get the number of characters in a string using the length property as follows:

let word = "abcdef";
let size = word.length; // In this case the size variable will receive the value 6, which is the number of characters in a word.

Another similarity is that we can access a character of the string by its position, so if we want to get the first letter of the string above we can do:

let firstLetter = word[0]; // With this, we have that firstLetter received the string "a";
let secondLetter = word[1]; // With this, we have that secondLetter received the string "b";

You might find it useful to create a variable that represents the alphabet like below:
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l ', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

