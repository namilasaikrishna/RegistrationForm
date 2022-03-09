let fnameEl = document.getElementById("fname");
let lnameEl = document.getElementById("lname");
let unameEl = document.getElementById("uname");
let passwordEl = document.getElementById("pass");
let emailEl = document.getElementById("email");
let ageEl = document.getElementById("age");
let fnameerror = document.getElementById("error1");
let lnameerror = document.getElementById("error2");
let unameerror = document.getElementById("error3");
let passerror = document.getElementById("error4");
let emailerror = document.getElementById("error5");
let ageerror = document.getElementById("error6");

function validate1() {
    fnameerror.textContent = "";
    let fname = fnameEl.value;
    let regExp = new RegExp("^[A-Za-z]*$");
    console.log(regExp.test(fname));
    if (fname == '') {
        fnameerror.textContent = "this field is required";
        return false;
    } else if (regExp.test(fname) == false) {
        fnameerror.textContent = "name should have only alphabets";
        return false;
    } else {
        return true;
    }
}

function validate2() {
    lnameerror.textContent = "";
    let lname = lnameEl.value;
    let regExp = new RegExp("^[A-Za-z]*$");
    console.log(regExp.test(lname));
    if (lname == '') {
        lnameerror.textContent = "this field is required";
        return false;
    } else if (regExp.test(lname) == false) {
        lnameerror.textContent = "name should have only alphabets";
        return false;
    } else {
        return true;
    }
}

function validate3() {
    unameerror.textContent = "";
    let uname = unameEl.value;
    if (uname == '') {
        unameerror.textContent = "this field is required";
        return false;
    } else if (uname.length < 3 || uname.length > 10) {
        unameerror.textContent = "uname must have atleast 3 and at most 10 chars";
        return false;
    } else {
        unameEl.style.border = border2;
        return true;
    }

}

function validate4() {
    passerror.innerHTML = "";
    let password = passwordEl.value;
    let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    console.log(regExp.test(password));
    if (password == '') {
        passerror.textContent = "this field is required";
        return false;
    } else if (regExp.test(password) == false) {
        let spanNode = document.createElement("span");
        spanNode.textContent = "the password should contain atleast one";
        let ulnode = document.createElement("ul");
        let linode1 = document.createElement("li");
        linode1.textContent = "Capital letter";
        let linode2 = document.createElement("li");
        linode2.textContent = "Small Letter";
        let linode3 = document.createElement("li");
        linode3.textContent = "Digit";
        let linode4 = document.createElement("li");
        linode4.textContent = "Special Symbol";
        ulnode.append(linode1, linode2, linode3, linode4);
        passerror.append(spanNode, ulnode);
        return false;
    } else if (password.length < 5 || password.length > 12) {
        passerror.textContent = "Password should be atleast 5 and atmost 12 characters long";
        return false;
    } else {
        return true;
    }

}

function validate5() {
    emailerror.textContent = "";
    let emailId = emailEl.value;
    let ss = emailId.substring(emailId.indexOf('@') + 1);
    console.log(ss);

    if (emailId == '') {
        emailerror.textContent = "this field is required";
        return false;
    } else if (!emailId.includes('@') || ss == '') {
        emailerror.textContent = "Please put valid email id";
        return false;
    } else {
        emailEl.style.border = border2;
        return true;
    }
}


function validate6() {
    ageerror.textContent = "";
    let age = ageEl.value;
    if (age == '') {
        ageerror.textContent = "this field is required";
        return false;
    } else if (age < 1 || age > 110) {
        ageerror.textContent = "please put valid age (1 to 110)";
        return false;
    } else {
        return true;
    }
}


function validateForm() {
    let val1 = validate1();
    let val2 = validate2();
    let val3 = validate3();
    let val4 = validate4();
    let val5 = validate5();
    let val6 = validate6();
    return val1 && val2 && val3 && val4 && val5 && val6;
}