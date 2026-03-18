let contacts = [];
let nameCon = document.getElementById(`contact-name`);
let phoneCon = document.getElementById(`contact-phone`);
let emailCon = document.getElementById(`contact-email`)
let btnCon = document.getElementById(`btn-add`);
btnCon.addEventListener(`click`,function(e){
    e.preventDefault();
    addContact();
});
function addContact(){
    let id = contacts.length + 1;
    let newContact = {
        id,
        name: nameCon.value,
        phone: phoneCon.value,
        email: emailCon,
    }
    contacts.push(newContact);
    console.log(contacts)
    localStorage.setItem(`myContact`,JSON.stringify(contacts));
}

function display(list) {
    
}