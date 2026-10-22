use("HospitalDB");

// db.doctors.find()
//create operation
//1.insert 2.insert one 3.insert many

// db.doctors.insert({
//     name: "Dr. Smith",
//     specialty: "Cardiology",
//     experience: 10,
//     hospital: "General Hospital"        
// })

// db.doctors.insertOne({
//     name: "Dr. Johnson",
//     specialty: "Neurology",
//     experience: 8,
//     hospital: "City Hospital"
// })

// db.doctors.insertMany([
//     {
//         name: "Dr. Williams",
//         specialty: "Pediatrics",
//         experience: 5,
//         hospital: "Children's Hospital"
//     },
//     {
//         name: "Dr. Brown",
//         specialty: "Orthopedics",
//         experience: 12,
//         hospital: "Sports Medicine Center"
//     }
// ])  

// read operation 1.find() 2.findOne()
// db.doctors.find()
// db.doctors.findOne()
// db.doctors.find({ name: "Dr. Smith" })
// db.doctors.find({ hospital: "City Hospital" }) 

// update operation 1.updateOne() 2.updateMany()
// db.doctors.updateOne(
//     { name: "Dr. Smith" },
//     { $set: { experience: 11 } }
// )   

// db.doctors.updateMany(
//     { hospital: "City Hospital" },
//     { $set: { specialty: "Neurology",
//         fees:14000
//      } }
// )   

// delete operation 1.deleteOne() 2.deleteMany()
db.doctors.deleteOne({ name: "Dr. Johnson" })  
 