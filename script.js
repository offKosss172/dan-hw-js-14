iFirst = document.getElementById('firstImg')
iSecond = document.getElementById('secondImg');
inputFirst = document.getElementById("inputFirst");
inputSecond = document.getElementById("inputSecond");
btn = document.querySelector('.btn')


iFirst.onclick = function() {
 if(firstImg.classList.contains('fa-eye')){
    firstImg.classList.remove("fa-eye");
	firstImg.classList.add("fa-eye-slash");
    inputFirst.type = "text"; }

else{
    firstImg.classList.remove("fa-eye-slash");
    firstImg.classList.add("fa-eye");
    inputFirst.type = "password";}
}

 iSecond.onclick = function() {
    if(iSecond.classList.contains('fa-eye')){
        iSecond.classList.remove("fa-eye");
        iSecond.classList.add("fa-eye-slash");
        inputSecond.type = "text"; }
   
       else{
        iSecond.classList.remove("fa-eye-slash");
        iSecond.classList.add("fa-eye");
        inputSecond.type = "password";}
    }


    let errorPasword = document.createElement("span");

btn.onclick = function(event){
    event.preventDefault();

    if(inputFirst.value !== "" && inputFirst.value === inputSecond.value ){
    alert('You are welcome')
    }
    else if(inputFirst.value === "")
    { 
        
        errorPasword.className = "error-password";
    inputSecond.parentNode.appendChild(errorPasword);
    errorPasword.innerHTML = "ВВЕДІТЬ БУДЬЛАСКА ПАРОЛЬ";
    delSpanText();
    } else {
       
		errorPasword.className = "error-password";
        inputSecond.parentNode.appendChild(errorPasword);
        errorPasword.innerHTML = "Потрібно ввести однакові значення";
} delSpanText();
}

function delSpanText (){
    setTimeout (function() {
        errorPasword.innerHTML = "";
    }, 1000)
}

btnThema = document.querySelector('.btn2');
body = document.querySelector('body');

// Проверяем, сохранен ли класс active в localStorage
if (localStorage.getItem('activeClass') === 'active') {
  body.classList.add('active');
}

btnThema.addEventListener('click', function() {
  body.classList.toggle('active');
  btnThema.classList.toggle('active');
  
  // Сохраняем состояние класса в localStorage
  localStorage.setItem('activeClass', body.classList.contains('active') ? 'active' : '');
});