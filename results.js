document.addEventListener('DOMContentLoaded', function() {

    const fname = localStorage.getItem('fname');
    const lname = localStorage.getItem('lname');
    const email = localStorage.getItem('email');
    const age = localStorage.getItem('age');
    const fav = localStorage.getItem('color');
    const feedback = localStorage.getItem('feedback');


    document.getElementById('resultfName').textContent = fname;
    document.getElementById('resultlName').textContent = lname;
    document.getElementById('resultEmail').textContent = email;
    document.getElementById('resultAge').textContent = age;
    document.getElementById('resultCol').textContent = fav;
    document.getElementById('resultFeedback').textContent = feedback;


    localStorage.clear();
});