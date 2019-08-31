/*var students = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 45678987,
      email: 'juan@gmail.com'
    },
    {
      firstName: 'Ana',
      lastName: 'Fernandez',
      dni: 45678989,
      email: 'ana@gmail.com'
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 45678956,
      email: 'pedro@gmail.com'
    }
  ]

  function Students(_firstName, _lastName, _dni, _email){
    this.firstName = _firstName
    this.lastName = _lastName
    this.dni = _dni
    this.email = _email
    id = Math.random()

    this.getId = function (){
        console.log(id) 
    }
    this.getFullName = function () {
        console.log('El nombre es '+ this.firstName + ' ' + this.lastName)
      }
}

var finalStudentsList =[];

  for (var i=0; i < students.length; i++) {
      var students = students[i];
      var studentList = new Students(students.firstName, students.lastName, students.dni, students.email);
      
      console.log(studentList.getFullName());
      finalStudentsList.push(studentList);
  }
  finalStudentsList[0].getFullName();


  var numbers = [1,2,3,4,5]

  function deleteElement (i, numbers){
      if (Array.isArray(numbers)){
      return numbers.splice(i,1);
  }
  }
  deleteElement(2,numbers);
  console.log(numbers);
  */


/* EJERCICIO 6*/

  function includesText(_string1, _string2){
      if (typeof _string1 === "string" && typeof _string2 === "string"){
        var upper1 = _string1.toUpperCase()
        var upper2 = _string2.toUpperCase()
      
      if  (_string2.indexOf(_string1) != -1){
        return true;
      }
        return false;
      }
      
  }
