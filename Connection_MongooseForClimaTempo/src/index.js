const app = require('./app');
require('./DB');



const PORT = 4001 || 5500;
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});