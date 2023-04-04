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
var toIndexLink1 = document.getElementById('toIndexLink1')
var toIndexLink2 = document.getElementById('toIndexLink2')


toggle.addEventListener('click',function () {
    this.classList.toggle('DNbuttonLight');
    if (this.classList.toggle('DNbutton')) {
        body.style.backgroundColor ='#0f0118';
        body.style.transition = '2s';
        icon.src = "../../img/sunny.png";
        nexta1.href = "#";
        nexta2.href = "#";
        backa1.href = "Bab3Night.html";
        backa2.href = "Bab3Night.html";
        toIndexLink1.href = "../Index/indexNight.html";
        toIndexLink2.href = "../Index/indexNight.html";
        
        
    }else{
        body.style.backgroundColor ='rgb(255, 229, 229)';
        body.style.transition = '2s';
        icon.src = "../../img/night-mode.png";
        nexta1.href = "#";
        nexta2.href = "#";
        backa1.href = "Bab3.html";
        backa2.href = "Bab3.html";
        toIndexLink1.href = "../Index/index.html";
        toIndexLink2.href = "../Index/index.html";
       
    }
    header.classList.toggle('headerLight');
    header_dalam.classList.toggle('header_dalamLight');
    index.classList.toggle('indexLight');
    navigasi.classList.toggle('navigasiLight');
    Page_Navigation1.classList.toggle('Page_NavigationLight');
    Page_Navigation2.classList.toggle('Page_NavigationLight');
    footer.classList.toggle('footerLight');
    back1.classList.toggle('backLight');
    back2.classList.toggle('backLight');
    next1.classList.toggle('nextLight');
    next2.classList.toggle('nextLight');
    navcenter1.classList.toggle('navcenterLight');
    navcenter2.classList.toggle('navcenterLight');
    previousicon1.classList.toggle('previousiconLight');
    previousicon2.classList.toggle('previousiconLight');
    nexticon1.classList.toggle('nexticonLight');
    nexticon2.classList.toggle('nexticonLight');
    pagelist1.classList.toggle('pagelistLight');
    pagelist2.classList.toggle('pagelistLight');
    mainnav1.classList.toggle('mainnavLight');
    mainnav2.classList.toggle('mainnavLight');
    toIndexButton1.classList.toggle('toIndexButtonLight');
    toIndexButton2.classList.toggle('toIndexButtonLight');

})