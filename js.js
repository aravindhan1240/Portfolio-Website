//Show Menu
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',() =>{
            nav.classList.toggle('show')
        });
    }
}
showMenu('nav_toggle','nav_menu')

//Active and remove active
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))
    function linkAction(){
        navLink.forEach(n => n.classList.remove('active'))
        this.classList.add('active')

        const navMenu = document.getElementById('nav_menu')
        navMenu.classList.remove('show')


}
navLink.forEach(n => n.addEventListener('click',linkAction))

//Conact
function myfunction(){
    var name = document.forms['myname']['fname'].value;
    var numb = document.forms['myname']['lname'].value;
    var mess = document.forms['myname']['mg'].value;

    if(name=="" || name=="" ){
        document.getElementById("boxs").innerHTML = "Enter your Name";
        return false;
    }
    if(numb=="" || numb==""){
        document.getElementById("boxs").innerHTML = "Enter your Email";
        return false;
    }
    if(mess=="" || mess==""){
        document.getElementById("boxs").innerHTML = "Enter Message";
        return false;
    }
    if(name !='' && numb !='' && mess !=''){
        alert("Send You Message..")
        
    }

}
