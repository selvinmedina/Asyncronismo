const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => {
            resolve('Do Something Async')
        }, 3000)
            : reject(new Error('Test Error'));
    })
}

const doSomething = async () => {
    //await = Vamos a esperar a que esto suceda hasta que se resuelva el caso de nuestra promesa
    const something = await doSomethingAsync();
    console.log(something);
    console.log(something);
}

console.log('Begore');
doSomething();
console.log('After');

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
    } catch (error) {
        console.error(error);
    }
}


console.log('Begore');
anotherFunction();
console.log('After');