const values = [false, true]; 

values.forEach(X => {
    values.forEach(Y => {
        let expression1 = !(X || Y); 
        let expression2 = !X && Y;  
        let expression3 = X && !Y;   

        console.log(`X: ${X}, Y: ${Y}`);
        console.log(`не (X или Y): ${expression1}`);
        console.log(`не X и Y: ${expression2}`);
        console.log(`X и не Y: ${expression3}`);
        console.log('-------------------');
    });
});