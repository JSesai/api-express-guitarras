import { response } from "express";
import { pool } from "../db.js"; //importamos la fn que hace la conexion a la BD

export const ping = async (peticion, respuesta)=>{ //fn emplea callback asincrona
    respuesta.jsonp({"Resultado":"Pong"}); //retorna el resultado en formato json
}

export const msjApi = async (peticion, respuesta) =>{
    respuesta.send('Api de Guigtarras con express');
}