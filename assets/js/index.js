"use strict";

function check() {
    const inputName = document.getElementById('name');
    const inputGenderMan = document.getElementById('man');
    const inputGenderWoman = document.getElementById('woman');
    const inputData = document.getElementById('date');
    const inputPassword = document.getElementById('password');
    const inputTel = document.getElementById('telephone');

    document.getElementById('errorMessage').innerHTML = "";

    if (inputName.value == "") {
        document.getElementById('errorMessage').innerHTML += "Вы не указали имя!<br>";
    }
    if (inputGenderMan.checked == false && inputGenderWoman.checked == false) {
        document.getElementById('errorMessage').innerHTML += "Вы не указали пол!<br>";
    } 
    if (inputData.value == "") {
        document.getElementById('errorMessage').innerHTML += "Вы не указали дату рождения!<br>";
    } 
    if (inputPassword.value == "") {
        document.getElementById('errorMessage').innerHTML += "Вы не указали пароль!<br>";
    } 
    if (inputPassword.value.length >= 1 && inputPassword.value.length < 5) {
        document.getElementById('errorMessage').innerHTML += "Пароль слишком короткий!<br>";
    } 
    if (inputTel.value == '') {
        document.getElementById('errorMessage').innerHTML += "Вы не указали номер телефона!<br>";
    } 
    if (inputTel.value.length >= 1 && inputTel.value.length < 11) {
        document.getElementById('errorMessage').innerHTML += "Вы не указали номер телефона неправильно!<br>";
    } 
    if (document.getElementById('errorMessage').innerHTML == '') {
        alert(`Добро пожаловать, ${inputName.value}!`)
    }
}
