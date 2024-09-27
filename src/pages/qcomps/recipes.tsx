
export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

export default function RecipeList() {
  const recipesItems = recipes.map(recipe =>
      <li>
        <h1>{recipe.name}</h1>
        <ul>
          {[...recipe.ingredients].map((ingredient, index) => (
              <li>{ingredient}</li>
          ))}
        </ul>
      </li>
  );
  return (
    <div>
      <h1>Recipes</h1>
      <ul>{recipesItems}</ul>
    </div>
  );
}