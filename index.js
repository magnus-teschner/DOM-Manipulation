// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.textContent = "Hello I am red"
para.style.color = "red";
container.appendChild(para);


h3Heading = document.createElement('h3');
h3Heading.textContent = "I'm a blue h3!";
h3Heading.style.color = "blue";
container.appendChild(h3Heading);


div1 = document.createElement('div');
div1.style.borderColor = "black";
div1.style.backgroundColor = "pink";




h1Heading = document.createElement('h1');
h1Heading.textContent = "I'm in a div!";
div1.appendChild(h3Heading);


para2 = document.createElement('p');
para2.textContent = "ME TOO";
div1.appendChild(para2);

container.appendChild(div1);

