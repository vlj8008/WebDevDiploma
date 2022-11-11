
//Lists
var employeeListHolder = document.querySelector(".employee-list");
var interviewListHolder = document.querySelector(".interviews");

//Modals
var interviewModal = document.querySelector("#interviewModal");
var employeeModal = document.querySelector("#employeeModal");

interviewModal.style.display ="none";
employeeModal.style.display = "none";

//Add employee function

function addEmployee(){

    var name = document.querySelector("#name").value;
    var surname = document.querySelector("#surname").value;
    var position = document.querySelector("#position").value;
    var department = document.querySelector("#department").value;
    var email = document.querySelector("#email").value;
    var salary = document.querySelector("#salary").value;
    
    //the Backticks allow us to embed the index.html with code below. 

    var newItem = `
    
            <li>
                <div class="employee-card" id="employee1">
                        <img class="user-img" src="img/resizedProfilePic.jpg">

                        <span>
                            <div class="employment-details" id="employee1-detail">
                                <span class="name-format">`+name+`</span>

                                <span class="name-format">`+surname+`</span>
                                <br>
                                <span>`+position+`</span>
                                <br>
                                <span>`+department+`</span>
                                <br>
                                <span>`+email+`</span>
                                <br>
                                <span>`+salary+`</span>
                            </div>
            </li>
            `;

    //the "adjacent" command inserts the newItem next to the last item.
    //employeeListHolder is global variable from first line of code
    //parameters below is position (must use specifice keywords) and html to be inserted     
    employeeListHolder.insertAdjacentHTML('beforeend',newItem);
    employeeModal.style.display = "none";

}

function showAddEmpModal(){
    employeeModal.style.display="block";
}


function addInterview()
{

    var departmentInt = document.querySelector("#int-department").value;
    var positionInt = document.querySelector("#int-position").value;

    var newInterview =
    `
    <li class="list-item">
    <h3>`+departmentInt+`</h3>
    <p>`+positionInt+`</p>
    <button class="accept-btn" type="button" name="button">Accept</button>
    <button class="reject-btn" type="button" name="button">Reject</button>
    </li>
    
    
    `;

    interviewListHolder.insertAdjacentHTML('beforeend',newInterview);
    interviewModal.style.display="none";
}

function showAddIntModal(){
    interviewModal.style.display="block";

}