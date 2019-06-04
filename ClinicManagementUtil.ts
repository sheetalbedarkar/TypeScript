export namespace Data{


var file1 = require('fs')
var readline = require('readline-sync')
export class Clinic {
   /**
    * @description : function to get name of doctor
    * @param {String} object 
    */
   getNameFromDoctor(object:any) {
      try {
         var nameArray = []
         var data = object.Doctor
         for (let key in data) {
            nameArray.push(data[key].Name)
         }
         return nameArray;
      } catch (e) {
         console.log(e.message);
      }
   }
   /**
    * @description : function to get Doctor ID from data
    * @param {Number} object 
    */
   getIdFromDoctor(object:any){
      try {
         var nameArray = [];
         var data = object.Doctor;
         for (let key in data) {
            nameArray.push(data[key].Id);
         }
         return nameArray;
      } catch (e) {
         console.log(e.message);
      }
   }
   /**
    * @description : function to get Doctor Specialisation 
    * @param {String} object 
    */
   getSpecialisationFromDoctor(object:any) {
      try {
         var nameArray = []
         var data = object.Doctor
         for (let key in data) {
            nameArray.push(data[key].Specialisation)
         }
         return nameArray;
      } catch (e) {
         console.log(e.message);
      }
   }
   /**
    * @description : function to get Name of Patient
    * @param {String} object 
    */
   getNameFromPatient(object:any) {
      try {
         var nameArray = [];
         var data = object.Patient;
         for (let key in data) {
            nameArray.push(data[key].Name);
         }
         return nameArray;
      } catch (e) {
         console.log(e.message);
      }
   }
   /**
    * @description : function to get Patient Id 
    * @param {Number} object 
    */
   getIdFromPatient(object:any) {
      try {
         var nameArray = [];
         var data = object.Patient;
         for (let key in data) {
            nameArray.push(data[key].Id);
         }
         return nameArray;
      } catch (e) {
         console.log(e.message);
      }
   }
   /**
    * @description : function to get PhoneNumber of patient
    * @param {Number} object 
    */
   getPhoneNumberFromPatient(object:any) {
      try {
         var nameArray = [];
         var data = object.Patient;
         for (let key in data) {
            nameArray.push(data[key].PhoneNumber);
         }
         return nameArray;
      } catch (e) {
         console.log(e.message);
      }
   }
   /**
    * @description : function to show details appointment of patient
    * @param {String} data 
    */
   showReport(data:any) {
      var c = Patient.length;
      try {
         console.log();
         console.log("PatientName\t\t DoctorName\t\t Appointment Taken on date ");
         console.log("---------------------------------------------------------------------------------");
         var data = file1.readFileSync('ClinicManagement.json');
         var object = JSON.parse(data);
        //  var doctor = data.Doctor;
         var newarr = [];
        //  var count = Doctor.cnt;////
         var data = object.Patient
         for (let key in data) {
            console.log(data[key].Name + "\t\t " + data[key].AppointmentFrom + "\t\t\t " + data[key].OnTheDayOf);
            newarr.push(data[key].AppointmentFrom);
         }
         //console.log(count);
         console.log("-------------------------------------------------------------------------");
      } catch (e) {
         console.log(e.message);
      }
   }
}

export class Doctor extends Clinic {

   constructor() {
      super();
   }

   searchDoctor(data:any) {
      var cnt = 0;
      // var Doctor1 = new Clinic;
      var doctor = data.Doctor;
      try {
         while (numbers != 3) {
            console.log("\t\t***********Search Doctor*************");
            console.log("\n\t\t\t1.Search Doctor by Name \n\t\t\t2.By ID \n\t\t\t3.By Specialization: ");
            var numbers = readline.questionInt("\n~Enter Your Choice : \n");
            console.log();
            switch (parseInt(numbers)) {
               case 1:
                  console.log("The Doctor Names are :")
                  console.log(this.getNameFromDoctor(data));
                  var name1 = readline.question("\nEnter Doctor Name: ");
                  for (const key in doctor) {
                     if (doctor[key].Name == name1) {
                        console.log("\n-----Your Doctor Information is--------\n");
                        console.log(doctor[key]);
                        console.log("-----------------------------------------");
                     }
                  }
                  break;
               case 2:
                  console.log("The Doctor ID's are :")
                  console.log(this.getIdFromDoctor(data));
                  var Id1 = readline.question("Enter Doctor ID: ");
                  for (const key in doctor) {
                     if (doctor[key].Id == Id1) {
                        console.log("-----Your Doctor Information is--------");
                        console.log(doctor[key]);
                        console.log("-----------------------------------------");
                     }
                  }
                  break;
               case 3:
                  console.log("Doctors Specilization are :")
                  console.log(this.getSpecialisationFromDoctor(data));
                  var sp = readline.question("Enter Doctor Specilization: ");
                  for (const key in doctor) {
                     if (doctor[key].Specialisation == sp) {
                        console.log("-----Your Doctor Information is--------");
                        console.log(doctor[key]);
                        console.log("-----------------------------------------");

                     }
                  }
                  break;
               default:
                  console.log("Please enter correct Choice!!");
                  break;

            }
         }
      } catch (e) {
         console.log(e.message);
      }
   }


   appointment(data:any) {
      var patient = data.Patient;
      var doctor = data.Doctor;
      var count = patient.length;
      var count;
      // var cnt = doctor.noOfPatient;
      //var Clinic1 = new Clinic;
      count++;
      try {
         var date = new Date();
         if (count > 5) {
            var rem = Math.floor(count / 5);
            var day = (date.getDate()) + rem;
         }
         else {
            var day = date.getDate();
         }

         do {
            var flag = true;
            var name = readline.question("Enter the PatientName :")
            var re = /^[A-Za-z]+$/;
            if (name.match(re)) {
               flag = true;
            } else {
               console.log("Please enter valid name");
               flag = false;
            }
         } while (flag != true);


         do {
            var flag1 = true
            var age = readline.questionInt("Enter the age of the Patient :")
            // var re = /^[A-Za-z]+$/;
            if (isNaN(age) || age < 1 || age > 100) {
               console.log("The age must be a number between 1 to 100");
               flag1 = false;
            } else {
               flag1 = true;
            }
         } while (flag1 != true);


         var Id = Math.floor(Math.random() * 100000);
         var PhoneNumber = readline.questionInt('Enter the phoneNumber :');
         while (PhoneNumber > 9999999999 || PhoneNumber < 999999999) {
            console.log("number should be of 10 digit");
            PhoneNumber = readline.questionInt('Enter valid phone number');
         }
         console.log("\n----------------Doctors available are------------\n");
         console.log(this.getNameFromDoctor(data));
         console.log();
         var appointmentFrom = readline.question('Enter the doctor name from you want to take appointment :')
         patient.push({
            "Name": name,
            "Id": Id,
            "PhoneNumber": PhoneNumber,
            "Age": age,
            "AppointmentFrom": appointmentFrom,
            "OnTheDayOf": day
            //---------
         })
         file1.writeFileSync('ClinicManagement.json', JSON.stringify(data));
         console.log("Your appointment is confirmed on :" + day + "/" + date.getMonth());
      } catch (e) {
         console.log(e.message);
      }
   }
}

export class Patient extends Clinic {
   constructor() {
      super();
   }

   searchPatient(data:any) {
      //var Patient1 = new Clinic;
      var patient = data.Patient;
      try {
         while (number1 != 4) {
            console.log("\n\t\t**************Search Patient*************");
            console.log("\n\t\t 1.Search Patient by Name \n\t\t 2.By ID \n\t\t 3.By MobileNumber \n\t\t 4.Exit");
            var number1 = readline.questionInt("Enter Your choice:");
            switch (parseInt(number1)) {
               case 1:
                  console.log("\n\t\t*********The Patients List***********\t\t\n");
                  console.log(this.getNameFromPatient(data))

                  //var name1 = readline.question("\nEnter Patient Name: ")
                  do {
                     var flag = true;
                     var name1 = readline.question("Enter the PatientName :")
                     var re = /^[A-Za-z]+$/;
                     if (name1.match(re)) {
                        flag = true;
                     } else {
                        console.log("Please enter valid name");
                        flag = false;
                     }
                  } while (flag != true);
                  for (const key in patient) {
                     if (patient[key].Name == name1) {
                        console.log("\t\t-----------Your Patient Information is-----------\t\t");
                        console.log((patient[key]));
                        console.log("\n----------------------------------------------------");

                     }
                  }
                  break;
               case 2:
                  console.log("The Patients ID are :");
                  console.log(this.getIdFromPatient(data));
                  var Id1 = readline.question("Enter Patient ID: ")
                  for (const key in patient) {
                     if (patient[key].Id == Id1) {
                        console.log("-----------Your Patient Information is-----------");
                        console.log(patient[key]);
                        console.log("---------------------------------------------------");
                     }
                  }
                  break;

               case 3:
                  console.log("\n\t\t********The Patient PhoneNumbers are**********\t\t\n");
                  console.log(this.getPhoneNumberFromPatient(data));
                  var phoneNumber1 = readline.question("Enter Patient MobileNumber: ")
                  for (const key in patient) {
                     if (patient[key].PhoneNumber == phoneNumber1) {
                        console.log("-----------Your Patient Information is-----------");
                        console.log(patient[key]);
                        console.log("---------------------------------------------------");
                     }
                  }
                  break;
               case 4:
                  break;

               default:
                  console.log("Please Enter Correct Choice!!");

            }
         }
      } catch (e) {
         console.log(e.message);
      }
   }
}
}

// module.exports = { Clinic, Doctor, Patient }