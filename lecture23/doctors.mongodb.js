// use("HospitalDB")

// db.docrtors.insertMany([
//     {
//         name: "Dr.Pulkit",
//         specialty: "Cardiology",
//         experience: 10,
//         hospital: "General Hospital",
//         fees: 15000,
//         salary: 200000
//     },
//     {
//         name: "Dr. love",
//         specialty: "Neurology", 
//         experience: 8,
//         hospital: "City Hospital",
//         fees: 18000,
//         salary: 250000
//     },
//     {
//         name: "Dr. Daizy",
//         specialty: "Pediatrics",
//         experience: 5,
//         hospital: "Children's Hospital",
//         fees: 12000,
//         salary: 150000
//     }
    
// ])

db.doctors.aggregate([
    {
        $match: {
            specialty: "Cardiology"
        }
    },
    {
        $project: {
            name:1,
            _id:0,
            fees:1,
            salary:1,
            experience:1
         
        }
    },
    {
        $group: {
            _id: "$specialty",
            totalFees: { $sum: "$fees" },
            maxsalary: { $max: "$salary" },
            averageSalary: { $avg: "$salary" },
            totalExperience: { $sum: "$experience" }
        }
    },
    {
        $sort: { totalFees: -1 }
    }
])  