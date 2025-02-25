const prompt = require('prompt-sync')();

const values = [false, true]; 

values.forEach(X => {
    values.forEach(Y => {
        let expression1 = !(X) && !(Y); 
        let expression2 = X || (!(X) && Y); 
        let expression3 = (!(X) && Y) || Y; 

        console.log(`X: ${X}, Y: ${Y}`);
        console.log(`не X и не Y: ${expression1}`);
        console.log(`X или (не X и Y): ${expression2}`);
        console.log(`(не X и Y) или Y: ${expression3}`);
        console.log('-------------------');
    });
});