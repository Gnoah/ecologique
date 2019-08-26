module.exports = (app) => {

    const produit = require('./../Controlleur/Controlleur');
    app.post('/atelier', produit.create);
    app.post('/particulier/:_id', produit.particulier);
    app.get('/atelier', produit.findAll);

    app.get('/afficheatelier/:_id', produit.getaetelier);
    app.get('/masqueratelier/:_id', produit.masqueratelier);
    app.put('/afficheatelier/:_id', produit.modifatelier);

    app.get('/atelier/:image', produit.lireImage);
    app.delete('/pub/:_id', produit.delete_pub);
    app.put('/atelier/:profilId', produit.modifier);
}