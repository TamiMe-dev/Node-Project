const Recipe=require('../models/Recipe')

exports.addRecipe=async (req,res)=>{
    const recipe = await Recipe.create(req.body)
    res.json(recipe)
}

exports.getAllRecipes= async (req,res)=>{
    try{
         const recipes=await Recipe.find()
          res.json(recipes)
    }catch(error){
        console.error('Failed to get recipes:', error);
        res.status(500).json({ message: 'Failed to get recipes' });
    }
    res.status().json()
}


