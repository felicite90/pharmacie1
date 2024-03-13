import mongoose from 'mongoose';




const PORT = 3004 ;
;




mongoose.connect(`'mongodb://localhost:27017'/pharmacie`).then(() => {
    console.log('Connected to database '+ PORT)
    app.listen(PORT, () => {
        console.log('le serveur est lancé sur le port '+ PORT)
    })
}).catch(error => {
    console.log(error);
    throw new Error("Erreur de connexion à la base de donnée!");
    
})