const http = require("http"); //requisita o módulo natvo http <-ESTUDAR

const server = http.createServer((request, response) => {


    switch (request.url) {
        case '/users':
            switch (request.method) {
                case 'GET':
                    response.write("Listar Usuarios")
                    break;

                case 'POST':
                    response.write("Cadastrar Usuarios")
                    break;
                default:
                    break;
            }

            break;
        case '/':
            response.write("Node Server!")
            break;
        default:
            response.write("Error - Not Found")
            break;
    }

    console.log("url", request.url) //Observe os navegadores sempre fazem uma requisição extra para encontrar o favicon
    console.log("method", request.method)

    response.end()

}); //essa é a função que vai 'escutar' todas as requests da aplicação

server.listen(3000)