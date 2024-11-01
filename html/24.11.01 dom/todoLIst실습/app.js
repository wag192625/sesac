// API 베이스 URL
const URL = 'http://localhost:3000/todos';

// DOMContentLoaded : HTML 문서 로딩이 끝나면 실행되는 이벤트
// 페이지가 로드되면 Todo 목록 초기화 함수를 실행한다.
document.addEventListener('DOMContentLoaded', initTodos);

// 전역 요소
const todoForm = document.querySelector('todoForm');
const todoList = document.querySelector('#todo-list');
const addTodoBtn = document.querySelector('#add-todo');

// const okBtn = document.createElement('button');
// const delBtn = document.createElement('button');

// Todo 추가 버튼 클릭 이벤트 리스너
addTodoBtn.addEventListener('click', addTodo);

// 개별 Todo 요소를 화면에 그리는 함수
function renderTodo(todo) {}

// Todo 목록 초기화 (GET 요청)
async function initTodos() {
  const response = await fetch(URL);
  const data = await response.json();
  data.forEach((el) => {
    const todoLi = document.createElement('li');
    todoLi.textContent = el.content;
    todoLi.classList.add('todoLi');
    todoLi.id = `list-${el.id}`;
    todoList.append(todoLi);
    if (el.completed == true) {
      todoLi.style.color = 'gray';
    } else if (el.completed == false) {
      todoLi.style.color = 'black';
    }

    // ▼ 확인 삭제 버튼 추가
    const okBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    okBtn.classList.add('okBtn');
    delBtn.classList.add('deleteBtn');
    okBtn.textContent = '완료';
    delBtn.textContent = '삭제';
    todoLi.append(okBtn, delBtn);

    // Todo 삭제하기 (DELETE 요청)
    delBtn.addEventListener('click', (event) => {
      deleteTodo(el.id);
      todoLi.remove();
      // 에러가 나서 요소는 삭제될 수 있지만, 데이터는 삭제가 안될 수 있어서
      // 이렇게 직접적으로 관여하는 방식은 비추천
    });
    okBtn.addEventListener('click', (event) => {
      toggleComplete(el);
      if (el.completed == true) {
        todoLi.style.color = 'gray';
        // okBtn.textContent = '완료';
      } else if (el.completed == false) {
        todoLi.style.color = 'black';
        // okBtn.textContent = '미완';
      }
      // console.log(el.id);
      // const okTodo = document.querySelector(`#list-${el.id}`);
      // okTodo.style.backgroundColor = 'red';
      // 클릭만 하면 색이 바뀌는거라 위의 for문에서 미리 지정을 해놔야함.
    });
  });
}

async function deleteTodo(id) {
  const response = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    console.log(`ID ${id} 삭제 완료`);
    // const deleteEl = document.querySelector(`#${id}`);
    // deleteEl.remove()
  }
}
// Todo 추가하기 (POST 요청)
async function addTodo(e) {
  e.preventDefault();
  try {
    // const inputTodo = document.querySelector('#todo-input');
    const todoText = document.querySelector('#todo-input').value;
    console.log(todoText);
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        content: todoText,
        completed: true,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  } catch (error) {
    console.error('에러', error);
  }
  // 오브젝트로 id, 텍스트, completed : false 만들어서 넣은 후
  // 버튼 클릭하면 db로 보냄
  // todoForm.reset();
}

// Todo 완료 상태 토글 (PATCH 요청)
async function toggleComplete(todo) {
  try {
    if (todo.completed === true) {
      todo.completed = false;
    } else {
      todo.completed = true;
    }

    const response = await fetch(`${URL}/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: todo.completed,
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    });

    // console.log(response.completed);
    const data = await response.json();
  } catch (error) {
    console.log('Error:', error);
  }

  // if (`#${id}`.completed === true) {
  //   `#${id}`.completed = false;
  // } else {
  //   `#${id}`.completed = true;
  // }
  // const response = await fetch(`${URL}/${id}`, {
  //   method: 'PUT',
  //   headers: {
  //     'content-type': 'application/json',
  //   },
  //   body: JSON.stringify({}),
  // });
  // const toggleComplete = await response.json();
  // return toggleComplete;
}
