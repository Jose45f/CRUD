
var row = null


//place order button
function Submit() {
    var dataEntry = dataRetrieved(); 
   var readData = readFromLocal(dataEntry);
   if(dataEntry == '') {
    alert('Please fill out all fields.')
   } else {
    if (row == null){
        insert(readData);
        console.log('Data entered!')
    } else {
        update();
        console.log('data updated!')
    }
   }
   console.log(data);
}

//create/ retrieve
function dataRetrieved(){
    var name = document.getElementById("newname").value;
    var order = document.getElementById("neworder").value;
    var time  = document.getElementById('newtime').value;
    var date = document.getElementById('newdate').value;

    var arr = [name, order, time, date];
   if(arr.includes("")){
    return false
   }
   else {
    return arr 
};
}

// local storage/ array
let data = []
function readFromLocal(dataEntry) {
    
    var n = localStorage.setItem('newname', dataEntry[0]);
    var o = localStorage.setItem('neworder', dataEntry[1]);
    var t = localStorage.setItem('newtime', dataEntry[2]);
    var d = localStorage.setItem('newdate', dataEntry[3])
    
    var n1 = localStorage.getItem('newname', n)
    var o1 = localStorage.getItem('neworder', o)
    var t1 = localStorage.getItem('newtime', t)
    var d1 = localStorage.getItem('newdate', d)
    var arr = [n1, o1, t1,d1]
    
    data.push(n1,o1,t1,d1,'---')
    localStorage.setItem('data', JSON.stringify(data))
    return arr; 
} 




//insert table
function insert(readData){
  var row =  table.insertRow();

row.insertCell(0).innerHTML = readData[0];
row.insertCell(1).innerHTML = readData[1];
row.insertCell(2).innerHTML = readData[2];
row.insertCell(3).innerHTML = readData[3];
row.insertCell(4).innerHTML = `<button onclick =edit(this) class = "btn btn-outline-warning">Edit</button>
<button onclick =remove(this) class = "btn btn-outline-danger">Delete</button>`;
// clear form
document.getElementById('newname').value = '';
document.getElementById('neworder').value = '';
document.getElementById('newtime').value = '';
document.getElementById('newdate').value = '';
}

//edit 
function edit(r){
    row = r.parentElement.parentElement;
    document.getElementById('newname').value = row.cells[0].innerHTML;
    document.getElementById('neworder').value = row.cells[1].innerHTML;
    document.getElementById('newtime').value = row.cells[2].innerHTML;
    document.getElementById('newdate').value = row.cells[3].innerHTML;
    

}

//update
function update(){
    row.cells[0].innerHTML = document.getElementById('newname').value;
    row.cells[1].innerHTML = document.getElementById('neworder').value;
    row.cells[2].innerHTML = document.getElementById('newtime').value;
    row.cells[3].innerHTML = document.getElementById('newdate').value;

    row = null;
}

//delete
function remove(r) {
    var ans = confirm('Are you sure you want to delete this input?')
    if (ans == true){
        row = r.parentElement.parentElement;
        document.getElementById('table').deleteRow(row.rowIndex)
    }
}
