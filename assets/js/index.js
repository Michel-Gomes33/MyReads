// Variable to select form elements
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent page reload
    console.log('submit starts')
    // Input Values

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const date = document.getElementById('date').value;
    const review = document.getElementById('review').value;
    const summary = document.getElementById('summary').value;

    // Error message
    console.log('value is ',title)

    const errorMessage = document.getElementById('error-message');

    // Star rating

    const starRating = document.querySelector("input[name='rating']:checked");
    const rating = starRating ? starRating.value : null;


    // Error or success messages

   if (title === '' || author  === '' || genre === '' || date === '' || review === '' || summary === '' || rating === null) {
    errorMessage.textContent ='Oops! Looks like you missed a spot. Fill out all required fields to keep things moving!';
    errorMessage.style.color = 'red';
   } else {

    let bookReview = {
        title: title,
        author: author,
        genre: genre,
        date: date,
        review: review,
        summary: summary,
        starRating: rating 
    };

    console.log('bookreview data log',bookReview)
    // localStorage.setItem('bookReview',JSON.stringify(bookReview))
    storeLocalStorage(bookReview)
    redirectPage("myLibrary.html")
   }
    
}); 

