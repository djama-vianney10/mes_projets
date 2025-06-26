const body = document.body;
 const openSidebar = document.querySelector('#openSidebar');
 const closeSidebar = document.querySelector('#closeSidebar');
 const toggleTheme = document.querySelector('.toggle-theme');
 const sidebar = document.querySelector('.main-sidebar');
 const light = toggleTheme.children[0];
 const dark = toggleTheme.children[1];
 const percentage = document.querySelector('.percentage p');


 openSidebar.addEventListener('click', () => {
         sidebar.style.left = '0%';
 });

 closeSidebar.addEventListener('click', () => {
     sidebar.style.left = '-100%';
 });

 toggleTheme.addEventListener('click', changeTheme)

 function changeTheme(){
     if(body.classList.contains('dark-mode')){
         lightMode();
     } else if(!body.classList.contains('dark-mode')){
         darkMode();
     }
 }


 if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
     darkMode();
 }
    
 function lightMode(){
     body.classList.remove('dark-mode');
     light.classList.add('active');
     dark.classList.remove('active');

 }


 function darkMode(){
     body.classList.add('dark-mode');
     light.classList.remove('active');
     dark.classList.add('active');
}

percentage.forEach((e, i) => {
    let val = parseInt(e.textContent);
    let circle = document.getElementById(`circle${i + 1}`);
    let r = circle.getAttribute('r');
    let circ = Math.PI * 2 * r ;
    let counter = 0;
    let fillValue = (circ * (100 - val)) / 100;
      setInterval(() => {
          if (counter === val) {
             clearInterval();
         } else {
             counter += 1;
             e.innerText = counter + '%';
             circle.style.strokeDashoffset = fillValue;
         }
     }, 1000 / val );
 
  });
