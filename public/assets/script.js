const body = document.querySelector('body');
    sidebar = body.querySelector('.slider');
    toggle = body.querySelector('.toggle');
    searchBtn = body.querySelector('.search-box');
    modeSwitch = body.querySelector('.toggle-switch');
    sidebar = body.querySelector('.slider');

    toggle.addEventListener("click",()=>{
        sidebar.classList.toggle('close')
    })
    
    modeSwitch.addEventListener("click",()=>{
        body.classList.toggle('dark')
    })




