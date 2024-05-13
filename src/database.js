import mongoose from "mongoose";

mongoose.connect("mongodb+srv://tavito:andajaran@cluster0.n6cfiqy.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conectado a la BD"))
    .catch((error) => console.log("F ", error))