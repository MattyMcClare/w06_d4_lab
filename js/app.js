document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form');

const handleFormSubmit = function(e){
  e.preventDefault();
  //title
  const newTitle = document.createElement('p');
  const resultTitle = e.target.title.value;
  newTitle.textContent = resultTitle;
  //author
  const newAuthor = document.createElement('p');
  const resultAuthor = e.target.author.value;
  newAuthor.textContent = resultAuthor;
  //category
  const newCategory = document.createElement('p');
  const resultCategory = e.target.category.value;
  newCategory.textContent = resultCategory;
  //end
  const newBook = document.createElement('div');
  newBook.appendChild(newTitle);
  newBook.appendChild(newAuthor);
  newBook.appendChild(newCategory);
  const list = document.querySelector('#reading-list');
  list.appendChild(newBook);
  form.reset();
};

form.addEventListener('submit', handleFormSubmit)
});
