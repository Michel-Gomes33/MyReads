let bookReview= readLocalStorage();

// cardContainer const

//Card creation function

//Card eventlistener to expand

// render card function

// expanded card function

//create expanded card content

//close button

//close function

//card editing function

//save changes

//replace content

//filter
    console.log(bookReview)
    let mainEl = document.querySelector('main')

function createCard(el, textInfo, appendEl) {
    let createdElement = document.createElement(el)
    createdElement.textContent = textInfo 
    appendEl.appendChild(createdElement)
    return createdElement
}

function handleNoData() {
    createCard('h2', "No Blog posts yet...", mainEl)
}

function renderBlogList(){
    if (bookReview.length === 0) {
        handleNoData();
    } else {
        for (let i = 0; i < bookReview.length; i++) {
            let parent = createCard("article", null, mainEl);
            createCard("h2", bookReview[i].title, parent);  
            createCard("blockquote", bookReview[i].genre, parent);  
            createCard("h3", bookReview[i].starRating, parent); 
            createCard("p", bookReview[i].date, parent);  
            createCard("p", bookReview[i].review, parent);  
            let summaryElement = createCard("p", bookReview[i].summary, parent); 
            summaryElement.classList.add("summary");  
            parent.classList.add("card");
        }
    }
}
renderBlogList();