// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.50);
// const product3 = new Product("Underwear", 100.00);

// product1.displayProduct();

// const total = product3.calculateTotal(salesTax);
// console.log(`Total price (with tax): $${total.toFixed(2)}`);


class chart{
    constructor(data, labels){
        this.data = data;
        this.labels = labels;
    }
    calculateAverage(){
        let average = 0;
        for(let i = 0; i < this.data.length; i++){
            average += this.data[i];
        }
        average = average / this.data.length;
        // return average;
        console.log(`average is ${average}`);
    }
}
data1 = [2, 5, 2, 1, 10, 4];
labels1 = ["a", "b", "c", "d", "e", "f"];
const x = new chart(data1, labels1);
x.calculateAverage();
console.log(x.data[2]);
dat2 = [1,1,1,1,1,1,1,1,1,1,1,1,1]
lab = [1,1,1,1,1,1,23,12,,1123,1213,1]

const y = new chart(dat2, lab);
console.log(y)
// z = 5
// while(z > 0){
//     console.log(z);
//     z--;
// }
