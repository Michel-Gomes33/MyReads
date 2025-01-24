//DOMloading code.
// document.addEventListener("DOMContentLoaded", () => {
//     const bookCardsContainer = document.querySelector("#book-cards");

//     // Retrieve book data from LocalStorage
//     const books = JSON.parse(localStorage.getItem("books")) || [];

    document.addEventListener("DOMContentLoaded", () => {
        // Example function to create and add a card dynamically
        function addCard(data) {
            const container = document.getElementById("card-container");
    
            // Create the card element
            const card = document.createElement("div");
            card.className = "card";
    
            // Add event listeners for hover and click
            card.addEventListener("mouseenter", () => {
                card.classList.add("hovered");
            });
            card.addEventListener("mouseleave", () => {
                card.classList.remove("hovered");
            });
            card.addEventListener("click", () => {
                card.classList.toggle("clicked");
            });
    
            // Card content
            card.innerHTML = `
                <img src="${data.thumbnail}" alt="${data.title}" />
                <div class="card-title">${data.title}</div>
                <div class="card-rating">${"⭐".repeat(data.rating)}</div>
                <div class="card-summary-short">${data.summary.split(" ")[0]}...</div>
                <div class="card-summary">${data.summary}</div>
            `;
    
            // Append to the container
            container.appendChild(card);
        }
    
        // Example usage with dynamic data
        const books = [
            {
                thumbnail: "https://via.placeholder.com/150",
                title: "Book Title 1",
                rating: 4,
                summary: "This is the first line of the book's summary. It is intriguing and compelling.",
            },
            {
                thumbnail: "https://via.placeholder.com/150",
                title: "Book Title 2",
                rating: 5,
                summary: "Another exciting book with an interesting plot and characters.",
            },
        ];
    
        // Generate cards dynamically
        books.forEach(book => addCard(book));
    });
       

//Populate cards    

//filter by const

// animation for cards

// hover trigger
