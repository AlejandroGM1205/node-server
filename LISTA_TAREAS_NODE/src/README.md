¿Qué sucedió al usar async y await?
Al utilizar async y await, las funciones que originalmente retornaban promesas se vuelven más fáciles de leer y de trabajar. Con async marcamos una función como asíncrona, lo que nos permite usar await dentro de ella para esperar la resolución de una promesa sin bloquear el hilo principal. Esto simplifica la sintaxis y hace que el código se asemeje a una programación síncrona.

¿Qué sucedió al usar el método then()?
Al usar el método .then(), estamos manejando la promesa de una manera más tradicional. Podemos encadenar acciones que deben realizarse después de que la promesa se resuelva usando .then(). Aunque funcionalmente es similar a async/await, la sintaxis es diferente y puede resultar más verbosa, especialmente cuando se trata de varias operaciones asíncronas.

¿Qué diferencias encontraste entre async, await y el método then()?
async y await proporcionan una sintaxis más limpia y similar a la programación síncrona, mientras que el método .then() requiere encadenar llamadas de forma explícita.
Con async/await, puedes manejar errores con un bloque try-catch, mientras que con .then() debes usar .catch() para manejar errores.
async/await es más fácil de leer y entender, especialmente en el caso de múltiples operaciones asíncronas, ya que sigue una estructura secuencial más clara, similar a la programación síncrona.