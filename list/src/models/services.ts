import { MariaDBDataSource } from "./data_source";
import {Livro} from "./model";

export class Service{    
    start(){       
            MariaDBDataSource.initialize().then( ()=>{
                console.log("Inicializada a fonte de dados...");
            }).catch((err)=>{
                console.error("Erro de inicialização da fonte de dados!!");
            }) 
    }
    async listAll(){
       let list = await MariaDBDataSource.manager.find(Livro);
       return list;
    }
    
}

