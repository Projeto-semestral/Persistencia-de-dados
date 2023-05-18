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
const port = 5007;

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
app.get('/list', listProjectHandler);

/* Execução do servidor */
app.listen(port, listenHandler);

/* Tratadores de requisição */

/* Tratador de listagem */
async function listProjectHandler(req, res){ 
    console.log("Requisição de listagem recebida."); //Para debug somente.
    let livros = await service.listAll();  
    let list_livro = JSON.stringify(livros);
    res.setHeader('Content-Type', 'application/json');
    res.end(list_livro);     
}


function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}