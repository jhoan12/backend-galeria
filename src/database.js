const mongoose=require('mongoose')

const URI = ('mongodb+srv://admingaleria:oOwFR4WoxPquGoEZ@cluster0.c9gvw.mongodb.net/crudgaleriaimagenes?retryWrites=true&w=majority')

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
})
    .then(db=>console.log('db conectada'))
    .catch(error=>console.log(error))

module.exports=mongoose;