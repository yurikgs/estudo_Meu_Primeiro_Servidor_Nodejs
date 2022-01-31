const http = require("http"); //requisita o módulo natvo http <-ESTUDAR

const server = http.createServer((request, response) => {

    if (request.method == 'GET') {

        switch (request.url) {
            case '/':
                response.write("Welcome to Hcode!")
                break;
            case '/about':
                response.write("About Us")
                break;
            default:
                response.write("Error - Not Found")
                break;
        }
    }

    console.log("url", request.url) //Observe os navegadores sempre fazem uma requisição extra para encontrar o favicon
    console.log("method", request.method)

    response.end()

}); //essa é a função que vai 'escutar' todas as requests da aplicação

server.listen(3000)