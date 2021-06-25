# Teste_Watson_Calebe
OBSERVAÇÕES:
Programa incompleto, infelizmente não consegui utilizar o Ajax, e nem dar a funcionalidade ao botão para poder ouvir o comentário no Banco de Dados.

1° Através do prompt de comando acessar a pasta de destino do arquivo Teste_Watson_Calebe por exemplo,
"C:\Users\Calebe\Documents\GitHub\Teste_Watson_Calebe\ProgramaWatson>". Utilizar os comandos:  
"dir" = para listar os documentos na pasta.
"cd <nomeDaPasta>" = para entrar na pasta.
"cd .." = para retroceder uma pasta(Caso necessário).

2° instalar todos os pacotes abaixo dentro da pasta:
npm install express --save
npm install nodemon -g
npm install --save mysql2
npm install --save sequelize
npm install --save express-handlebars
npm install --save body-parser
npm install ibm-watson --save

3° Na pasta models, acessar o arquivo "db.js" e trocar o usuário e a senha caso necessário, pelo usuário e senha do seu root do MySQL.

4° Criar o Banco de Dados localizado na pasta "BancoDeDados"

5° Executar o comando: "nodemon main.js" no prompt de comando

6° Acessar a url:"http://localhost:8081" no navegador.

7° É possível cadastrar o comentário, porém para criar o áudio é necessário acessar manualmente o arquivo 
"text_to_speech.js", alterar o campo "text: " da const params para a frase que você quer ouvir, executar o comando "node text_to_speech.js"(Se o nodemon ainda estiver sendo executado apertar "Ctrl", "+" ,"c" para encerrar). Para ouvir o áudio, acessar a mesma pasta raíz "ProgramaWatson" nome do áudio "audio.wav".

