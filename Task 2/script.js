const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

function addTask(text) {
  const li = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = text;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.classList.add('remove-btn');

  taskSpan.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(taskSpan);
  li.appendChild(removeBtn);
  taskList.appendChild(li);
}
