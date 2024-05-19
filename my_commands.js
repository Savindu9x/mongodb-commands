// Last Updated: 2024-05-19

show dbs

use admin

db.dropDatabase()

db.createCollection("restaurants")

db.restaurants.insertOne({name: "Tyler", Age:30, GPA:3.3})

db.restaurants.insertMany([])

// retrieve all in collection
db.restaurants.find({query},{projection})

// sort 1-ascending, -1 > descending
db.restaurants.find({borough: 'Brooklyn'},{name:1, _id:0}).sort({restaurant_id: 1}).limit(2)

// checks if field exists
db.restaurants.find({restaurant_id:{$exists:false})

// update single document
db.restaurants.updateOne({name:"Rivirea Caterer"}, {$set:{cuisine: "Donuts"}})

// update multiple documents
db.restaurants.updateMany({city:"Chicago"}, {$set:{cuisine: "Default"}})


// delete single document
db.restaurants.deleteOne({city:"Vancouver"})

// Not equal operator
db.restaurants.find({cuisine:{$ne:"American"}}, {name:1, _id:0}).count()

db.restaurants.find({address.zipcode: {$lt:11120}})

// greater than operator
db.restaurants.find({grades:{$elemMatch:{score:{$gt: 70}}}}, {name:1, _id:0}).count()
