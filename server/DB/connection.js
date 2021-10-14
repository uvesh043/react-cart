const mongoose=require('mongoose')
const URL=process.env.URL
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{console.log('Connection saxsis Succesfully with database')}).catch(()=>{
    console.log("Not connected with database");
})