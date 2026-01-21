import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const [recipeShown, setRecipeShown] = React.useState(false)
    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
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

      {ingredients.length > 0 && <IngredientsList listItems ={ingredientsListItems} length={ingredients.length} />
      }
       {recipeShown && <ClaudeRecipe/>}
    </main>
  );
}
