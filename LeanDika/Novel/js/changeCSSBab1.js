const toggle = document.getElementById('NDbutton');
const body = document.querySelector('body');
const header = document.getElementById('header');
const header_dalam = document.getElementById('header_dalam')
const index = document.getElementById('index');
const navigasi = document.getElementById('navigasi');
const Page_Navigation1 = document.getElementById('Page_Navigation1');
const Page_Navigation2 = document.getElementById('Page_Navigation2');
const footer = document.getElementById('footer');
const back1 = document.getElementById('back1');
const back2 = document.getElementById('back2');
const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const navcenter1 = document.getElementById('navcenter1');
const navcenter2 = document.getElementById('navcenter2');
const previousicon1 = document.getElementById('previousicon1');
const previousicon2 = document.getElementById('previousicon2');
const nexticon1 = document.getElementById('nexticon1');
const nexticon2 = document.getElementById('nexticon2');
const pagelist1 = document.getElementById('pagelist1');
const pagelist2 = document.getElementById('pagelist2');
const mainnav1 = document.getElementById('mainnav1');
const mainnav2 = document.getElementById('mainnav2');
const toIndexButton1 = document.getElementById('toIndexButton1');
const toIndexButton2 = document.getElementById('toIndexButton2');
var icon = document.getElementById('icon')
var nexta1 = document.getElementById('nexta1')
var nexta2 = document.getElementById('nexta2')
var backa1 = document.getElementById('backa1')
var backa2 = document.getElementById('backa2')


toggle.addEventListener('click',function () {
    this.classList.toggle('DNbuttonNight');
    if (this.classList.toggle('DNbutton')) {
        body.style.backgroundColor ='rgb(255, 229, 229)';
        body.style.transition = '2s';
        icon.src = "../../img/night-mode.png";
        nexta1.href = "Bab2.html"
        nexta2.href = "Bab2.html"
        
    }else{
        body.style.backgroundColor ='#0f0118';
        body.style.transition = '2s';
        icon.src = "../../img/sunny.png";
        nexta1.href = "Bab2Night.html"
        nexta2.href = "Bab2Night.html"
       
    }
    header.classList.toggle('headerNight');
    header_dalam.classList.toggle('header_dalamNight');
    index.classList.toggle('indexNight');
    navigasi.classList.toggle('navigasiNight');
    Page_Navigation1.classList.toggle('Page_NavigationNight');
    Page_Navigation2.classList.toggle('Page_NavigationNight');
    footer.classList.toggle('footerNight');
    back1.classList.toggle('backNight');
    back2.classList.toggle('backNight');
    next1.classList.toggle('nextNight');
    next2.classList.toggle('nextNight');
    navcenter1.classList.toggle('navcenterNight');
    navcenter2.classList.toggle('navcenterNight');
    previousicon1.classList.toggle('previousiconNight');
    previousicon2.classList.toggle('previousiconNight');
    nexticon1.classList.toggle('nexticonNight');
    nexticon2.classList.toggle('nexticonNight');
    pagelist1.classList.toggle('pagelistNight');
    pagelist2.classList.toggle('pagelistNight');
    mainnav1.classList.toggle('mainnavNight');
    mainnav2.classList.toggle('mainnavNight');
    toIndexButton1.classList.toggle('toIndexButtonNight');
    toIndexButton2.classList.toggle('toIndexButtonNight');

})