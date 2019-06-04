import D = require('../TypeScript/ClinicManagementUtil');
const file = require('fs');
const read1 = require('readline-sync');

var data = file.readFileSync('ClinicManagement.json');
var object = JSON.parse(data)

var patient = new D.Data.Patient;
var doctor = new D.Data.Doctor;
var clinic = new D.Data.Clinic;
while (number != 5) 
{
    console.log("\n\t\t|-----Clinique Management---------|");
    console.log("\t\t|                             \t  |");
    console.log("\t\t| 1.Search for Doctors\t\t  |");
    console.log("\t\t| 2.Search for Patients\t\t  |");
    console.log("\t\t| 3.Take Appointment from Doctors |");
    console.log("\t\t| 4.Appointment Details\t\t  |");
    console.log("\t\t| 5.Exit     \t\t\t  |");
    console.log("\t\t|                              \t  |");
    console.log("\t\t|---------------------------------|\n");
    var number = read1.question("Enter your Choice?: ");
    console.log();

    switch (parseInt(number)) 
    {
        case 1:
            doctor.searchDoctor(object)

        case 2:
            patient.searchPatient(object)

        case 3:
            doctor.appointment(object)

        case 4:
            clinic.showReport(object)

        case 5:
            console.log("Exiting the Program...!")
            break;
            
        default:
            console.log("Please Enter correct choice!! ");
    }
}