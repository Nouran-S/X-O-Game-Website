const signUpBTN = document.getElementById('signUP_btn') // insert data
let data = []
const fs = require('fs')

signUpBTN.addEventListener('click', () => {
    data[0] = document.getElementById('user_name_field').value
    data[1] = document.getElementById('user_mail_field').value
    data[2] = document.getElementById('user_ps_field').value

    fs.writeFile('Output.txt', data[0], (err) => {
        if (err) throw err;
    })

    document.getElementById('user_name_field').value = 'Done'
    document.getElementById('user_mail_field').value = 'Done'
    document.getElementById('user_ps_field').value = 'Done'

});


