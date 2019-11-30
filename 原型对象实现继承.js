// 构造函数1
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.sayHi = function(){
    console.log('我叫'+ this.name + ',我今年' + this.age + '岁了。')
}
// 构造函数2
function Student(name,age,gender){
    Person.call(this,name,age);
    this.gender = gender;
};

Student.prototype = new Person('姜佩佩',23);

Student.prototype.construrtor =  Student;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
let s1 = new Student('张亮',23,'男');
console.log(s1);
s1.sayHi();
Student.prototype.sayHi();
s1.__proto__.sayHi();


