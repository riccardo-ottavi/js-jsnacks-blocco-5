const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

//filtro gli studenti verificare se il nome è uguale a Marco Lanci. Quando lo trovo recupero la classe e la stampo
for(let i = 0; i < students.length; i++){
  if (students[i].name === "Marco Lanci"){
    console.log(students[i].class);
  }
}