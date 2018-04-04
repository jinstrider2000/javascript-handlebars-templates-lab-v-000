function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial')
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
