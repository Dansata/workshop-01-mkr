users.forEach(user => {
    const pictureUserUrl = user.picture
    const nameUser = document.createTextNode(`${user.name}`)
    const companyUser = document.createTextNode(user.number)            
    const statusUser = (user.isActive === true) ? 'Available' : 'Not Available Yet';            

    //Tags
    
    const divPerson = document.createElement('div')
    const divPersonClasses = ['person', 'd-flex', 'flex-row', 'align-items-center', 'justify-content-between']
    divPerson.classList.add(...divPersonClasses);
    section.appendChild(divPerson)

    const spanCol1 = document.createElement('span')
    const spanCol1Classes = ['d-flex', 'flex-row', 'align-items-center']
    spanCol1.classList.add(...spanCol1Classes)
    divPerson.appendChild(spanCol1)

    const imageDiv = document.createElement('div')
    spanCol1.appendChild(imageDiv)

    const profilePict = document.createElement('img')
    profilePict.setAttribute("src", pictureUserUrl)
    profilePict.setAttribute("width", "150")
    imageDiv.appendChild(profilePict)

    const nameDiv = document.createElement('div')
    nameDiv.className = 'm-3'
    spanCol1.appendChild(nameDiv)

    const namePlaceholder = document.createElement('h2')
    namePlaceholder.appendChild(nameUser)
    const positionPlaceholder = document.createElement('p')
    positionPlaceholder.appendChild(companyUser)
    nameDiv.append(namePlaceholder, positionPlaceholder)

    const spanCol2 = document.createElement('span')
    divPerson.appendChild(spanCol2)

    const statusP = document.createElement('p')
    const availability = document.createTextNode(statusUser)
    statusP.appendChild(availability)
    spanCol2.appendChild(statusP)

    const hr = document.createElement('hr')
    section.appendChild(hr)
})