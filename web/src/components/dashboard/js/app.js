function registerFirst() {
    let nameF = document.getElementById("nameF").value;
    let nameL = document.getElementById("nameL").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let password = document.getElementById("password").value;

    let users = {
        name: nameF + " " + nameL,
        email: email,
        number: number,
        password: password


    }
    console.log(users)

    const Http = new XMLHttpRequest();
    const url = 'http://192.168.40.44:3000/signup';
    Http.open("POST", url);
    Http.setRequestHeader("Content-type", "application/json")

    Http.send(JSON.stringify(users));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
    return false;

}
function loginFirst() {

    let logEmail = document.getElementById("logEmail").value;
    let logPassword = document.getElementById("logPassword").value;

    const Http = new XMLHttpRequest();
    const url = 'http://192.168.40.44:3000/login';
    Http.open("POST", url);
    Http.setRequestHeader("Content-type", "application/json")

    Http.send(JSON.stringify({
        email: logEmail,
        password: logPassword
    }));

    Http.onreadystatechange = (e) => {
        // console.log(Http.responseText)
        let res = JSON.parse(Http.responseText);
        console.log(res.name)
        console.log(res);
    }
    return false;

}