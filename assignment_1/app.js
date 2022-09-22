
let arr = [];
let freq = 1;
// let disabled = false;
const addbtn = document.getElementById('addbtn');
const savebtn = document.getElementById('savebtn');
const cross = document.getElementById('cross1');

// function to fetch the elements from form DOM
function getELements(idx) {
    let cname = document.querySelectorAll(".name")[idx].value;
    console.log(cname);
    let cemail = document.querySelectorAll(".email")[idx].value;
    console.log(cemail);
    let cmobile = document.querySelectorAll(".mobile")[idx].value;
    console.log(cmobile);
    let ccity = document.querySelectorAll(".city")[idx].value;
    console.log(ccity);
    const gender1 = document.querySelectorAll(".gender");
    let gen_id = parseInt(idx)
    gen_id = gen_id*2;
    console.log(gen_id);
    const val = gender1[gen_id].getAttribute("name");
    console.log(val);
    const cgender = document.querySelector(`input[name=${val}]:checked`) ? document.querySelector(`input[name=${val}]:checked`).value : null;
    console.log(cgender);   

    // let val = cname[idx].value;
    // let cname = 'name';
    // cname = cname+id;
    // let cemail = 'email';
    // cemail = cemail+id;
    // let cmobile = 'mobile';
    // cmobile = cmobile+id;
    // let ccity = 'city';
    // ccity = ccity+id;
    // let cgender = 'gender';
    // cgender = cgender+id;
    // // let cgen = 'gender'+id;
    // const name = document.getElementById(cname).value;
    // console.log(name);
    // const email = document.getElementById(cemail).value;
    // console.log(email);
    // const mobile = document.getElementById(cmobile).value;
    // console.log(mobile);
    // const city = document.getElementById(ccity).value;
    // console.log(city);
    // // debugger;
    // const gender1 = document.querySelectorAll(".gender");
    // const val = gender1[0].getAttribute("name");
    // const gender = document.querySelector(`input[name=${cgender}]:checked`) ? document.querySelector(`input[name=val]:checked`).value : null;
    // console.log(gender); 

    let details = {name: cname,
        email : cemail,
        mobile: cmobile,
        city:ccity,
        gender: cgender
    };
    return details;
}


function getCrossElement(id){
    let cname = 'name';
    cname = cname+id;
    let cemail = 'email';
    cemail = cemail+id;
    let cmobile = 'mobile';
    cmobile = cmobile+id;
    let ccity = 'city';
    ccity = ccity+id;
    let cgender = 'gender';
    cgender = cgender+id;
    // let cgen = 'gender'+id;
    const name = document.getElementById(cname).value;
    console.log(name);
    const email = document.getElementById(cemail).value;
    console.log(email);
    const mobile = document.getElementById(cmobile).value;
    console.log(mobile);
    const city = document.getElementById(ccity).value;
    console.log(city);
    // debugger;
    // const gender1 = document.querySelectorAll(".gender");
    // const val1 = gender1[0].getAttribute("name");
    // const cgender = "gender"+id;
    const gender = document.querySelector(`input[name=${cgender}]:checked`) ? document.querySelector(`input[name=${cgender}]:checked`).value : null;
    console.log(gender); 

    let details = {
        name: name,
        email : email,
        mobile: mobile,
        city: city,
        gender: gender
    };
    return details;
}

function addNewForm() {
    freq++;
    var li = document.createElement("li");
    li.innerHTML = ` <div class="container" id="container${freq}">
    <div class="small-box" id="counter${freq}">
        <div  class = "balls" id="ball${freq}">${freq}</div>
    </div>
    <div class="cross1" id="cross${freq}" onclick="cross_func(${freq})">
        <button>&#10006;</button>
    </div>
    <br><br>
        <div class="row">
            <div class="column">
            <label>Name</label><br>
            <input type="text" id="name${freq}" class="name">
            </div>
            <div class="column">
            <label>Email</label><br>
            <input type="email" id="email${freq}" class="email">
            </div>
            <div class="column">
            <label>Mobile</label><br>
            <input type="number" id="mobile${freq}" pattern="[0-9]{10}" placeholder="9523766809" class="mobile">
            </div>
            <div class="column">
            <label>City</label><br>
            <select name="city" id="city${freq}" name="city" class="city">
                <option value="default">Select</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="bangalore">Bangalore</option>
                <option value="mumbai">Mumbai</option>
                <option value="purnea">Purnea</option>
                <option value="delhi">Delhi</option>
            </select>
            </div>
        </div>

        <div class="row">
            <div class="col2">
                <label>Gender : </label>
                <label>Male</label><input type="radio" name="gender${freq}"  value="Male" class="gender">
                <label>Female</label><input type="radio" name="gender${freq}" value="female" class="gender">
            </div>
        </div>
</div> `;
    var ul = document.getElementById('myUl');
    let items = ul.getElementsByTagName('li');
    let len = items.length;
    
    if(len>=5){
        alert('cannnot add more than 5');
    }
    else{
        document.getElementById('myUl').appendChild(li);
    }

    if(items.length>1){
        // document.getElementById('cross1').style.visibility = "visible";
        var cross_el = document.querySelectorAll('.cross1');
        for(let i=0;i<cross_el.length;i++){
            cross_el[i].style.visibility = "visible";
        }
    }
    else if(items.length==1){
        // document.getElementById('cross1').style.visibility = "visible";
        var cross_el = document.querySelectorAll('cross1');
        for(let i=0;i<cross_el.length;i++){
            cross_el[i].style.visibility = "hidden";
        }
    }
    
}

