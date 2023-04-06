function formVelidation(){
var fName = document.form.fname.value;
// document.myform.name.value;  
// console.log(Name)
if(fName.length<3){
    alert("First Name can't be less than 3 charactors")
}

var lName= document.form.lname.value;
if(lName.length<3){
    alert("Second Name can't be less than 3 charactor")
}

var password = document.form.pass.value;
if(password.length< 6){
    alert("Password must be greater than 6 number")
}
var cpassword = document.form.cpass.value;
if(cpassword != password){
    alert("Password not matched")
}
var number = document.form.number.value;
if(number.length<11 || number.length>11){
    alert("Number must be 11 charct")
}
}

// function for entering the data in the table 


function tableData(){
    alert("NOTE: You can edit this table bY clicking in the boxes")
    var newRow = document.createElement("tr");
    var newCol = newRow.appendChild(document.createElement("td"));
    var newCol2 = newRow.appendChild(document.createElement("td"));
    newCol.innerHTML= document.form.fname.placeholder;
    newCol2.innerHTML= document.form.fname.value;
    document.getElementById("customTab").appendChild(newRow)


    // 2nd row 
    var newRow2 = document.createElement("tr");
    var newCol3 = newRow2.appendChild(document.createElement("td"));
    var newCol4 = newRow2.appendChild(document.createElement("td"));
    newCol3.innerHTML= document.form.lname.placeholder;
    newCol4.innerHTML= document.form.lname.value;
    document.getElementById("customTab").appendChild(newRow2)

    // 3rd row 
    var newRow3 = document.createElement("tr");
    var newCol5 = newRow3.appendChild(document.createElement("td"));
    var newCol6 = newRow3.appendChild(document.createElement("td"));
    newCol5.innerHTML= "Your Password";
    newCol6.innerHTML= document.form.pass.value;
    document.getElementById("customTab").appendChild(newRow3)


// 4th row 
var newRow4 = document.createElement("tr");
    var newCol7 = newRow4.appendChild(document.createElement("td"));
    var newCol8 = newRow4.appendChild(document.createElement("td"));
    newCol7.innerHTML= "Your Number";
    newCol8.innerHTML= document.form.number.value;
    document.getElementById("customTab").appendChild(newRow4)
}

var popup = document.getElementById("popup");

function openPopup(){
    console.log("Got clicked")
popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}


// console.log("Hello"+ "<br>"+ "world")