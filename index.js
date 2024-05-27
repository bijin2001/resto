const jsonServer = require('json-server')
const MPServer = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('restaurants.json')
const PORT = 3000 || process.env.PORT

MPServer.use(middleware)
MPServer.use(route)
MPServer.listen(PORT,()=>{
    console.log(`Restaurent Server Started at port ${PORT} and waiting for client request`);
})