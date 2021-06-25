# Teste_Watson_Calebe
OBSERVAÇÕES:
1° Programa incompleto, infelizmente não consegui utilizar o Ajax, e nem dar a funcionalidade ao botão para poder ouvir o comentário no Banco de Dados.

1° Através do prompt de comando acessar a pasta de destino do arquivo Teste_Watson_Calebe por exemplo,
"C:\Users\Calebe\Documents\GitHub\Teste_Watson_Calebe\TesteWatsonCalebe>". Utilizar os comandos:  
"dir" = para listar os documentos na pasta.
"cd <nomeDaPasta>" = para entrar na pasta.
"cd .." = para retroceder uma pasta.

2° instalar todos os pacotes abaixo dentro da pasta:
npm install express --save
npm install nodemon -g
npm install --save mysql2
npm install --save sequelize
npm install --save express-handlebars
npm install --save body-parser
npm install ibm-watson --save

3° Na pasta models, acessar o arquivo "db.js" e trocar o usuário e a senha caso necessário, pelo usuário e senha do seu root do MySQL.

4° Executar o comando: "nodemon main.js" no prompt de comando

5° Acessar no navegador a url:"http://localhost:8081".

6° É possível cadastrar o comentário, porém para ouvir o aúdio é necessário acessar manualmente o arquivo 
"text_to_speech.js", e alterar o campo "text: " da const params. Para ouvir o áudio é necessarário executar no prompt de comando o comando "node text_to_speech.js" (Se o nodemon ainda estiver sendo executado apertar "Ctrl" + "+" + "c") e o programa irá gerar um arquivo na mesma pasta com o áudio.

