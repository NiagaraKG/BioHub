function send() {

    var name = document.getElementsByTagName('input')[0].value;
    var product = document.getElementsByTagName('input')[1].value;
    var location = document.getElementsByTagName('input')[2].value;
    var phone = document.getElementsByTagName('input')[3].value;
    var mail = document.getElementsByTagName('input')[4].value;
    checkEmpty(name);
    checkEmpty(product);
    checkEmpty(location);
    checkEmpty(phone);
    checkIsText(location);
    checkIsEmail(mail);
    document.getElementById("formBox").reset();
}

function checkEmpty(input) {

    if (input == null || typeof input == 'undefined' || input.length == 0) 
    {
        alert("Полетата със * са адължителни.");
    }
}

function checkIsText(input) {
    if(/\d/.test(input))
    {
        alert("Населеното място не може да съдържа цифри.");
    }
}

function checkIsEmail(input) {    
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if(!regex.test(String(input).toLowerCase()) && input.length != 0)
        {
            alert("Имейлът е невалиден.")
        }  
}