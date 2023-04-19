function Student(rollno,firstName,lastName) {
    this.rollno = rollno;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullNameUsingAnonymous = function(){
       setTimeout(function(){
          //creates a new instance of this ,hides outer scope of this
          console.log(this.firstName+ " "+this.lastName)
       },1000)
    }
    this.fullNameUsingArrow = function(){
       setTimeout(()=>{
          //uses this instance of outer scope
          console.log(this.firstName+ " "+this.lastName)
       },2000)
    }
 }
 const s1 = new Student(101,'Mohammad','Mohtashim')
 s1.fullNameUsingAnonymous();
 s1.fullNameUsingArrow();

 void function iife_void() { 
   var msg = function () {console.log("hello world")}; 
   msg(); 
}();
