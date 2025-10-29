// Helper function that creates a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle multiple delays cleanly
async function runCode() {
    let x = `failure`;
    var me = `i am a ${x}`;
    
    console.log(me);
    
    await delay(2000);
    console.log('I go.on for 5 secs');
    await delay(5000)
    x = `sukcess`;
    me = `i am a ${x}`;
    console.log(me);
    
    // // You can easily add more delays
    // await delay(2000);
    // console.log('Another 2 second delay');
    
    // await delay(1000);
    // console.log('Final 1 second delay');

    // WITHOUT await: Everything happens at once
setTimeout(() => console.log('1'), 1000);
console.log('2'); // Prints immediately, before the setTimeout

// WITH await: Things happen in order
await delay(1000); // WAIT here
console.log('1');  // Then print 1
console.log('2');  // Then print 2
}

runCode();

