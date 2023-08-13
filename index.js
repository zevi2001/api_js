// const FD= async  ()=>{
//     const r=await fetch("https://jsonplaceholder.typicode.com/users")
//     const d=await r.json()
//     console.log(d)
//     console.log("55")
// }

//
const body = document.getElementsByTagName("body")[0];
const button = document.createElement("button");
const button1 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");
const button5 = document.createElement("button");
const button6 = document.createElement("button");
body.append(button);
body.append(button1);
body.append(button3);
body.append(button4);
body.append(button5);
body.append(button6);
button.addEventListener("click", createUsersCards);
button1.addEventListener("click", createManUsersCards);
button3.addEventListener("click", printJoke);
button4.addEventListener("click", printListManage);
button5.addEventListener("click", postForm);
button6.addEventListener("click", toDo);
button.innerHTML = "click";
button1.innerHTML = "man";
button3.innerHTML = "joke";
button4.innerHTML = "list";
button5.innerHTML = "post";
button6.innerHTML = "array";

async function toDo() {
  const usersResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await usersResponse.json();
  const usersArrayToDoResponse = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const toDo = await usersArrayToDoResponse.json();
  const usersPostsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = await usersPostsResponse.json();

  console.log(users);
  console.log(toDo);
  console.log(posts);
  const newArray = users.splice(0);
  for (let i = 1; i < newArray.length; i++) {
    

  }
}

function postForm() {
  const div = document.createElement("div");
  const btn = document.createElement("input");
  const form = document.createElement("form");
  const input1 = document.createElement("input");
  const input2 = document.createElement("input");
  const input3 = document.createElement("input");
  const input4 = document.createElement("input");
  body.append(div);
  div.append(form);
  form.append(input1);
  form.append(input2);
  form.append(input3);
  form.append(input4);
  form.append(btn);
  form.style.display = "block";
  input1.Type = "text";
  input1.placeholder = "first name";
  input2.Type = "text";
  input2.placeholder = "last name";
  input3.Type = "text";
  input3.placeholder = "email";
  input4.placeholder = "age";
  input4.type = "number";
  btn.innerText = "send";
  btn.type = "button";
  btn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "post",
      body: JSON.stringify({
        firstName: input1.value,
        lastName: input2.value,
        email: input3.value,
        age: input4.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => console.log(json));
  });
}
async function getList() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return data;
}
async function printListManage() {
  const list = await getList();
  for (let i = 0; i < 5; i++) {
    printList(list[i]);
  }
}
async function printList(data) {
  const div = document.createElement("div");
  const div1 = document.createElement("div");
  const title = document.createElement("h2");
  const price = document.createElement("h3");
  const img = document.createElement("img");
  const description = document.createElement("p");
  body.append(div1);
  div1.append(div);
  div.append(title);
  div.append(price);
  div.append(img);
  div.append(description);
  div1.style.display = "flex";
  div.style.height = "450px";
  div.style.width = "250px";
  div.style.border = "3px green solid";
  title.textContent = data.title;
  price.textContent = data.price;
  img.style.height = "50px";
  img.style.width = "50px";
  img.src = data.image;
  description.textContent = data.description;
}
async function getJoke() {
  const response = await fetch(
    "https://api.humorapi.com/jokes/search?api-key=5d4932239d7b48868c8d52268424762f"
  );
  const data = await response.json();
  return data.jokes;
}
async function printJoke() {
  const jokes = await getJoke();
  const pJoke = document.createElement("p");
  body.append(pJoke);
  pJoke.textContent = jokes[0].joke;
}
async function getManUsers() {
  const response = await fetch(
    "https://randomuser.me/api?results=5&gender=male"
  );
  const data = await response.json();
  //console.log(data.results);
  return data.results;
}
async function createManUsersCards() {
  const users = await getManUsers();
  for (let i = 0; i < users.length; i++) {
    createUserCard(users[i]);
  }
}
async function getUsers() {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();
  console.log(data.results);
  return data.results;
}
async function createUsersCards() {
  const users = await getUsers();
  createUserCard(users[0]);
}
function createUserCard(data) {
  const div = document.createElement("div");
  const nameH = document.createElement("h2");
  const email = document.createElement("h3");
  const img = document.createElement("img");
  const age = document.createElement("p");
  body.append(div);
  div.append(nameH);
  div.append(email);
  div.append(img);
  div.append(age);
  nameH.textContent = data.name.first + " " + data.name.last;
  email.textContent = data.email;
  img.src = data.picture.medium;
  age.textContent = data.dob.age;
  //console.log(data);
  div.style.border = "3px red solid";
}
