import { config } from "dotenv"; //importamos el archivo .env donde tiene las variables de entorno
config();

//exportamos variables de entorno y en caso de no existir toma por default lo que hemos puesto
export const PORT = process.env.PORT || 3000;

export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_DATABASE = process.env.DB_DATABASE || 'guitarras'


