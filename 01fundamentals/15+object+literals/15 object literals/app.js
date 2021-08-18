const user = {
    id: 7,
    email: "michael.lawson@reqres.in",
    dob: 1987,
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
    department: {
        name: 'IT',
        position: 'programmer'
    },
    tasks: ['creating apps', 'meetings'],
    getAge: function () {
        return new Date().getFullYear() - this.dob
    }

}

let val
val = user.first_name
val = user['last_name']
val = user.dob
val = user.tasks[1]
val = user.department['position']
val = user.getAge()
// console.log(val)
for (let i = 0; i < user.tasks.length; i++) {
    const element = user.tasks[i];
    console.log(element)

}