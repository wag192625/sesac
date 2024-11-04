// API 베이스 URL
const URL = 'http://localhost:3000/todos';
const todoListTag = document.querySelector('#todo-list');

// DOMContentLoaded : HTML 문서 로딩이 끝나면 실행되는 이벤트
// 페이지가 로드되면 Todo 목록 초기화 함수를 실행한다.
document.addEventListener('DOMContentLoaded', initTodos);

///////////////////////////////////////////////////////////////////
// 상태변경
// 완료 버튼을 눌렀을 때 => 취소선이 그어지고 / 취소선이 그어진 상태에서는 없어짐
// compoleted => true / false 토글
// db에 반영

///////////////////////////////////////////////////////////////////
// Todo 생성

// 데이터의 관점
// 데이터를 받아다가 db에 저장한다

// 사용자의 관점
// 1. 데이터를 입력한다
// 2. 추가 버튼을 누른다.
// -> todo가 추가된다.

// front의 관점
// 사용자의 관점 (입력을 받아서 추가버튼을 누르면)
// 데이터의 관점 (db에 저장을 시키고)
// 데이터를 rendering한다.

// 버튼을 누르면 동작이 실행됨.
const addButton = document.querySelector('#add-todo');
addButton.addEventListener('click', addTodo);

// completed 상태를 변경한다.
async function patchTodo(todo) {
  const { id } = todo;

  const response = await fetch(URL + '/' + id);
  const data = await response.json();
  const { completed } = data;
  // spanTag가 completed를 가지고 있니?

  const responsePatch = await fetch(URL + '/' + id, {
    method: 'PATCH',
    body: JSON.stringify({
      completed: !completed,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const dataPatch = await responsePatch.json();
  console.log(dataPatch);
  return dataPatch;
}

async function addTodo() {
  // 입력을 받아다가 => db에 저장하고 => 보여준다.
  const inputTag = document.querySelector('#todo-input');
  const value = inputTag.value;

  const data = await postTodo(value);

  renderTodo(data);

  inputTag.value = '';
}

async function postTodo(value) {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      content: value,
      completed: false,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();

  return data;
}

///////////////////////////////////////////////////////////////////

// 초기값 세팅
async function initTodos() {
  // 1. 데이터 가져오기
  const todos = await fetchTodos();
  // 2. 데이터 보여주기

  renderTodos(todos);
}

// Todos json 형태로 가져오기.
async function fetchTodos() {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

// todos를 입력받아 보여주기.
function renderTodos(todos) {
  todos.forEach((todo) => {
    renderTodo(todo);
  });
}

function renderTodo(todo) {
  // 하나의 todo에 대한 태그들
  const liTag = document.createElement('li');

  // span
  const spanTag = document.createElement('span');
  const { content, completed } = todo;
  spanTag.textContent = content;
  if (completed) {
    spanTag.classList.add('completed');
  }

  // complete
  const completeButton = document.createElement('button');
  completeButton.textContent = '완료';
  completeButton.addEventListener('click', async (e) => {
    // 단순한 토글이 아니라, database의 patch가 성공하면 toggle해
    const data = await patchTodo(todo);
    const { completed } = data;
    // spanTag.classList.toggle('completed');
    if (completed) {
      spanTag.classList.add('completed');
    } else {
      spanTag.classList.remove('completed');
    }
  });

  // delete
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '삭제';

  liTag.append(spanTag, completeButton, deleteButton);
  todoListTag.append(liTag);
}
