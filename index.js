//TASK 1
alert("Колірна роздільна здатність екрану: " + screen.colorDepth + " біт на піксель.");

//TASK 2
function sayHello() {
    // Запитати користувача ввести ім'я
    var name = prompt("Enter your name:");

    // Перевірити, чи користувач ввів ім'я
    if (name != null && name != "") {
      // Показати повідомлення з привітанням
      alert("Привіт, " + name + "!");
      
      // Занести введене ім'я у текст абзацу
      document.getElementById("student").textContent = name;
    }
  }

    //TASK 3
    function redirectToGoogle() {
      // відкриваємо діалогове вікно з запитанням про перехід на сторінку Google
      var result = confirm("Open Google?");

      if (result) {
        // якщо користувач натиснув на кнопку ОК, то переходимо на сторінку Google
        window.location.href = "https://www.google.com";
      } else {
        // якщо користувач натиснув на кнопку Cancel, то виводимо повідомлення і залишаємося на поточній сторінці
        alert("Request is denied");
      }
    }

    //TASK 4
let newWindow; //оголошуємо змінну

function firstFunction(){ 
 newWindow = window.open("http://lp.edu.ua/", "_blank");
}

function secondFunction(){
 newWindow.close();
}