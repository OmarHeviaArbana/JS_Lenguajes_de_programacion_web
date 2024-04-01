/* 
MODIFICACION 1: Se modifica la función para que retorne una nueva promesa que compruebe si encontró el elemento o no. Si lo encuentra resuelve la promesa con el elemento o se rechaza con el mensaje de error
*/

const findOne = (list, { key, value }) => {
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
  MODIFICACION 2: Ahora, en lugar de declarar la funciones onSuccess() y onError() y hacer el callback desde findOne(), se controla la promesa mediante then() y catch(). Por lo que, se eliminan los callbacks a esas funciones y su declaración.
  */
  
  console.log('findOne success');
  findOne(users, { key: 'name', value: 'Carlos' })
    .then(({ name }) => console.log(`user: ${name}`))
    .catch((error) => console.log(error));
 
  console.log('findOne error');
  findOne(users, { key: 'name', value: 'Fermin' })
    .then(({ name }) => console.log(`user: ${name}`))
    .catch((error) => console.log(error));
  
  
