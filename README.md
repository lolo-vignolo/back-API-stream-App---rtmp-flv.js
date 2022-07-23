0. creo un archivo (puedo haerlo en powershell mkdir "name")

1. creao el package.json - dentro
   **npm init**

2. instalo nodemon
   **npm i nodemon**

3. creo script
   **"dev": "nodemon index.js"**,
   **"start": "node index.js"**

4. instalo express
   **npm i express**

5. configuro express
   **ver index.js**
   **instalo cors y lo agrego con los use**

6. Como trabajo en otro folder, crear carpeta public y file index.html
   el cual sera reeemplazado por el del front.

7. instalo env
   **asi creo variables de entorno**

8. comienzo a crear las rutas
   A- ver configuracion de express y router en el file roiter-stream
   B- ver como hago el require en index.js de lo creado en el router

   ```
   app.use('stram/streams', require('./routes/stream-routes'));
   ```

CONECCION DB

1. voy a mongo compas que ya tengo varios usuarios creados, y utilizp uno para loguearme. De no tenerlo debo ir a la pagina de mongo, crear un usuario y poner conect, elegit ultima opcion que dice conctar con mongo commpas. Una vez conectado, esto esta listo para comunicarlo con mi back.

2. conecto mongoose, para hacer mas facil la relacion mongo con el back.
   ir a la pagin, y seguir los pasos.

3. creo el folder database, luego el file config.js
   Este config .js tendra la coneccion a la BD usando mongoose.
   Es siempre igual la conección, es practicamente copiar y pegar.
   Lo unico que cambiara es la variable de entorno, que tendré que poner el URL con user y pasword que utilice para
   conectarme a mongo commpass y agregarle un slash al final con el nombre de la BD que estoy creando o que ya cree.
   **file config.js igual para todos los proyectos**
   La conexion con la BD esta todo en ese config.js del database.

RELACION BACK Y DB

1. Creo schema y modelo con mongoose
   https://mongoosejs.com/docs/index.html

2. con el schema creado en la carpeta models, lo exporto y lo tomo en mi index.
   de dicho schema o model creo una instancia a la que le pasare la info del req.body.
   Le paso el req.body entero, el schema sabe que tiene que toamr.

3. hecho esto, hago un try y un catch considerando si el posteo se hizo o no.

4. sigo y ago lo mismo con el GET , PUT , DELETE
