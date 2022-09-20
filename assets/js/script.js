
let addBtn = document.querySelector(".btn-add");

let dltBtn = document.querySelector(".btn-delete");

let table = document.querySelector(".table1");

async function getPost() {
  let posts = await fetch("https://jsonplaceholder.typicode.com/comments");
  let result = await posts.json();

  result.forEach((element) => {
    table.innerHTML += `<td>${element.postId}</td>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.email}</td>
    <td>${element.body}</td>
    `;
  });
}

function deleteBtn() {
  table.innerHTML = "";
}

addBtn.addEventListener("click", function () {
  getPost();
});

dltBtn.addEventListener("click", function () {
  deleteBtn();
});
