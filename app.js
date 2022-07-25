
let id = 0;
let nameTextBox = document.getElementById('name');
let jobTextBox = document.getElementById('job');
let salaryTextBox = document.getElementById('salary');

function add() {
  const newEmployee = {name:nameTextBox.value, job:jobTextBox.value,
  salary:salaryTextBox.value}
  //console.log(newEmployee);
  addEmployee(newEmployee);
}

async function showInTable() {
  try {
    let table = document.getElementById("table");
    table.innerHTML = '';
    const employees = await getEmployees();
    employees.forEach(emp => {
      table.innerHTML += `<tr>
      <td>${emp.name}</td><td>${emp.job}</td><td>${emp.salary}</td>
      <td><button class="btn btn-danger" type="button" onclick="deleteData(${emp.id})">Delete Entry</button></td>
      <td><button class="btn btn-primary" type="button" onclick="updater(${emp.id})">Update Entry</button></td>
      </tr>`;
    })
  } catch(err) {
    console.log(err);
  }
}

async function updater(i) {
  const oldEmployee = await getEmployees(i);
  nameTextBox.value = oldEmployee.name;
  jobTextBox.value = oldEmployee.job;
  salaryTextBox.value = oldEmployee.salary;
  id = i;
}


function updateGetter() {
  const newEmployee = {name:nameTextBox.value, job:jobTextBox.value , salary:salaryTextBox.value};
  updateData(id, newEmployee);
}

async function showInConsole() {
  try {
    const employees = await getEmployees();
    console.log(employees);
  } catch(err) {
    console.log(err);
  }
}
showInTable();