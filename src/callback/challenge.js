let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();

    //por defecto es true
    xhttp.open('GET', url_api, true);

    xhttp.onreadystatechange = function (event) {

        //Quiero que sea en valor y en tipo el mismo elemento
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }
            else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }

    xhttp.send();
}