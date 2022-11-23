require("./style.css");
require("./reset.css");

const addBtn = document.querySelector(".add-button");
const input = document.querySelector(".add-input");
const list = document.querySelector(".list");
const form = document.querySelector("form");

// add-button을 누르면 리스트가 추가 됨
addBtn.addEventListener("click", addToDo);

function addToDo() {
  if (input.value !== "") {
    // 이런 형태로 할 예정: li > div > checkbox + text + deleteBtn
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.setAttribute("class", "list-container");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "list-checkbox");

    const text = document.createElement("div");
    text.textContent = input.value;
    text.setAttribute("class", "list-text");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.setAttribute("class", "list-deletebtn");

    // add-button을 누르면
    div.appendChild(checkbox);
    div.appendChild(text);
    div.appendChild(deleteBtn);
    li.appendChild(div);
    list.appendChild(li);
    input.value = ""; // 입력창 초기화

    // deleteBtn을 누르면
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    // checkbox를 누르면
    checkbox.addEventListener("click", (event) => {
      if (event.currentTarget.checked) {
        text.style.textDecoration = "line-through";
      } else {
        text.style.textDecoration = "none";
      }
    });
  } else {
    // 아무것도 입력하지 않고 버튼을 누르면, 버튼 옆에 입력하라는 문구를 띄움
    // form > input + button이 있는 상태에서 form > input + button + span 이렇게
    alert("할 일을 입력해주세요!");
  }
}

// 엔터를 눌러도 추가되게
input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) addToDo();
});
