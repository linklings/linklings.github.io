let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/swanee_headshot.jpg') {
        myImage.setAttribute('src', 'images/linklings.jpg');
    } else {
        myImage.setAttribute('src', 'images/swanee_headshot.jpg');
    }
}

// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

// function setUserName() {
//     let myName = prompt('Please enter a username.')
//     if(!myName) {
//         setUserName();
//     } else {
//         localStorage.setItem('name', myName);
//         myHeading.textContent = 'Welcome to the Linklings, ' + myName;
//     }

// }

// if(!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Welcome to the Linklings, ' + storedName;
// }

// myButton.onclick = function() {
//     setUserName();
// }

