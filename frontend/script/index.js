let counter = 1;
    setInterval(function () {
        document.getElementById("radio" + counter).checked = true;
        counter++;
        if (counter > 6) {
            counter = 1;
        }
    }, 2500);

    const subscribeBtn = document.querySelector('#subs button');

    subscribeBtn.addEventListener('click', function () {
        alert('Thank you for subscribing! GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION');
    });




const navLinks = document.querySelectorAll('nav ul li a');


navLinks.forEach(link => {
  link.addEventListener('click', function() {
  
    navLinks.forEach(link => link.classList.remove('active'));
  
    link.classList.add('active');
  });
});


const backToTopButton = document.getElementById('back');


backToTopButton.addEventListener('click', function() {

  window.scrollTo({ top: 0, behavior: 'smooth' });
});