const menuBtn = document.querySelector('.menu__icon')
const menu = document.querySelector('.header__list')

if (menuBtn && menu) {
   menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active')
      menu.classList.toggle('active')
   })
}

const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchor => {
   anchor.addEventListener('click', e => {
      e.preventDefault();
      
      const blockID = anchor.getAttribute('href').substring(1)

      document.getElementById(blockID).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   })
})

const createSelectSection = (root) => {
   const nav = root.querySelector('nav');

   root.querySelectorAll('.abserve').forEach(s => {
      new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               nav.querySelectorAll('a').forEach(link => link.classList.remove('active'))
               let id = entry.target.getAttribute('id')
               nav.querySelector(`a[href="#${id}"]`).classList.add('active')
            }
         })
      }, {}).observe(s)
   })
}

createSelectSection(document.querySelector('#page'))