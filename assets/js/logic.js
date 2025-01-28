function readLocalStorage(){
    return JSON.parse(localStorage.getItem('bookReview')) || []
    
};

function storeLocalStorage(currentPost) {
    let oldPost = readLocalStorage()
    oldPost.push(currentPost)
    localStorage.setItem('bookReview', JSON.stringify(oldPost));

}

let redirectURL = '';

const redirectPage = function(url) {
    redirectURL = url;
    location.assign(url);
};