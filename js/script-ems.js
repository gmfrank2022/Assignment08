//Add an Update Button in the form to help edit and update employee.
//Add an E button in each row to help edit the employee.

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let empForm,employeeID,employeeName,phoneExt,eMail,depSelect
const form=document.querySelector('#addForm')
let tabEmp = document.querySelector('#empTable')
let newTbody

let gIndex //employee global index for edit

// GET DOM ELEMENTS
const $ = (id) => document.getElementById(id)
empForm = $("addForm")
employeeID = $("id")
employeeName = $("name")
phoneExt = $("extension")
eMail = $("email")
depSelect = $("department")
empCount = $("empCount")
update = $("update")

// CREATE AN ARRAY OF EMPLOYEES
let allEmployees = []

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
function loadEmployeeTable() {
    let initEmployees = []

    let tmpEmployee = {
        "employeeID":  1001, 
        "employeeName": "Sally",
        "phoneExt": 1121,
        "eMail": "Sally@test.com",
        "depSelect": "Administrative"
    };
    initEmployees.push(tmpEmployee)
    
    tmpEmployee = {
        "employeeID":  1002, 
        "employeeName": "Tina",
        "phoneExt": 1122,
        "eMail": "Tina@test.com",
        "depSelect": "Engineering"
    };
    initEmployees.push(tmpEmployee)
    
    tmpEmployee = {
        "employeeID":  1003, 
        "employeeName": "Brant",
        "phoneExt": 1123,
        "eMail": "Brant@test.com",
        "depSelect": "Executive"
    };
    initEmployees.push(tmpEmployee)
    
    tmpEmployee = {
        "employeeID":  1004, 
        "employeeName": "Smith",
        "phoneExt": 1124,
        "eMail": "Smith@test.com",
        "depSelect": "Sales"
    };
    initEmployees.push(tmpEmployee)
    
    tmpEmployee = {
        "employeeID":  1005, 
        "employeeName": "Dally",
        "phoneExt": 1125,
        "eMail": "Dally@test.com",
        "depSelect": "Marketing"
    };
    initEmployees.push(tmpEmployee)
    
    // CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
    let empStored = JSON.parse(localStorage.getItem("empData"));
    if(empStored === "" || empStored === null || empStored.length <= 0) {
        console.log(initEmployees)
        return initEmployees
    } else {
        // IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
        console.log(empStored)

        return empStored
    }
}

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    console.log(`ID: ${employeeID.value}\nName: ${employeeName.value}\nExtension: ${phoneExt.value}\nEmail: ${eMail.value}\nDepartment: ${depSelect.value}`)

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    tmpEmployee = {
        "employeeID":  employeeID.value, 
        "employeeName": employeeName.value,
        "phoneExt": phoneExt.value,
        "eMail": eMail.value,
        "depSelect": depSelect.value
    };

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    allEmployees.push(tmpEmployee)

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    employeeID.focus()
});

update.addEventListener('click', (e) => {
    console.log("Update employee...")

    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    console.log(`ID: ${employeeID.value}\nName: ${employeeName.value}\nExtension: ${phoneExt.value}\nEmail: ${eMail.value}\nDepartment: ${depSelect.value}`)

    if (employeeID.value==="" || employeeName.value === "" || phoneExt.value === "" || eMail.value === "" || depSelect.value === "") {
        window.alert("Please fill all fields!")
        return
    }

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    tmpEmployee = {
        "employeeID":  employeeID.value, 
        "employeeName": employeeName.value,
        "phoneExt": phoneExt.value,
        "eMail": eMail.value,
        "depSelect": depSelect.value
    };

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    allEmployees.splice(gIndex,1,tmpEmployee)

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    employeeID.focus()

    update.hidden = true;
});

