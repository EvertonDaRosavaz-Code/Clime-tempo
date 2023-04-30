const router = require('express').Router();
const UserModel = require('./model/modelUser');


//Criar novo usuario
router.post('/', async function CreateUser(req, res){

   try{
        const {email} = req.body;
        const emailDB = await UserModel.findOne({email})
        if(emailDB){
            return res.status(404).send('404');
        }
        await UserModel.create(req.body);
        return res.status(200).json('200');

   }catch(e){
        return res.status(404).json("Houve um erro, tente novamente !");
   }

});



router.post('/read', async function Read (req, res) {
     const { nome, email, password } = req.body;

     try {
          const user          = await UserModel.findOne({ nome });
          const emailuser     = await UserModel.findOne({email});
          const passworduser  = await UserModel.findOne({password});

          if (!user) {
               res.status(404).send('nome incorreto');
               return;
          } if(!emailuser){
               res.status(404).send('Email incorreto');
               return;
          } if(!passworduser){
               res.status(404).send('Senha incorreta');
               return;
          }
          
          res.status(200).send('Tudo certo');
     } 
catch (err) {
  console.error(err);
  res.status(500).send('Erro ao buscar os dados');
}
     
});




module.exports = router