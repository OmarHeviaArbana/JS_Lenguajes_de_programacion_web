/*  
MODIFICACIÓN 1: Se implementa la lógica de async/await a la función principal incorporando a esta el async que devolvera la promesa con el resultado de la búsqueda. 
*/
const findOne = async (list, { key, value }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const element = list.find(element => element[key] === value);
        element ? resolve(element) : reject('ERROR: Element Not Found');
      }, 2000);
    });
  };
  
const users = [
  {
    name: 'Carlos',
    rol: 'Teacher'
  },
  {
    name: 'Ana',
    rol: 'Boss'
  }
];

/* 
MODIFICACIÓN 2: Se definen dos funciones extra incorporando el async/await. Estas funciones son llamadas y van a esperar el resultado de la función principal findOne(), por lo que cuando la promesa sea resuelta controlaran el resultado con un try y un catch.  
*/

console.log('findOne success');
const firstSearch = async () => {
  try {
    const user = await findOne(users, { key: 'name', value: 'Carlos' });
    console.log(`user: ${user.name}`);
  } catch (error) {
    console.log(error);
  }
};
  
firstSearch();

console.log('findOne error');
const secondSearch = async () => {
  try {
    const user = await findOne(users, { key: 'name', value: 'Fermin' });
    console.log(`user: ${user.name}`);
  } catch (error) {
    console.log(error);
  }
};
  
secondSearch(); 
