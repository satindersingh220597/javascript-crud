
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
const deleterow=document.getElementsByClassName('.deleteButton');
attachdeletebuttonlisner();
attachEditButtonListeners();

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

const tableBody=document.getElementById('tableBody');
const newrow=document.createElement('tr');
newrow.innerHTML=`<tr><td>${name_value}</td>
<td>${positon_label}</td>
<td>${Salary_label}</td>
<td>
    <div class="buttons">
        <button type="button" class="btn btn-primary editButton">Edit</button>
        <button type="button" class="btn btn-danger deleteButton">Delete</button>
    </div>
</td>
</tr>`;

tableBody.appendChild(newrow);
console.log(tableBody);
attachdeletebuttonlisner();
attachEditButtonListeners();
})

function attachEditButtonListeners() {
    const editButtonsList = document.querySelectorAll(".editButton"); // nodeList - kind array
  
    // Attach event listeners to each edit button
    editButtonsList.forEach((button) => {
      button.addEventListener("click", function (event) {
        const row = button.closest("tr"); // Find the closest row
        console.log(row);
  
        const name_value = row.children[0].textContent;
        const positon_label = row.children[1].textContent;
        const salary_label = row.children[2].textContent;
  
        document.querySelector('#emp-name').value = name_value;
        document.querySelector('#emp-profile').value = positon_label;
        document.querySelector('#emp-salary').value = salary_label;
  
        row.remove();
  
        // console.log(`Employee Name: ${empNameValue}`);
        // console.log(`Employee Profile: ${profileValue}`);
        // console.log(`Employee Salary: ${empSalaryValue}`);
      });
    });
  }
function attachdeletebuttonlisner() {
const deleterow=document.querySelectorAll('.deleteButton');
deleterow.forEach(item => {
    item.addEventListener("click",function(){
        const row = item.closest("tr");
        row.remove();
    });
    
});
}





// Reset Button
resetButton.addEventListener("click",function(){
    document.getElementById('emp-name').value='';
    document.getElementById('emp-profile').value='';
    document.getElementById('emp-salary').value='';
})



// editButton.addEventListener("click", function() {
//     Name.value = name_value;
//     Position.value = positon_label;
//     Salary.value = salary_label;
//     newrow.remove();
// });


