let helloBtn = document.querySelector('button');
let helloBtn2 = document.querySelector('button');
helloBtn.addEventListener('click', InputMsg);
helloBtn2.addEventListener('click', InputMsg2);

function InputMsg() {
    // alert("Hello Ninja!");
    let name = prompt('Enter name of the student');

    helloBtn.textContent = 'Roll No. 29:' + name;
}
function InputMsg2() {
    let departmentName = prompt('Enter the department name');
    helloBtn2.textContent = 'department:' + departmentName;

}