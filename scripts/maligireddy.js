function capacity(){
    var students = Number(document.getElementById("students").value);
    const staff = 2;
    var result = students + staff;
    document.getElementById("result").innerHTML = result;
}