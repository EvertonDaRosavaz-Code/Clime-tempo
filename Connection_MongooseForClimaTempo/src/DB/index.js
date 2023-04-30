const mongoo = require('mongoose');
const key = `98057640fbo`;
const DB = 'Cadastro-User-Clima';
const ulr = `mongodb+srv://evertontidarosavaz:${key}@cluster0.zxni5sm.mongodb.net/${DB}`;

async function connect(){
    await mongoo.connect(ulr)
    .then(()=>{
        console.log('Conectado ao mongo');
    }).catch(()=>{
        console.log('Erro ao se conectar');
    })
}

module.exports = connect();
