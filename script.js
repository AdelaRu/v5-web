window.addEventListener('scroll', () => {

  const header = document.querySelector('.header');

  if(window.scrollY > 40){
    header.style.boxShadow = '0 10px 40px rgba(0,0,0,.08)';
  }else{
    header.style.boxShadow = 'none';
  }

});

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function(e){

    e.preventDefault();

    const id = this.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior:'smooth'
    });

  });

});

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e)=>{

  e.preventDefault();

  alert('Děkujeme za Vaši poptávku.');

  form.reset();

});