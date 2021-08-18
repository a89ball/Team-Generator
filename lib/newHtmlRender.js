const path = require("path");
const fs = require("fs");


function managerTemplate(name, id, email, role, officeNumber) {
    const manager = `<div class='container'>
    <div id='results'>
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-primary">
              <p class='text-light'>${name}</p>
              <p class='text-light'>${role}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}"></a></li>
                <li class="list-group-item">Office number: <a href="${officeNumber}">}</li>
            </ul>
        </div>
    </div>
</div>`
}
function managerTemplate(name, id, email, role, officeNumber)

function finalRender(employeeArray) {
    //First generate manager card and use for loops in order to ensure that we can keep making cards.
    const returnManagerTemplate = managerTemplate[i];
    for (let i = 0; i < managerTemplate; i++) {
        i < managerTemplate
    }

}

    


finalRender()