import app from "./app.js";
import { PORT } from "./config.js";
app.listen(PORT); //lo ponemos a escucha del puerto 
console.log('servidor corriendo en puerto', PORT)

