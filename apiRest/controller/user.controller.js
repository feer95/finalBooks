const {pool} = require("/Users/Feer/Desktop/CodeN/MOD. 5/retoFinde/back/database.js")

// PRUEBA
const getUsers = async (request, response) => {
    try {let sql = "SELECT * FROM user";
        let [result] = await pool.query(sql);
        response.send(result);} 
    catch (error) {console.log(error);}
};

//=====================================================

const postUser = async (request, response) => 
{
  try 
  {
    let sql = "INSERT INTO user (name, last_name, email, photo, password) " +
            "VALUES ('" + request.body.name + "', '" +
                        request.body.last_name + "', '" +
                        request.body.email + "', '" +
                        request.body.photo + "', '" +
                        request.body.password + "')";

    console.log(sql);
    let [result] = await pool.query(sql);
    console.log(result);

    if (result.insertId) 
    {
      response.send(String(result.insertId));
    } 
    else 
    {
      response.send("-1");
    }
  } 
  catch (error) 
  {
    console.log(error);
  }
};

const verify = async (request, response) => {
  try {
    const { email, password } = request.body;
    const sql = "SELECT id_user, name, last_name, email, photo FROM user WHERE email = ? AND password = ?";
    const [result] = await pool.query(sql, [email, password]);

    if (result.length > 0) {
      response.send({ error: false, message: "Datos correctos", data: result });
    } else {
      response.send({ error: true, message: "Datos incorrectos", data: result });
    }
  } catch (error) {
    console.log(error);
  }
};
  
  


module.exports = {getUsers, postUser, verify}