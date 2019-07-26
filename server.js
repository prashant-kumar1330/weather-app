const express= require('express');
const app= express();
app.use(express.json())
app.set('view engine','hbs')
app.get('/',(req,res)=>{
    res.render('index');
})
app.listen(4848,()=>{
    console.log('working on port 4848')
})