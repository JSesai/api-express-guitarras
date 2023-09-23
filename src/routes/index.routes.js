import { Router } from "express"; //importamos el router de express para poder crear secciones de rutas
import { ping, msjApi } from "../controllers/index.controllers.js"; //importamos fn 
const router = Router(); //creamos el enrutador

//ruta que devuelve una peticion de una consulta a la bd de manera asincrona
router.get('/', msjApi);
router.get('/ping', ping);



export default router; //exportamos el enrutador con las rutas