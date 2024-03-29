/*
Exemplo simples de um serviço web para inserção e listagem de dados em um
SGBD relacional, utilizando typeORM.
Autor: Fabrício G. M. de Carvalho, Ph.D
*/

/* importando o express */
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

/* Em uma mesma máquina, aplicações web diferentes devem ser executadas
em portas diferentes.*/
const port = 5004;

/* importando o modelo */
import { Livro} from "./models/model"
/* importanto o data source inicializado */
import { Service} from "./models/services"



/* Configuração para leitura de parâmetros em requisição do tipo post em form */
app.use(bodyParser.urlencoded({extended: false}));
/* Habilitação de requisições partindo de outras aplicações */
app.use(cors({
    oringin: '*',
    credentials: true
})); 

/* Inicializando a fonte de dados via serviço: */
var service = new Service();
service.start();

/* Criação das rotas para o serviço. */
app.post('/add', addProjectHandler);

/* Execução do servidor */
app.listen(port, listenHandler);

/* Tratadores de requisição */



/* Tratador de adição */
async function addProjectHandler(req,res){
    console.log("Requisição de inserção recebida.."); // Para debug somente.
    let novo_livro = new Livro();  
    for(let key in req.body){
        novo_livro[key] = req.body[key];
    } 
    await service.insert(novo_livro);
    let novo_livro_i = JSON.stringify(novo_livro);
    res.setHeader('Content-Type', 'application/json');
    res.end(novo_livro_i);     
}


function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}