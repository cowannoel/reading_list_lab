document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);


});



const handleFormSubmit = function () {
  const readingList = document.querySelector("#reading-list")
  event.preventDefault();
  const newTitleItem = document.createElement('li');
  newTitleItem.textContent = event.target.title.value
  readingList.appendChild(newTitleItem);


  const newAuthorItem = document.createElement('li');
  newAuthorItem.textContent = event.target.author.value
  readingList.appendChild(newAuthorItem);


  const newCategoryItem = document.createElement('li');
  newCategoryItem.textContent = event.target.category.value
  readingList.appendChild(newCategoryItem);

  event.target.reset();
}
