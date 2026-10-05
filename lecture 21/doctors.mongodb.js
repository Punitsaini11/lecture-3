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

db.doctors.insertMany([
    {
        name: "Dr. Williams",
        specialty: "Pediatrics",
        experience: 5,
        hospital: "Children's Hospital"
    },
    {
        name: "Dr. Brown",
        specialty: "Orthopedics",
        experience: 12,
        hospital: "Sports Medicine Center"
    }
])      