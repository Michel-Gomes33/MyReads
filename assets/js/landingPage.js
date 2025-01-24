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
      const socialMedia = [];
      const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
      checkboxes.forEach((checkbox) => socialMedia.push(checkbox.value));

      // Create an object to store the collected data

      const formData = {
          title,
          author,
          genre,
          date,
          review,
          summary,
          rating,
          socialMedia
      };
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
