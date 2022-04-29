

//https://www.npmjs.com/package/mysql#introduction
//conexion a la base de donner mais le modul sql n'est pas charger. 
const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "usbw",
  database: "espace_commentaire"
});
document.querySelector('#site_content form button')  // bien remplacer dans le fichier html <input class="submit" part  <button type="submit"
.addEventListener('click',function(event){

    event.preventDefault() //permet de ne pas refresh la page a chaque submite
    let hasError = false
    console.log(event) 

    let commentaireinput = document.getElementById('commentaire')
    console.log(commentaireinput.value)
    console.log(commentaireinput.value.match(/^[\s]{1,150}$/))

    if (commentaireinput.value == ''){
    
        hasError = true 
    }
        else{ 
            hasError = false 
        }
   

    if(!hasError){ 

        //ici on vas créée la requette a envoyer car on a verifier que le champ commentaire n'est pas vide. 
        //INSERT INTO `articles` (`id`, `contenu`) VALUES (NULL, 'd');
        //https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp

       /* var mysql = require('mysql');
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "usbw",
          database: "espace_commentaire"
        });*/
        
        con.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
          var sql = "INSERT INTO `articles` (`id`, `contenu`) VALUES (NULL, ${commentaireinput.value});";
          con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
          });
        });
            
        

    }




























})

