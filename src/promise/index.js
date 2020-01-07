const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey')
        } else {
            reject('Whoops!');
        }
    });
};

somethingWillHappen().then(response => console.log(response)).catch(err => console.err(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('true');
            }, 2000);
        } else {
            //mejor debugging
            const error = new Error('Whoops!');
            reject(error);
        }
    });
}

somethingWillHappen2().then(response => console.log(response)).catch(err => console.log(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()]).then(response => {
    console.log('Array de resultados:', response);
}).catch(err => {
    console.error(err);
})