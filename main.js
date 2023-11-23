const TotalNumber = () => {
    let a = +document.getElementById('a').value
    let b = +document.getElementById('b').value
    let amal = document.getElementById('amal').value
    let result = null
    if (amal === '-') {
        result = a - b
    } else if (amal === '+') {
        result = a + b
    } else if (amal === '*') {
        result = a * b
    } else if (amal === '/') {
        result = a / b
    }
    document.getElementById('result').innerText = result

}

const Buyticket = () => {
    let ticket = []
    let Firstname = document.getElementById('Firstname').value
    let Lastname = document.getElementById('Lastname').value
    let Price = document.getElementById('price').value
    let oyin = document.getElementById('oyin').value

    ticket.push(
        { Firstname: Firstname, Lastname: Lastname, Price: Price, oyin: oyin }
    )
    let tr = ""

    for (let item of ticket) {
        tr += "<tr>" +
            "<td>" + item.Firstname + "</td>" +
            "<td>" + item.Lastname + "</td>" +
            "<td>" + item.oyin + "</td>" +
            "<td>" + item.Price + "</td>" +
            "</tr>"
    }
    document.getElementById('tbody').innerHTML = tr
}