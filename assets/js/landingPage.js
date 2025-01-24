// Create const for:
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Get the submit button
  const submitButton = document.querySelector("button[type='submit']");

  // Add an event listener to the submit button
  submitButton.addEventListener("click", (event) => {
      // Prevent the default form submission
      event.preventDefault();

      // Get values from the input fields
      const title = document.querySelector("input[placeholder='Title:']").value;
      const author = document.getElementById("author").value;
      const genre = document.getElementById("genre").value;
      const date = document.getElementById("date").value;
      const review = document.getElementById("review").value;
      const summary = document.getElementById("summary").value;

      // Get selected star rating
      const starRating = document.querySelector("input[name='rating']:checked");
      const rating = starRating ? starRating.value : null; // Handle cases where no star is selected

      // Get checked social media checkboxes

     const errorMessage = document.getElementById('error-message');

      // Validate required fields
      if (!title || !author || !genre || !date || !review || !summary) {
      // Show error message
          errorMessage.textContent ='Oops! Looks like you missed a spot. Fill out all required fields to keep things moving!';
          errorMessage.style.color = 'red';
          return;
      }

      // Create an object to store the collected data
      const formData = {
          title: title,
          author: author,
          genre: genre,
          date: date,
          review: review,
          summary: summary,
          rating: rating,
      };

      // Store the form data in local storage
      let formDatas = JSON.parse(localStorage.getItem('formDatas')) || [];
      formDatas.push(formData);
      localStorage.setItem('formDatas', JSON.stringify(formDatas));

      // Clear input fields after submission
      document.querySelector("form").reset();
      errorMessage.textContent = ''; // Clear error message
  });
});

// - title 
// - author 
// - genre 
// - date posted 
// - platform posted 
// - star rating 
// - review 
// - summary 

// Create storage for website 

// Create object for array with above i 

// Create function to clear input prompts when submitted

// Create error messages

// Set Date completed into date float 


//Star rating
