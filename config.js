const mongoose = require('mongoose')
MONGODB_URI="mongodb+srv://myemp:SepNn3zRqRB1sThI@cluster0.sq4i9.mongodb.net/mydb?retryWrites=true&w=majority"
mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error!!!!!', e.message)
    })
const db = mongoose.connection
module.exports = db