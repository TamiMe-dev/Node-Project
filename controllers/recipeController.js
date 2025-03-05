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
exports.deleteRecipe=async (req,res)=>{
    const {id} =  req.params
    console.log(id);
    try{
       const deleteRecipe=await Recipe.findOneAndDelete({_id:id})
           if(!deleteRecipe)
            return res.status(404).json({message:"Recipe not found"})
    res.json({message:'recipe deleted seccesfuly'})
    }catch(error){
        console.error('faild to delete recipe',error);
        res.status(500).json({message:"faild to delete recipe"})
    }
}







