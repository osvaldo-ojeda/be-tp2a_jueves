const http= require("http")

const server=http.createServer((peticion, respuesta)=>{
    respuesta.end("<h1>hola</h1>")
})

server.listen(8080, ()=>{
    console.log("servidor ok")
})
