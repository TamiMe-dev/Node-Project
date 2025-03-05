const express=require('express')
const router=express.Router()

const{addRecipe,getAllRecipes, deleteRecipe,getRecipeById}=require('../controllers/recipeController')
router.post('/',addRecipe)
router.get('/',getAllRecipes)
router.delete('/:id', deleteRecipe);
router.get('/:id',getRecipeById)

module.exports=router