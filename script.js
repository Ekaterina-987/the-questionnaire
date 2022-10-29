const form = document.querySelector(".form");
const name = document.querySelector("#name");
const secondName = document.querySelector("#secondName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const agree = document.querySelector("#agree");
const button = document.querySelector("#button");

form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    // Здесь твой код
    button.addEventListener("click", () => {
        fetch('https://polinashneider.space/', {
            method: "POST",
            headers: {
                'Accept': 'aplication/json',
                'Content-Type': 'aplication/json',
                'Authorization': 'Bearer: Ekaterina-987'
            },
            body: JSON.stringify({
                "name": "name",
                "secondName": "secondName",
                "email": "email",
                "phone": "phone",
                "agree": "agree"
            })
        });

        function sendRequest() {
            return new Promise(function(resolve, reject) {
                    if (fetch = true) {
                        resolve("Вы успешно зарегистрированы");
                    } else {
                        reject("Произошла ошибка");
                    }
                })
                .then((result) => {
                    alert(result);
                    document.querySelector(".form").reset()
                })
                .catch((error) => {
                    alert(error);
                })
        }

    })

});