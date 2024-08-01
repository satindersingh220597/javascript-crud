// document.getElementById('submitButton').addEventListener('click', function() {
//     const name = document.getElementById('name').value;
//     const position = document.getElementById('position').value;
//     const salary = document.getElementById('salary').value;

//     if (name && position && salary) {
//         const tableBody = document.getElementById('tableBody');

//         const newRow = document.createElement('tr');

//         newRow.innerHTML = `
//             <td>${name}</td>
//             <td>${position}</td>
//             <td>${salary}</td>
//             <td>
//                 <div class="buttons">
//                     <button type="button" class="btn btn-primary">Edit</button>
//                     <button type="button" class="btn btn-danger">Delete</button>
//                 </div>
//             </td>
//         `;

//         tableBody.appendChild(newRow);

//         // Clear the input fields
//         document.getElementById('name').value = '';
//         document.getElementById('position').value = '';
//         document.getElementById('salary').value = '';
//     } else {
//         alert('Please fill in all fields');
//     }
// });

// document.getElementById('resetButton').addEventListener('click', function() {
//     document.getElementById('name').value = '';
//     document.getElementById('position').value = '';
//     document.getElementById('salary').value = '';
// });


// document.getElementById('resetButton').addEventListener('click', function() {
//     document.getElementById('name').value = '';
//     document.getElementById('position').value = '';
//     document.getElementById('salary').value = '';
// });

document.addEventListener('DOMContentLoaded', (event) => {
    let editIndex = -1;

    // Reset button event listener
    document.getElementById('resetButton').addEventListener('click', function() {
        document.getElementById('name').value = '';
        document.getElementById('position').value = '';
        document.getElementById('salary').value = '';
        editIndex = -1; // Reset edit index
    });

    // Submit button event listener
    document.getElementById('submitButton').addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const position = document.getElementById('position').value;
        const salary = document.getElementById('salary').value;

        if (!name || !position || !salary) {
            alert('All fields are required!');
            return;
        }

        const tableBody = document.getElementById('tableBody');

        if (editIndex === -1) {
            // Add new row
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${position}</td>
                <td>${salary}</td>
                <td>
                    <div class="buttons">
                        <button type="button" class="btn btn-primary editButton">Edit</button>
                        <button type="button" class="btn btn-danger deleteButton">Delete</button>
                    </div>
                </td>
            `;
            tableBody.appendChild(newRow);
        } else {
            // Edit existing row
            const row = tableBody.rows[editIndex];
            row.cells[0].innerText = name;       // Correct column for name
            row.cells[1].innerText = position;   // Correct column for position
            row.cells[2].innerText = salary;     // Correct column for salary
            editIndex = -1; // Reset edit index
        }

        // Clear input fields
        document.getElementById('name').value = '';
        document.getElementById('position').value = '';
        document.getElementById('salary').value = '';
    });

    // Add event listeners for edit and delete buttons
    document.getElementById('tableBody').addEventListener('click', function(event) {
        if (event.target.classList.contains('editButton')) {
            const row = event.target.closest('tr');
            editIndex = row.rowIndex - 1;
            document.getElementById('name').value = row.cells[0].innerText;
            document.getElementById('position').value = row.cells[1].innerText;
            document.getElementById('salary').value = row.cells[2].innerText;
        } else if (event.target.classList.contains('deleteButton')) {
            const row = event.target.closest('tr');
            row.remove();
            editIndex = -1; // Reset edit index if currently editing row is deleted
        }
    });
});
