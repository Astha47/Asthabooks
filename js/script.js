const menu = document.getElementById("menu-label");
const sidebar = document.getElementsByClassName("sidebar")[0];
const listItemsActive = document.getElementsByClassName("list-item-active")[0];


menu.addEventListener('click', function() {
    sidebar.classList.toggle('hide');
    listItemsActive.classList.toggle('hide');

    console.log('ok')
})