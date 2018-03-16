function init() {
    for (let i = 1; i <= 100; i++) {
        const fizz = i % 3 == 0;
        const buzz = i % 5 == 0;

        // One way
        if (fizz && buzz) {
            console.log('FizzBuzz');
        } else if (fizz) {
            console.log('Fizz');
        } else if (buzz) {
            console.log('Buzz');
        } else {
            console.log(i);
        }

        // An alternative approach

        // let msg = '';

        // if(fizz) {
        //     msg += 'Fizz'
        // }

        // if(buzz) {
        //     msg += 'Buzz'
        // }

        // console.log(msg || i);
    }
}

module.exports = {init}
