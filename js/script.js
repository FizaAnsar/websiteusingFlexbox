burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
rightNav=document.querySelector('.rightNav')
navLists=document.querySelector('.navLists')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('vClassResp');
    navLists.classList.toggle('vClassResp');
    navbar.classList.toggle('hNavResp');


})