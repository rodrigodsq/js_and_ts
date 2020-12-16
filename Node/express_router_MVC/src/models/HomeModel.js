const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true},                         //definindo um campo do tipo string e required
    descricao: String,                                              //definindo um campo do tipo string
});

const HomeModel = mongoose.model('home', HomeSchema);

class Home {

}

module.exports = Home;