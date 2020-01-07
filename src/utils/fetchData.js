let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();

        //por defecto es true
        xhttp.open('GET', url_api, true);

        xhttp.onreadystatechange = (() => {

            //Quiero que sea en valor y en tipo el mismo elemento
            if (xhttp.readyState === 4) {

                (xhttp.status === 200) ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ', url_api));

                // if (xhttp.status === 200) {
                //     callback(null, JSON.parse(xhttp.responseText));
                // }
                // else {
                //     const error = new Error('Error ' + url_api);
                //     return callback(error, null);
                // }
            }
        });

        xhttp.send();
    });
};

module.exports = fetchData;