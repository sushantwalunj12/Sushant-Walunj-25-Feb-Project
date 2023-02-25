const addNewRowButton = document.getElementById("button")
const tableBody = document.getElementById("tbody")
const tableData = [];

function submitData(id, student_naam, student_rall, student_sabject, student_mark, student_markeby){
    addRowButton.disabled = false;
    if(student_markeby.includes("@") == false){
        alert("Enter Valid Email");
    }else{
        let data = { id: tableData.length + 1, student_name: student_naam, student_roll: student_rall, student_subject: student_sabject, student_marks: student_mark, student_markedBy: student_markeby }
        console.log(data);
        tableData.push(data);
        console.log(tableData);
        tableBody.innerHTML = tableData.map((item, ind) => {
            return (` <tr> <td>${item.id}</td>
            <td>${item.student_name}</td>
            <td>${item.student_roll}</td>
            <td>${item.student_subject}</td>
            <td>${item.student_marks}</td>
            <td>${item.student_markedBy}</td></tr>`)
        }).join("")
    }
}


addNewRowButton.addEventListener("click", () =>{
    tableBody.innerHTML = tableBody.innerHTML + `<td>${tableData.length + 1}</td>
    <form >
    <td><input id="stuname" type="text"/></td>
    <td><input id="sturoll" type="text"/></td>
    <td><input id="stusubject" type="text"/></td>
    <td><input id="stumarks" type="number"/></td>
    <td><input id="stumarkedby" type="email"/></td>
    <td><button id="savebtn" onclick="submitData(document.getElementById('stuname').value,document.getElementById('sturoll').value,document.getElementById('stusubject').value,document.getElementById('stumarks').value,document.getElementById('stumarkedby').value)">Save</button></td>
    </form>`

    addNewRowButton.disabled = true;
})