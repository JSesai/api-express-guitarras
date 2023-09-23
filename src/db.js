import {createPool} from 'mysql2/promise' //fn debiblioteca de mysql2 que permite hacer la conexion de manera asincrona
import { DB_PORT, DB_HOST,DB_DATABASE, DB_USER, DB_PASSWORD } from './config.js'
//exportamos objeto con la informacion para la conexion a la bd con variables importadas anteriormente
export const pool = createPool(
    { 
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        port: DB_PORT,
        database: DB_DATABASE
    }
)