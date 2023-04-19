var object1 = new Object();
object1.name = "jinal";
object1.surname = "kansagara";
object1.age = "23";
console.log(object1);

function Car() {
    this.make = "ford"
}
var obj = new Car();
obj.model = "f1";
console.log(obj);

var roles = {
    type: "role",
    displayType: function () {
        console.log(this.type);
    }
}

var super_role = Object.create(roles);
super_role.displayType();
var guest_role = Object.create(roles);
guest_role.type = "Super Admin";
guest_role.displayType();

var a1 = { a: "hu1" };
var a2 = { b: "h2" };
var a3 = { c: "h3" };

var object2 = Object.assign(a1, a2, a3);
console.log(object2);
delete object2.c;
console.log(object2);

var text = "Hello 34tr3jng:aerfwqrp34\n World"; 
console.log(text)  

var raw_text = String.raw`Hello \n World ` 
console.log(raw_text)