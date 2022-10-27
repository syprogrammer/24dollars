const heading = document.getElementById('heading')
const description = document.getElementById('description')
const deliverylocation = document.getElementById('deliverylocation')
const adddelivery = document.getElementById('adddelivery')
const editbtn = document.getElementById('editheadingbtn')
const editdescriptionbtn = document.getElementById('editdescriptionbtn')
const editheading = () => {
    heading.contentEditable = 'true';
    heading.focus()
    setTimeout(() => {
        heading.contentEditable = "false";
    }, 10000);
}

editbtn.addEventListener('click', editheading)
editdescriptionbtn.addEventListener('click', () => {
    description.contentEditable = 'true'
    description.focus()
      setTimeout(() => {
        description.contentEditable = "false";
      }, 50000);
})

adddelivery.addEventListener('click', () => {
  const addnewaddress = prompt('Enter a new delivery address')  
  adddelivery.insertAdjacentHTML('afterend',`<div>${addnewaddress}</div>`
  )

})