// EDIT OR DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE EDIT
    // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
    let rowIndex = e.target.parentNode.parentNode.rowIndex;
    let colIndex = e.target.parentNode.cellIndex;

    console.log(rowIndex, colIndex)

    if(rowIndex >= 0){
        //Edit or Delete
        if (colIndex === 5) {
            //CONFIRM THE Edit
            if (confirm(`Are you sure you want to EDIT this employee? [${allEmployees[rowIndex-1].employeeID}, ${allEmployees[rowIndex-1].employeeName}]`)){
                // LOAD EMPLOYEE FROM ARRAY
                employeeID.value = allEmployees[rowIndex-1].employeeID
                employeeName.value = allEmployees[rowIndex-1].employeeName
                phoneExt.value = allEmployees[rowIndex-1].phoneExt
                eMail.value = allEmployees[rowIndex-1].eMail
                depSelect.value = allEmployees[rowIndex-1].depSelect

                gIndex = rowIndex-1

                update.hidden = false;
            }
        } else if (colIndex === 6) {
            //CONFIRM THE DELETE
            if (confirm(`Are you sure you want to DELETE this employee? [${allEmployees[rowIndex-1].employeeID}, ${allEmployees[rowIndex-1].employeeName}]`)){
                //remove the parent row element
                newTbody.deleteRow(rowIndex-1)

                // REMOVE EMPLOYEE FROM ARRAY
                //delete allEmployees[rowIndex]  if delete, will leave null
                allEmployees.splice(rowIndex-1, 1);
                console.log(allEmployees)

                // BUILD THE GRID
                buildGrid()

                idxEmployee = allEmployees.length

                //Update the count
                if (idxEmployee>0){
                    empCount.textContent = '('+idxEmployee+')'
                } else {
                    empCount.textContent = ''
                }

                // STORE THE ARRAY IN STORAGE
                localStorage.setItem("empData", JSON.stringify(allEmployees));       
            }     
        }
    } 
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    const tbody = tabEmp.querySelector('tbody');
    tbody.remove();
    tbody.innerHTML = '';

    // REBUILD THE TBODY FROM SCRATCH
    newTbody = tabEmp.createTBody();

    console.log(allEmployees)

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    allEmployees.forEach(item => {
        const row = newTbody.insertRow();

        // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
        let cellID = row.insertCell()
        cellID.textContent = item.employeeID

            //Another method: APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
            //let textNode = document.createTextNode(item.employeeID)
            //cellID.appendChild(textNode)
        
        cellID = row.insertCell()
        cellID.textContent = item.employeeName
            //textNode = document.createTextNode(item.employeeName)
            //cellID.appendChild(textNode)

        cellID = row.insertCell()
        cellID.textContent = item.phoneExt
            //textNode = document.createTextNode(item.phoneExt)
            //cellID.appendChild(textNode)

        cellID = row.insertCell()
        cellID.textContent = item.eMail
            //textNode = document.createTextNode(item.eMail)
            //cellID.appendChild(textNode)

        cellID = row.insertCell()
        cellID.textContent = item.depSelect
            //textNode = document.createTextNode(item.depSelect)
            //cellID.appendChild(textNode)

        // CREATE THE Edit BUTTON
        let editBtn = document.createElement('button')
        //Add classes to edit button
        editBtn.className = 'btn btn-danger btn-sm float-end edit'
        //Add text to edit button
        editBtn.appendChild(document.createTextNode('E'))
        //Add editbutton
        cellID = row.insertCell()
        cellID.appendChild(editBtn);

        // CREATE THE DELETE BUTTON
        let deleteBtn = document.createElement('button')
        //Add classes to delete button
        deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
        //Add text to delete button
        deleteBtn.appendChild(document.createTextNode('X'))
        //Add deletebutton
        cellID = row.insertCell()
        cellID.appendChild(deleteBtn);

    });

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    tabEmp.appendChild(newTbody); // Append it to the table

    // UPDATE EMPLOYEE COUNT
    idxEmployee = allEmployees.length
    if (idxEmployee>0){
        empCount.textContent = '('+idxEmployee+')'
    } else {
        empCount.textContent = ''
    }

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem("empData", JSON.stringify(allEmployees));
};

allEmployees = loadEmployeeTable()

buildGrid()