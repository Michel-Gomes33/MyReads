document.addEventListener('DOMContentLoaded', function() {
    const redirectPage = function(url) {
        location.assign(url);
    };

    const backButton = document.querySelector('#back');
    backButton.addEventListener('click', function() {
        redirectPage('./index.html');
    });
});