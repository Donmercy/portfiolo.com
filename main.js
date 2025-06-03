const menus = document.querySelector('.nav-menu')
const darkMode = document.querySelector('.toggle')
const menus_btn = document.querySelector('.menu-bar')
const closeBar = document.querySelector('.close')

menus_btn.addEventListener('click', function(){
      menus.classList.add('active');
});
closeBar.addEventListener('click', function(){
      menus.classList.remove('active');
});



const toggleButton = document.getElementById('toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});

// Set initial mode based on user's preference or default to light mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
} else {
    body.classList.add('light-mode');
}