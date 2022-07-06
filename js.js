let getinputvalue = () => {

try {
    let message='';
    let myinputfield =document.querySelector('#exampleInputEmail1');
    let myinputvalue =document.querySelector('#exampleInputEmail1').value;
    let divmessage =document.querySelector('.showmessage');
    console.log(myinputvalue)
    if (myinputvalue === 'yes') {
        myinputfield.style.border="1px solid green";
        message='Approved';
        divmessage.innerHTML=message;
        
    } else {
        myinputfield.style.border="1px solid Red";
        message='Rejected';
        divmessage.innerHTML=message;
        
    }

} catch (error) {
    alert(error.mrssage)
}



}