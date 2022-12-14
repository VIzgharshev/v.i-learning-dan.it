class Employee {
  //start setter
  constructor(name, age, salary) {
    this._name = name;
    this._age = age;
    this._salary = salary;
  }
  //--------------------Name--------------------
  get name() {
    return `Hello ${this._name}!`;
  }
  set name(name) {
    if (typeof name != 'string') {
      console.log('Wrong name!!!');
      return;
    }
    return (this._name = name);
  }

  //--------------------Age--------------------
  get age() {
    return `User age is ${this._age}`;
  }
  set age(value) {
    if (typeof value != 'number') {
      console.log('Enter correct age please!');
      return;
    }
    return (this._age = value);
  }

  //--------------------Salary--------------------
  get salary() {
    return `${this._name} have salary: ${this._salary} $`;
  }
  set salary(value) {
    if (typeof value != 'number') {
      console.log('Wrong salary!!!');
      return;
    }
    return (this._salary = value);
  }
}

//__________________________________________________________

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this._lang = lang;
  }
  //--------------------Salary--------------------
  get salary() {
    return this._salary * 3;
  }
  //--------------------Langs--------------------
  get lang() {
    return `${this._name} knows such program languages as: ${this._lang}!!!`;
  }
  set lang(value) {
   return this._lang += ', ' + value
  }
}

let user = new Employee('Vova', 29, 1500);
console.log(user);

let user2 = new Programmer('Dima', 19, 900, 'JavaScript, PHP');
let user3 = new Programmer('Olya', 20, 1100, 'JavaScript, Java, PHP');
let user4 = new Programmer('Vika', 31, 1300, 'JavaScript, Java, Python, PHP');
console.log(user2);
console.log(user3);
console.log(user4);
