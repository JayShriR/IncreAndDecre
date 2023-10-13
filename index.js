const countvalue=document.getElementById("counter");

const increament=()=>{
    //get vale
    let value=parseInt(countvalue.innerText);
    //increament value
    value=value+1;
    //set value
    countvalue.innerText=value;
};


const decreament=()=>{
    //get value
    let value=parseInt(countvalue.innerText);
    //decrement value
    value=value-1;
    //set value
    countvalue.innerText=value;
};