function checkInValidInput(obj) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(obj.name==="" || obj.email==="" || obj.mobile==="" || obj.city==="" || obj.gender===""){
        return true;
    }
    return false;
}

// for showing the details of particular person
// const showPersonDetails = function(){
//     // e.preventDefault();
//     let person = document.getElementById('person');
//     let data = "";
//     let count = 0;
    
//     if(arr.length>0){
//         for(const el of arr){
//             count++;
//             data = data + '<div class="container1">';
//             data = data + count + ". <br>" ;
//             data = data + '<strong>name:</strong> ' + el.name + '<br>';
//             data = data + '<strong>email:</strong> ' + el.email + '<br>';
//             data = data + '<strong>mobile:</strong> ' + el.mobile + '<br>';
//             data = data + '<strong>city:</strong> ' + el.city + '<br>';
//             data = data + '<strong>gender:</strong> ' + el.gender + '<br>';
//             data = data + '</div>';
//         }
//     }
//     person.innerHTML = data;
// }

// for adding contact details
let cnt = 1;
const addDetails = function(e){
    e.preventDefault();
    addNewForm();
};

// function for clearing input of the input field in html after it got added
function clearInput(idx) {
    document.querySelectorAll(".name")[idx].value = "";
    document.querySelectorAll(".email")[idx].value = "";
    document.querySelectorAll(".mobile")[idx].value = "";
    document.querySelectorAll(".city")[idx].value = "";
    let gen_id = parseInt(idx)
    gen_id = gen_id*2;
    const gender1 = document.querySelectorAll(".gender");
    const val = gender1[gen_id].getAttribute("name");

    // document.getElementById('name'+idx).value = "";
    // document.getElementById('email'+idx).value = "";
    // document.getElementById('mobile'+idx).value = "";
    // document.getElementById('city'+idx).value = "";
    // let gender = "gender"+idx;
    var ele = document.getElementsByName(val);
    for(var i=0;i<ele.length;i++){
        ele[i].checked = false;
    }
    
}

// On clicking save button - save the form in array and show the details of person in cosole and page both
const showDetails = function(e){
    e.preventDefault();
    flag = false;
    arr = [];
    let first_details = {};
    let ul = document.getElementById('myUl');
    var items = ul.getElementsByTagName("li");
    
    if(items.length===1){
        let idx = 0;
        let details = getELements(idx);
        first_details = details;
        console.log(first_details);
        flag = true;
        clearInput(idx);
    }
    else{
        for(let i=0;i<items.length;i++){
            let details = getELements(i);
            if(checkInValidInput(details)){
                let idxx = i+1;
                alert('please fill the valid input in form' +idxx);
                break;
            }
            else{
                arr.push(details);
                clearInput(i);
            }
            console.log("---------");
            console.log(arr);
            flag = true;
        }
    }
    if(flag){
        alert("forms saved successfully");
    }
   
}

// function for cross button
function cross_func(id){
    console.log(freq);
    console.log(id);
    // let idd = parseInt(id);
    // idd = idd;
    var details = getCrossElement(id);
    console.log(details);
    if(checkInValidInput(details)===false){
        alert("you are deleting the filled form");
    }
    var container = 'container'+id;
    console.log(container);
    var div = document.getElementById(container);
    var par = div.parentElement;
    par.remove();
    freq--;

    let ul = document.getElementById('myUl');
    var items = ul.getElementsByTagName("li");
    var len = items.length;
    console.log(items.length);
    freq = len;

    let ball_el = document.querySelectorAll('.balls');

    for(let i=0;i<ball_el.length;i++){
        ball_el[i].innerHTML = i+1;
    }

    // let i = id+1;
    // let last = len;
    // for(let j=id;j<=last;j++){
    //     var ball = document.getElementById('ball'+i);
    //     console.log("i = " +i);
    //     ball.innerHTML = i-1;
    //     i++;
    // }

    let ul1 = document.getElementById('myUl');
    var item1 = ul1.getElementsByTagName("li");

    if(item1.length==1){
        let cross_el = document.querySelectorAll('.cross1');
        cross_el[0].style.visibility = "hidden";
    }
    
}



addbtn.addEventListener('click', addDetails);
savebtn.addEventListener('click',showDetails);

// cross.addEventListener('click',crossFunc);