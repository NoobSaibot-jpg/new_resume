import "./import/modules";


let theme = document.querySelector('main'),
      btnFirst = document.querySelector('.awards'),
      btnSecond = document.querySelector('.about'),
      btnTrid = document.querySelector('.portfolio'),
      btnFour = document.querySelector('.contacts'),
      btnFive = document.querySelector('.skils');
const folders = document.querySelectorAll('.folder');


btnFirst.addEventListener('click', ()=>{
    theme.classList.add('active_first');
    theme.classList.remove('active_second', 'active_trid', 'active_four');
    folders.forEach(i =>{
        if (i.classList.contains('folder__active')){
            i.classList.remove('folder__active')
            i.classList.add('disable')
        }
    })
    folders[0].classList.add('folder__active')
});

btnSecond.addEventListener('click', ()=>{
    theme.classList.add('active_second');
    theme.classList.remove('active_first', 'active_trid', 'active_four');
    folders.forEach(i =>{
        if (i.classList.contains('folder__active')){
            i.classList.remove('folder__active')
            i.classList.add('disable')
        }
    })
    folders[1].classList.add('folder__active')
});

btnTrid.addEventListener('click', ()=>{
    theme.classList.remove('active_second', 'active_first', 'active_four');
    theme.classList.add('active_trid');
    folders.forEach(i =>{
        if (i.classList.contains('folder__active')){
            i.classList.remove('folder__active')
            i.classList.add('disable')
        }
    })
    folders[2].classList.add('folder__active')
});

btnFour.addEventListener('click', ()=>{
    theme.classList.remove('active_second', 'active_trid', 'active_first');
    theme.classList.add('active_four');
    folders.forEach(i =>{
        if (i.classList.contains('folder__active')){
            i.classList.remove('folder__active')
            i.classList.add('disable')
        }
    })
    folders[3].classList.add('folder__active')
});

btnFive.addEventListener('click', ()=>{
    theme.classList.remove('active_first', 'active_trid', 'active_four');
    theme.classList.add('active_second');
    folders.forEach(i =>{
        if (i.classList.contains('folder__active')){
            i.classList.remove('folder__active')
            i.classList.add('disable')
        }
    })
    folders[4].classList.add('folder__active')
});





