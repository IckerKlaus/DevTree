import colors from 'colors' //Dependencias
import server from './server' //Archivos

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(colors.blue.bold.italic(`Servidor Funcionando en el puerto: ${port}`))
})