use("HospitalDB");

// db.doctors.find()
//create operation
//1.insert 2.insert one 3.insert many

// db.doctors.insert({
//     name: "Dr. Smith",
//     specialty: "Cardiology",
//     experience: 10,
//     hospital: "General Hospital",
//     fees: 15000      
// })

// db.doctors.insertOne({
//     name: "Dr. Johnson",
//     specialty: "Neurology",
//     experience: 8,
//     hospital: "City Hospital",
//     fees: 18000
// })

// db.doctors.insertMany([
//     {
//         name: "Dr. Williams",
//         specialty: "Pediatrics",
//         experience: 5,
//         hospital: "Children's Hospital",
//         fees: 12000
//     },
//     {
//         name: "Dr. Brown",
//         specialty: "Orthopedics",
//         experience: 12,
//         hospital: "Sports Medicine Center",
//         fees: 15000
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
// db.doctors.deleteOne({ name: "Dr. Johnson" })

// db.doctors.find(
//     { experience: { $gt: 5 } }
// )
 
// db.doctors.find(
//     { specialty: { $eq: "Cardiology" } }
// )

// db.doctors.find(
//     { 
//         experience: { $gte: 5, $lte: 10 } }
// )   

// db.doctors.find({
//     $or: [
//         { specialty: "Cardiology" },
//         { fees: { $lt: 15000 } }
//     ]}

// )

// db.doctors.find({}, { name: 1, specialty: 1})

// db.doctors.find().limit(2)
// db.doctors.find().skip(2).limit(2)

db.doctors.find().sort({ fees: -1 }) //ascending order 1,2,3,4,5
db.doctors.find().sort({ fees: 1 }) //descending order 5,4,3,2,1



