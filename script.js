
// document.addEventListener('DOMContentLoaded', (event) => {
//     let editIndex = -1;

//     // Reset button event listener
//     document.getElementById('resetButton').addEventListener('click', function() {
//         document.getElementById('name').value = '';
//         document.getElementById('position').value = '';
//         document.getElementById('salary').value = '';
//         editIndex = -1; // Reset edit index
//     });

//     // Submit button event listener
//     document.getElementById('submitButton').addEventListener('click', function() {
//         const name = document.getElementById('name').value;
//         const position = document.getElementById('position').value;
//         const salary = document.getElementById('salary').value;

//         if (!name || !position || !salary) {
//             alert('All fields are required!');
//             return;
//         }

//         const tableBody = document.getElementById('tableBody');

//         if (editIndex === -1) {
//             // Add new row
//             const newRow = document.createElement('tr');
//             newRow.innerHTML = `
//                 <td>${name}</td>
//                 <td>${position}</td>
//                 <td>${salary}</td>
//                 <td>
//                     <div class="buttons">
//                         <button type="button" class="btn btn-primary editButton">Edit</button>
//                         <button type="button" class="btn btn-danger deleteButton">Delete</button>
//                     </div>
//                 </td>
//             `;
//             tableBody.appendChild(newRow);
//         } else {
//             // Edit existing row
//             const row = tableBody.rows[editIndex];
//             row.cells[0].innerText = name;       // Correct column for name
//             row.cells[1].innerText = position;   // Correct column for position
//             row.cells[2].innerText = salary;     // Correct column for salary
//             editIndex = -1; // Reset edit index
//         }

//         // Clear input fields
//         document.getElementById('name').value = '';
//         document.getElementById('position').value = '';
//         document.getElementById('salary').value = '';
//     });

//     // Add event listeners for edit and delete buttons
//     document.getElementById('tableBody').addEventListener('click', function(event) {
//         if (event.target.classList.contains('editButton')) {
//             const row = event.target.closest('tr');
//             editIndex = row.rowIndex - 1;
//             document.getElementById('name').value = row.cells[0].innerText;
//             document.getElementById('position').value = row.cells[1].innerText;
//             document.getElementById('salary').value = row.cells[2].innerText;
//         } else if (event.target.classList.contains('deleteButton')) {
//             const row = event.target.closest('tr');
//             row.remove();
//             editIndex = -1; // Reset edit index if currently editing row is deleted
//         }
//     });
// });



const Name=document.querySelector('#emp-name');
const Name_label=document.querySelector('#emp-name-label');

const Positon=document.querySelector('#emp-profile');
const Positon_label=document.querySelector('#emp-profile-label');

const salary=document.querySelector('#emp-salary');
const salary_label=document.querySelector('#emp-name-salary');

const savebutton=document.querySelector('#submitButton');

savebutton.addEventListener("click",function(){
   
   const name_value=Name.value;
   const positon_label=Positon.value;
   const Salary_label=salary.value;
   Name_label.textContent=(`The employee Name is ${name_value}`);
   Positon_label.textContent=(`His Profile is ${positon_label}`);
   salary_label.textContent=(`His Salary is ${Salary_label}`);
    
    console.log( `The employee Name is ${name_value}`);
    console.log(`His Profile is ${positon_label}`);
    console.log(`His Salary is ${Salary_label}`);


})
