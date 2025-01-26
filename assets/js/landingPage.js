// DOM Loader

// document.addEventListener("DOMContentLoaded", () => {
  
// Submit button


const submitButton = document.querySelector(".btn");
submitButton.addEventListener("click", (event) => {
    event.preventDefault();    

// Input Values

const title = document.querySelector("input[placeholder='Title:']").value;
const author = document.getElementById("author").value;
const genre = document.getElementById("genre").value;
const date = document.getElementById("date").value;
const review = document.getElementById("review").value;
const summary = document.getElementById("summary").value;

// Star rating

const starRating = document.querySelector("input[name='rating']:checked");
const rating = starRating ? starRating.value : null;

// Error message
const errorMessage = document.getElementById('error-message');
const submittedMessage = document.getElementById('submitted-message');


if (!title || !author || !genre || !date || !review || !summary) {
    errorMessage.textContent ='Oops! Looks like you missed a spot. Fill out all required fields to keep things moving!';
    errorMessage.style.color = 'red';
    
} else {
    submittedMessage.textContent= 'Entry added!';
    // submittedMessage.style.color = 'green';
};

// Form Data Object

let formData = {
    title: title,
    author: author,
    genre: genre,
    date: date,
    review: review,
    summary: summary,
    rating: rating,
};

// Local Storage

// let formDatas = JSON.parse(localStorage.getItem('formDatas')) || [];
// formDatas.push(formData);
// localStorage.setItem('formDatas', JSON.stringify(formDatas));
storeLocalStorage(formData)
 window.location.href = './myLibrary.html'
console.log(formData)
// Reset inputs



});
