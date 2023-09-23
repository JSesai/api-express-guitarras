import { pool } from "../db.js"; //importamos la fn que hace la conexion a la BD

//exportamos fn que obtiene 1 guitarra
export	const obtenerGuitarra = async (peticion, respuesta)=> { 
    const {id} =peticion.params;
    try {
        //query es fn que hace select a la bd  con sintaxis de la biblioteca 
        const [row] = await pool.query("SELECT * FROM guitarras WHERE id_guitarra = ?",[id]);
        row.length ? respuesta.json(row[0]) : respuesta.status(404).send('Guitarra no encontrada');
    } catch (error) {
        return respuesta.status(500).json(
            {
                "mensaje" : "Oye chato ocurrio un error"
            }
        )
    }
}

//exportamos fn que obtiene guitarras
export	const obtenerGuitarras = async (peticion, respuesta)=> { 
    //manejamos el error en caso de que falle algo
    try {
        //query es fn que hace select a la bd  con sintaxis de la biblioteca 
        const [rows] = await pool.query("SELECT * FROM guitarras");
        // console.log(rows);
        respuesta.json(rows);
    } catch (error) {
        respuesta.status(500).json(
            {
                "mensaje" : "Oye chato ocurrio un error"
            }
        )
    }
    
}

//exportamos fn que crea guitarras
export const crearGuitarra = async (peticion, respuesta)=> { 

    //hacemos destructuring de lo que llega en el body de la peticion post 
    const {nombre, valor, descripcion, imagen} = peticion.body;

    try {
        //query es fn que hace insert a la bd  con sintaxis de la biblioteca con params ? se sustituye en eñ mismo orden en el que estan con los datos del array del destructuring previo
        const [rows] = await pool.query("INSERT INTO guitarras (nombre, valor, descripcion, imagen) VALUES (?, ?, ?, ?)", [nombre, valor, descripcion, imagen])
        
        respuesta.send( // retorna onjeto con datos insertados
            {
                id: rows.insertId,
                nombre, 
                valor, 
                descripcion,
                imagen
            }
        );        
    } catch (error) {
        return respuesta.status(500).json(
            {
                "mensaje" : "Oye chato ocurrio un error"
            }
        )
    }
} 

//exportamos fn que elimina guitarras
export const eliminarGuitarra = async (peticion, respuesta)=> {
   try {
       const [resultado] = await pool.query("DELETE FROM guitarras WHERE id_guitarra = ?", [peticion.params.id]);    //hacemos la sentencia con fn query a BD y sustituimos el ?
       
       //resultado tiene un objeto con prop affectedRows el cual tiene uno si se afecto una fila y 0 caso contrario, usamos un ternario para manejar las respuestas, recuerda que el estatus 204 indica que todo ga salido bien pero no envia ninguna respuesta
       resultado.affectedRows > 0 ? respuesta.sendStatus(204) : respuesta.status(404).send("No se pudo eliminar Guitarra");
    
   } catch (error) {
    return respuesta.status(500).json(
        {
            "mensaje" : "Oye chato ocurrio un error"
        }
    )    
   }
}; 

//exportamos fn que actualiza guitarras con param recibido y datos de body
export const actualizarGuitarra = async (peticion, respuesta)=> {
    //guardamos datos enviados en la peticion del cliente 
    const {nombre, valor, descripcion, imagen} = peticion.body; //estrae los datos a actualizar
    const id = peticion.params.id;
    try {
        //hace actualizacion con fn query;  con IFNULL toma el param ?  que se sustituye en el [] segundo parametro de query; si no se envio nada toma los datos que ya existen
        const [resultado] = await pool.query("UPDATE guitarras SET nombre = IFNULL(?, nombre), valor = IFNULL(?, valor), descripcion = IFNULL(?, descripcion), imagen = IFNULL(?, imagen) WHERE guitarras.id_guitarra = ?", [nombre, valor, descripcion, imagen, id])
        resultado.affectedRows === 0 && respuesta.status(404).send("No se pudo actualizar Guitarra");
    
        const [row] = await pool.query("SELECT * FROM guitarras WHERE id_guitarra = ?", [id]);
        respuesta.json(row[0]);
        
    } catch (error) {
        return respuesta.status(500).json(
            {
                "mensaje" : "Oye chato ocurrio un error"
            }
        )
    }
    
} 

