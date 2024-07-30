const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const dotenv=require("dotenv")
const app=express()

app.use(bodyParser.json())

const CategorySchema=new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
})

const CategoryModel=mongoose.model("Category",CategorySchema)



app.get("/categories",async (req,res)=>{
     
    let categories=await CategoryModel.find()
    res.send(categories)
})

app.post("/categories",async (req,res)=>{
     let newCategory= new CategoryModel(req.body)
     await newCategory.save()
     res.send(newCategory)
})

app.delete("/categories/:id", async (req, res) => {
        let id=req.params.id
        let category=await CategoryModel.findByIdAndDelete(id)
        res.send(category)
})


mongoose.connect(process.env.DB_Connection)
.then(res=>{
    console.log("Connected")
})
.catch(err=>{
    console.log("error")
})


app.listen(5050,()=>{
    console.log("5050 portu aktivdir")
})