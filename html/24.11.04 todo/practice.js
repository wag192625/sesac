const URL = 'http://localhost:3000/todos';

// 초기값 세팅
async function initTodos() {
  // 1. 데이터 가져오기
  const todos = await fetchTodos();
  // 2. 데이터 보여주기

  renderTodos(todos);
}

// Todos json 형태로 가져오기.
// 비동기로 가져오는 이유 : 데이터를 병렬적으로 처리하여 
async function fetchTodos() {
  const response = await fetch(URL)
  const data = await response.json();
  return data
}