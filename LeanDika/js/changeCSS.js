const toggle = document.getElementById('NDbutton');
const body = document.querySelector('body');
const header = document.getElementById('header');
const header_dalam = document.getElementById('header_dalam');
const navigasi = document.getElementById('navigasi');
const content_section = document.getElementById('content-section'); 
const button = document.getElementById('button');
const alertid = document.getElementById('alert');
var linkbutton = document.getElementById('linkbutton');

toggle.addEventListener('click',function(){
    this.classList.toggle('DNbuttonNight');
    if(this.classList.toggle('DNbutton')){
        body.style.backgroundColor ='rgb(255, 229, 229)';
        linkbutton.href = "Index/index.html";
        body.style.transition = '2s';

    }else{
        body.style.backgroundColor ='#2c0049';
        linkbutton.href = "Index/indexNight.html";
        body.style.transition = '2s';

    }
    header.classList.toggle('headerNight');
    header_dalam.classList.toggle('header_dalamNight');
    navigasi.classList.toggle('navigasiNight');
    content_section.classList.toggle('content-sectionNight')
    button.classList.toggle('buttonNight');
    alertid.classList.toggle('alertNight');
})