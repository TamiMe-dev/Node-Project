const express=require('express')
const router=express.Router()

const{addRecipe,getAllRecipes}=require('../controllers/recipeController')
router.post('/',addRecipe)
router.get('/',getAllRecipes)
