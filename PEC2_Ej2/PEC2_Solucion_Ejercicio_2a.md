# Solucion Ejercicio

## ¿Por qué es el valor de this es undefined?

Desde mi punto de vista, el valor de "this" se vuelve undefined debido a que la función addTodo() del servicio se está pasando como parámetro de la función bindAddTodo() de la vista. Por lo que, cuando añadimos una tarea desde la vista e invocamos esa función bindAddTodo(), lo que estamos pasando como handler es la función addTodo() del servicio, lo cual no es el objeto que contiene el listado de tareas.  

Una solución ante este problema, es decirle a la función bindAddTodo() que utilice la función addTodo() del servicio bindeando o enlazando esta como si fuera el propio servicio, pero pasando com parámetro el objeto this.service. De esta manera, cuando se active el listener de la vista al pulsar el boton de añadir la tarea, se llamará al método addTodo() en el contexto del servicio y permitiendo acceder al objeto del listado de tareas

La linea que habría que incluir sería la siguiente:

```
this.view.bindAddTodo(this.service.addTodo.bind(this.service));
```
la cual sustituirá a:

```
this.view.bindAddTodo(this.service.addTodo)
```
