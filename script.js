//task1

// function propsCount(currentObject) {
//     return Object.keys(currentObject).length;
// }

// let car={
//     brend:'BMW',
//     color:'red',
//     isRun:true,
// }

// console.log(propsCount(car));

//task2

// let fishing={
//     rod:'shimanu',
//     hook:'kamatsu',
//     fishingLine:'Pro carp',
//     river:'Dnipro',
// }

// function showProps(obj) {
//     let result=[]
//     for (let i = 0; i < obj.length; i++) {
//         result.push(obj[i])

//     }
//     return Object.keys(obj)

// }

// console.log(showProps(fishing))
// console.log(Object.values(fishing))

//3
// class Person {
//     constructor(name,surname) {
//         this.name=name;
//         this.surname=surname;
//     }
//     showFullName() {
//         return this.name + ' ' + this.surname;
//     }
// }

// class Student extends Person {
//     constructor(name,surname,year) {
//         super(name,surname);
//         this.year=year;
//     }
//     showFullName(midleName) {
//         return this.name + ' ' +this.surname + ' ' + midleName;
//     }
//     showCourse() {
//         return new Date().getFullYear()-this.year
//     }
// }

// const stud=new Student('Dmitro','Riaboshapka');
// console.log(stud.showFullName('Igorovitch'));
// const stud2=new Student('Dmitri','riaboshapka',2014)
// console.log(stud2.showCourse())


//task4

// class Worker {
//     _experience=1.2;
//     get experience() {
//         return this._experience
//     }
//     set experience(value) {
//         this._experience=value;
//     }
//     constructor(fullName,workingDays,dayRate) {
//         this.fullName=fullName;
//         this.dayRate=dayRate;
//         this.workingDays=workingDays;
//     }
//     showSalary() {
//         return this.dayRate * this.workingDays
//     }
//     showSalaryWithExperience() {
//         return this._experience * this.showSalary()
//     }
// }
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);                 
// console.log(worker1.showSalary());
// console.log("New experience: " + worker1.experience);
// console.log(worker1.showSalaryWithExperience());
// worker1.experience = 1.5;
// console.log("New experience: " + worker1.experience);
// console.log(worker1.showSalaryWithExperience());


// class GeometricFigure {
//     getArea() {
//         return 0;
//     }
//     getName() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }


// class Triangle extends GeometricFigure {
//     constructor(a,b,c) {
//         super()
//         this.a=a;
//         this.b=b;
//         this.c=c;
//     }

//     getArea() {
//         return this.a * this.b * this.c;
//     }
// }

// class Square extends GeometricFigure {
//     constructor(a) {
//         super()
//         this.a=a;
//     }
//     getArea() {
//         return this.a * this.a;
//     }
// }

// class Circle extends GeometricFigure {
//     constructor(r) {
//         super()
//         this.r=r;
//     }
//     getArea() {
//         return this.r * this.r * Math.PI
//     }

// }

// function handleFigures(figures) {
//     let totalArea=0;
//     figures.forEach(f => {
//         console.log(f.getName());
//         console.log(f.getArea());
//         totalArea+=f.getArea();
//     });
//     console.log(totalArea)
// }


// const figures = [new Triangle(4, 5,6), new Square(7), new Circle(5)];
// handleFigures(figures);






















// class CofeeMachine {
//     _waterAmount=0;
//     set waterAmount(value) {
//         if (value<0) {
//             throw new Error('Negativ voter amount')
//         }
//         this._waterAmount=value
//     }
//     get waterAmount() {
//         return this._waterAmount
//     }
//     constructor(power) {
//         this._power=power
//     }
// }
// const cofee=new CofeeMachine(100)
// cofee.waterAmount=-10

// class CofeeMachine {
//     #waterLimit=200
//     checkWater(value) {
//         if(value<0) {
//             throw new Error('negative water')
//         } if (value>this.#waterLimit) {
//             throw new Error('to match water')
//         }
//     }
// }

// const cofee=new CofeeMachine()
// cofee.checkWater(20033)