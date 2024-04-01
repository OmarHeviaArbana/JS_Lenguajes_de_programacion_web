/* 

Declaración de la función findOne() que busca un usuario en la lista users con la clave y valor especificados y devuelve una promesa reolviendo si encuentra el usuario o no 

*/

const findOne = async (list, { key, value } ) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const element = list.find(element => element[key] === value);
        element ? resolve(element) : reject('ERROR: Element Not Found');
      }, 2000);
    });
  };

/*   

Lista de array de usaurio donde se buscarán los nombres de los usuarios 

*/
  
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

Definición de la Nueva función para ejecutar de forma paralela la función findOne(). En esta función, se utiliza Promise.all para ejecutar las llamadas a la función findOne() junto con asyn/await. 

*/
const executeParallel = async () => {

/*    

Finalmente se controla el resultado con un try y un catch. 

 */

    try {
    console.log('findOne success');
        const usersFounded = await Promise.all([
        findOne(users, { key: 'name', value: 'Carlos' } ),
        findOne(users, { key: 'name', value: 'Fermin' }) 
        ]);

        /* 
        
        Se realiza un forEach para imprimir los resultados de las diferentes promesas en consola 
        
        */

        usersFounded.forEach(user => { 
        console.log(`user: ${user.name}`);
    }); 
    } catch (error) {
        console.log('findOne error');
        console.log(error);

    }
};

/* 

Se ejecuta la función para buscar usuarios  

*/
  
  executeParallel(); 