let myEntries = localStorage.getItem(formDatas)
console.log(myEntries)
//     let mainEl = document.querySelector('main')
// // TODO: Create a function that builds an element and appends it to the DOM
// function createCard(el, textInfo, appendEl) {
//     let createdElement = document.createElement(el)
//     createdElement.textContent = textInfo 
//     appendEl.appendChild(createdElement)
//     return createdElement
// }
// // TODO: Create a function that handles the case where there are no blog posts to display
// function handleNoData() {
//     createCard('h2', "No Blog posts yet...", mainEl)
// }
// // TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// function renderBlogList(){
//     if (blogPosts.length === 0) {
//         handleNoData()
//     } else {
//         for( let i = 0 ; i < blogPosts.length; i++ ) {
//             let parent = createCard("article", null, mainEl);
//             createCard("h2", blogPosts[i].title, parent)
//             createCard("blockquote", blogPosts[i].content, parent)
//             createCard("p", blogPosts[i].username, parent)
//             parent.classList.add("card")
//         }
//     }
// }
// // TODO: Call the `renderBlogList` function
// renderBlogList()













// // DOM Loader




// document.addEventListener("DOMContentLoaded", () => {
   

// function addCard(formDatas) {
//     const container = document.getElementById('inputContainer');
//     const card = document.getElementById('div');
//     card.className = "card";
//     card.innerHTML = `
//             <img src="${data.thumbnail}" alt="${data.title}" />
//             <div class="card-title">${data.title}</div>
//             <div class="card-rating">${"⭐".repeat(data.rating)}</div>
//             <div class="card-summary-short">${data.summary.split(" ")[0]}...</div>
//             <div class="card-summary">${data.summary}</div>
//         `;

//         // Append to the container
//         container.appendChild(card);
//     }
// }
// })