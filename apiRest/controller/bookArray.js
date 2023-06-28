const router = require("../app");
const Book = require('../models/bookModel.js');
const {pool} = require('/Users/Feer/Desktop/Librería Completa/apiRest/database.js')


async function getAll(request, response) 
{
    try 
    {
      let idUsuario = request.query.id_user;
      let sql = 'SELECT * FROM book WHERE id_user = ?';
      let [result] = await pool.query(sql, [idUsuario]);
      let respuesta = { codigo: 200, data: result };
      console.log(data);
      response.send(respuesta);
    } 
    catch (error) 
    {
      console.log(error);
      let respuesta = { codigo: 500, error: 'Error al obtener los libros' };
      response.send(respuesta);
    }
}
  

function getBooksId(request, response) 
{
    let idLibro = request.params.id_book;
    let libroEncontrado = books.find((libro) => libro.id_book == idLibro);

    if (idLibro != null) 
    {
        respuesta = { error: true, message: "Encontrado!", data: libroEncontrado };
        response.send(respuesta);
    } 
    else 
    {
        respuesta = { error: false, message: 'No existe!', data: libroEncontrado };
        response.send(respuesta);
    }
};

function createBooks(request, response) 
{
    let newBook = new Book(request.body.id_book, request.body.id_user ,request.body.title, request.body.type, request.body.author, request.body.price, request.body.photo);
    if (newBook != null) 
    {
        books.push(newBook);
        let respuesta = {error: true, message: "Añadido!", data: books};
        response.send(respuesta);
    } 
    else 
    {
        let respuesta = {error: false, message: "No añadido!", data: books};
        response.send(respuesta);
    }
    
};

function updateBooks(request, response) 
{
    let idLibro = request.body.id_book;
    let i = books.findIndex((book) => book.id_book === idLibro);

    if (idLibro != null) 
    {
        books[i].title = request.body.title;
        books[i].type = request.body.type;
        books[i].author = request.body.author;
        books[i].price = request.body.price;
        books[i].photo = request.body.photo;
        books[i].id_user = request.body.id_user;

        respuesta = { error: true, message: "Editado!", data: books };
        response.send(respuesta);
    } 
    else 
    {
        respuesta = { error: false, message: "No lo encontramos!", data: books };
        response.send(respuesta);
    }
};


function deleteBooks(request, response) 
{
    let libroFuera = request.body.id_book;
    let libroEncontradoIndex = books.findIndex(book => book.id_book === libroFuera);
  
    if (libroEncontradoIndex >= 0) 
    {
      books.splice(libroEncontradoIndex, 1);
      respuesta = { error: true, message: "Eliminado!", data: books };
    } 
    else 
    {
      respuesta = { error: false, message: "No lo encontramos!", data: books };
    }
  
    response.send(respuesta);
}
  

module.exports = { getAll, getBooksId, createBooks, updateBooks, deleteBooks};
