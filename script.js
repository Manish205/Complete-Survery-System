document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.getElementById('surveyForm');
    
    surveyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const fav = document.getElementById('color').value;
        const feedback = document.getElementById('feedback').value;

        localStorage.setItem('fname', fname);
        localStorage.setItem('lname', lname);
        localStorage.setItem('email', email);
        localStorage.setItem('age', age);
        localStorage.setItem('color', fav);
        localStorage.setItem('feedback', feedback);

        window.location.href = 'results.html';
    });
});