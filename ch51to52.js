let selectedRow = null;

function showAlert(message,className){
    const div = document.createElement("div");
    div.className = `alert alert-${className} col-md-8`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div,main);
    setTimeout(()=>{
        document.querySelector(".alert").remove()
    }, 3000);
}

//  Clear all Fields 
function clearAllFields(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#rollNum").value = "";
}

//  Add Data 
document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNum = document.querySelector("#rollNum").value;
    if(firstName === "" || lastName === "" || rollNum === ""){
        showAlert("Please fill in all the fields","danger");
    } else {
        if (selectedRow === null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${rollNum}</td>
            <td>
            <a href="#" class="btn btn-danger btn-sm edit">Edit</a>
            <a href="#" class="btn btn-warning btn-sm delete">Delete</a>
            </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Student Added Successfully","success");
        } else { 
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = rollNum;
            selectedRow = null;
            showAlert("Student Info Edited","success");
        }
        clearAllFields();
    }
})
// Edit Data 
document.querySelector("#student-list").addEventListener("click",(e)=>{
    target = e.target;
    console.log(target);
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
        document.querySelector("#lastName").value = selectedRow.children[1].textContent;
        document.querySelector("#rollNum").value = selectedRow.children[2].textContent;
    }
});

// Delete Data 

document.querySelector("#student-list").addEventListener("click",function(e){
    target = e.target;
    console.log(target);
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted Successfully", "danger");
    }
})