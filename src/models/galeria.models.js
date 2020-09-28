const mongoose = require('mongoose')
const {Schema} = mongoose

const galeriaSchema = new Schema({
    pertenece: String,
    titulo: String,
    descripcion: String,
    usuario: String,
    imageUrl: String,
    ubicacion: String
})

galeriaSchema.methods.setImgUrl = function setImgUrl(filename){
    const url = 'https://crud-galeria-imagenes.herokuapp.com/'
    this.imageUrl = url+'public/'+filename
}

module.exports = mongoose.model('Galeria', galeriaSchema)