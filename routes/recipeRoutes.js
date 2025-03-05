const express=require('express')
const router=express.Router()

const{addRecipe,getAllRecipes, deleteRecipe}=require('../controllers/recipeController')
router.post('/',addRecipe)
router.get('/',getAllRecipes)
router.delete('/:id', deleteRecipe);

module.exports=router