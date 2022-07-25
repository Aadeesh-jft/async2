//let emp = [];


async function getEmployees(i = '') {
  try {
    //the fetch functions always returns a promises
    //basically first await is to fetch the response object
    let response = await fetch('http://localhost:3000/emps/' + i);
    //the second await is because the response object is also a promise
    //so we have to wait for the json
    //console.log(await response.json());
    return (await response.json());
  } catch(error) {
    console.log(error);
  }
}


async function addEmployee(employee) {
  await fetch('http://localhost:3000/emps', {
      method: "POST",
      body: JSON.stringify(employee),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  })
  showInTable();
}

async function deleteData(i) {
  await fetch('http://localhost:3000/emps/' + i, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: null
    }
  )
  showInTable();
}

async function updateData(i, employee) {
  await fetch('http://localhost:3000/emps/' + i, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(employee)
  });
  id = 0;
}


  
// }
// function addEmployee(employee,jingalala){
//   console.log('adding Employee')
//   setTimeout(() => {
//     emp.push(employee);
//     console.log('Employee Added')
//     jingalala()
//   }, 2000);
// }

// function getEmployees(){
//   console.log('Fetching Employees')
//   setTimeout(() => {
//     console.log('Fetched')
//     return emp;
//   }, 1000);
// }

// function getEmployees(callback){
//   console.log('Fetching Employees')
//   setTimeout(() => {
//     console.log('Fetched')
//     callback(emp)
//   }, 1000);
// }
// PROMISES AND ASYNC AWAIT
// function getEmployees(){
//     return new Promise((resolve, reject)=>{
//       console.log('Fetching Employees')
//       setTimeout(() => {
//         console.log('Fetched')
//         resolve(emp);
//         //reject('ERR')
//       }, 1000);
//     })
//   }

// async function fetchData(){
//   const data  = await fetch('http://localhost:3000/emps')
//   console.log("🚀 ~ file: api.js ~ line 40 ~ fetchData ~ data", await data.json())
  
// }

// async function postData(){
//   const data  = await fetch('http://localhost:3000/emps',{
//     method:'POST',
//     body:JSON.stringify({name:'Sajal',job:'intern',salary:'0'})
//   })
//   console.log("🚀 ~ file: api.js ~ line 40 ~ fetchData ~ data", data)
  
// }

// fetchData()
// postData()