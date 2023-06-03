var image = [

    "https://logan.nnnow.com/content/dam/nnnow-project/04-nov-2022/SC_Offerpagedesktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/26-march-/ABH_Browfreeze_Homepagebanner_Desktop.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/29-march-2023/JB_Offerpagebanner_Desktop.jpg"
    

]

var i = 0;
function slideshow() {
    document.getElementById("image").src = image[i];
    if (i < image.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("slideshow()", 4000);
}
window.onload = slideshow;
 
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
    