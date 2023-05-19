# Persistencia-de-dados
Repositório para persistência de dados da aplicação

## Requisitos
Certifique-se de ter instalado o Node.js e o MariaDB em sua máquina. Se nao tiver instalado os links então a seguir:<br>
[link da instalação node.js](https://nodejs.org/en/download)<br>
[link da instalação mariadb](https://mariadb.org/download/?t=mariadb&p=mariadb&r=11.1.0&os=Linux&cpu=x86_64&pkg=tar_gz&i=systemd&m=fder)<br>

## Como rodar 
1 - Entre na raiz do projeto.<br>
2 - Execute o comando "npm install" para instalar as 3- dependências do projeto.<br>
3 - Crie uma database com o nome "biblioteca" utilizando o seguinte comando: "CREATE DATABASE biblioteca;".<br>
4 - Encontre o arquivo "data_source.ts" no projeto e configure-o com os dados corretos do seu banco de dados.<br>
5 - Após configurar o arquivo "data_source.ts", execute o comando "npm start" para iniciar o projeto.<br>
