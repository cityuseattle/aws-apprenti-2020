// (function() {
//     window.onload = function() {
                
        function showTime() {
            let btn = document.getElementById('time');
            btn.insertAdjacentHTML('afterend', `${Date()}`);
            //p.innerHTML =`${Date()}`;
        }

        function multiply(p1, p2) {
            let p = document.getElementById('multiply');
            p.innerHTML = `This example calls a function which performs a calculation and returns the result: ${p1 * p2}`;
            return p1 * p2;
        }

        console.log("Server-Side javascript");
        console.log("\nBuilt-in Function");
        console.log("Display Date and Time");
        console.log(Date());

        console.log("\nUser-Defined Function");
        console.log("A multiplication function: ", multiply(6, 3));

        multiply(3.75, 2);