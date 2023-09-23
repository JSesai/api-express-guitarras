import { Router } from "express"; //importamos el router de express para poder crear secciones de rutas
import { obtenerGuitarra, obtenerGuitarras, crearGuitarra, actualizarGuitarra, eliminarGuitarra  } from "../controllers/guitarras.controllers.js"; //importamos fns que obtiene, crea, actualiza y elimina guitarras

//creamos el enrutador
const router = Router();

//RUTAS 

router.get('/guitarras/:id', obtenerGuitarra); //ruta guitarras, obtiene una guitarra con el id que pasa por url

router.get('/guitarras', obtenerGuitarras); //ruta guitarras, obtiene guitarras 

router.post('/guitarras', crearGuitarra); //ruta guitarras, crea guitarras

router.patch('/guitarras/:id', actualizarGuitarra); //ruta guitarras, actualiza guitarras

router.delete('/guitarras/:id', eliminarGuitarra ); //ruta guitarras, elimina guitarra

//exportamos el enrutador con las rutas
export default router;