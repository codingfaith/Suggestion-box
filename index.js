const departmentsArr = ["Strategic_Service","Research_and_Development","Project_Management","Finance","Information_Technology","Human_Resources","Data_Analytics","Data_Processing","Compliance","Field","CATI","Assets_and_Procurement"]

const departments = document.getElementById("departments")
let departmentsString = ''

//create html string from the departments array
for(let department of departmentsArr){
    departmentsString += `<a href="content.html" id="${department}">${department.replaceAll('_',' ')}</a>`
}
departments.innerHTML = departmentsString

//populate departments Div with the department a tags from html string
for(let department of departmentsArr){
    document.getElementById(department).addEventListener("click",()=>{
        // console.log(department)
    })
}