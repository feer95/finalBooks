const router = require("../app");
const Book = require('../models/bookModel.js');

// RETO 2 ======================

let libroActual = null;

function getBook(request, response) 
{
    let respuesta = { codigo: 200, data: libroActual }; 
    response.send(respuesta);
}

function createBook(request, response) 
{
    
    if (libroActual === null) 
    {
        let nuevoLibro = new Book(request.body.title, request.body.genre, request.body.author, request.body.price, request.body.imageUrl, request.body.id_book, request.body.id_user);
        libroActual = nuevoLibro;
        respuesta = { error: false, message: 'Creado', data: libroActual };
        response.send(respuesta);
    } 
    else 
    {
        respuesta = { error: true, message: 'Faltan campos', data: libroActual };
        response.send(respuesta);
    }
}
  

function updateBook(request, response) 
{
    
  
    if (libroActual != null) 
    {
        libroActual.title = request.body.title;
        libroActual.genre = request.body.genre;
        libroActual.author = request.body.author;
        libroActual.price = request.body.price;
        libroActual.imageUrl = request.body.imageUrl;
        libroActual.id_book = request.body.id_book;
        libroActual.id_user = request.body.id_user;
    
        respuesta = { error: false, libro: libroActual, message: "Libro editado!", data: libroActual };
        response.send(respuesta);
    } 
    else 
    {
        respuesta = { error: true, message: "No encontrado", data: libroActual };
        response.send(respuesta);
    }
}
  

function deleteBook(request, response) 
{
  
    if (libroActual != null) 
    {
        libroActual = null;
        respuesta = { error: false, message: "Se borró!", data: libroActual };
        response.send(respuesta);
    } 
    else 
    {
        respuesta = { error: true, message: "No encontrado", data: libroActual };
        response.send(respuesta);
    }
}
  

module.exports = { getBook, createBook, updateBook, deleteBook };

