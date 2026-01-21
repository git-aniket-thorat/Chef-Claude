import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "./ai";
  


export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  

  const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((previngredients) => [...previngredients, newIngredient]);
  }

  
  return (
    <main>
      <form action={addIngredient} className="add-ingredients-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">+ Add ingredients</button>
      </form>

      {ingredients.length > 0 && <IngredientsList  ingredients={ingredients}  toggle={getRecipe}/>}
       {recipe && <ClaudeRecipe recipe={recipe}/>}
    </main>
  );
}
