// without closure
function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    inner();
}
outer(); // 1
outer(); // 1



// example of the closure
function outer1() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;
}
const fn = outer1(); // fn is function, which has access to the scope of outer1(). 
                        // It has persisent memory which could hold on to live data between executions.
                        // That is called closure.
fn(); // 1
fn(); // 2
