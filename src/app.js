import express from 'express'; //importamos express para poder usarlo, recuerda que debes agregar en el package.json "type":"module" para que se pueda usar ecmascript modules
import rutasIndex from './routes/index.routes.js'
import rutasGuitarras from './routes/guitarras.routes.js'; //se importa el archivo con las rutas y se guarda en variable

const app = express(); //intanciamos expres 

//hacemos uso de fn que ayuda a poder leer los json que se reciben del front y puedan entenderlo las rutas que estan abajo
app.use(express.json());

app.use('/api',rutasGuitarras); //se hace uso de las rutas definidas en esta variable del archivo que arriba fue importado
app.use('/api',rutasIndex); //se hace uso de las rutas definidas en esta variable del archivo que arriba fue importado

//hacemos uso de un midelware para poder responder cuando se infrese una ruta no definida
app.use((req, res, next) => {
    res.status(404).json(
        {
            "Mensaje" : "End point no encontrado"
        }
    )
    
});

export default app;