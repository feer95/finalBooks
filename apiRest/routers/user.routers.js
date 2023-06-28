const {Router} = require ("express")
const router = Router();
const usersCtrl = require("../controller/user.controller")
const arrCtrl = require("../controller/bookArray")

router.use((req, res, next) => 
{
    console.log('Petición recibida del cliente:');
    console.log('URL: "' + req.url + '"');
    console.log('METHOD: "' + req.method + '"');
    console.log('USER: "' + req.headers['user-agent'] + '"');
    next();
});

// Libros
router.get('/books', arrCtrl.getAll);
router.get('/books/:id_book', arrCtrl.getBooksId);
router.post('/books', arrCtrl.createBooks);
router.put('/books', arrCtrl.updateBooks);
router.delete('/books', arrCtrl.deleteBooks);

// Usuarios
router.get("/users", usersCtrl.getUsers);

router.post("/register", usersCtrl.postUser);
router.post("/login", usersCtrl.verify);

module.exports = router;



