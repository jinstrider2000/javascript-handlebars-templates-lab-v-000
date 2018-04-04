function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial',document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', (ingredient) => {
    return `${ingredient.name}`;
  });
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
