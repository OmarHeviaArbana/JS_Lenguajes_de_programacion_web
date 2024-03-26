
/* 

Declaración de la función findOne(): 

Esta función trata de buscar un element dentro de una lista tras pasar 2 segundos desde la recepeción de los tres parametros existentes en la misma. Sus parametros son: la lista "list" donde se va a buscar el elemento; un objeto del tipo clave/valor {key, value}; y otro objeto que contiene las funciones onSucces() y onError() que se llamarán tras el resultado de la búsqueda mediante una condición de tipo ternaria.

*/


const findOne = (list, { key, value }, { onSuccess, onError }) => {
    setTimeout(() => {
      const element = list.find(element => element[key] === value);
      element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
    }, 2000);
  };
  
  /* 
  
  Declaración de las funciones onSuccess() y onError();
  
  Estas devuelven un console log con el elemento de la lista encontrado o un mensaje de error si no ha sido encontrado 
  
  */
  
  const onSuccess = ({ name }) => console.log(`user: ${name}`);
  const onError = ({ msg }) => console.log(msg);
  
  /* Se define una constante con el array de la lista donde se va a buscar el elemento clave/valor */
  
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
  
  Se realiza un primera llamada callback() a findOne() con los parametros: users como lista, el objeto como clave 'name' y valor 'Carlos' y el callback de las funciones onSucces() y onError().
  
  El resultado tras 2 segundos del callback a findOne() es que Carlos existe en la lista y se hace otra llamada callback a onSucess()
  
  */
  
  console.log('findOne success');
  findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });
  
  /* 
  
  Se realiza un primera llamada callback() a findOne() con los parametros: users como lista, el objeto como clave 'name' y valor 'Fermin' y el callback de las funciones onSucces y onError 
  
  El resultado tras 2 segundos del calback a findOne() es que Fermiin no existe en la lista y se hace otra llamada callback a onError()
  
  */
  
  console.log('findOne error');
  findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });
  
  
  /*
  
  Esta es el resultado en consola:
  
  findOne success
  findOne error
   //wait 2 seconds
  user: Carlos
  ERROR: Element Not Found
  
  */
  