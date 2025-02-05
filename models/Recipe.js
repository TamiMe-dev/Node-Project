const mongoose = require('mongoose')

const RecipeSchema=new mongoose.Schema({
    recipeCategory:String,
    name:String,
    instruction:Array
    
})

module.exports=mongoose.model('recipes',RecipeSchema)