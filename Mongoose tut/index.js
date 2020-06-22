const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/eshanKart', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected!");
});



const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  const greeting = "Meow name is " +this.name;
  console.log(greeting);
}

//to make new collection
const Kitten = mongoose.model('harryKitten', kittySchema);


const harryKitten = new Kitten({ name: 'eshanvohra' });
const harryKitten2 = new Kitten({ name: 'eshanrovohra' });
// console.log(silence.name); // 'Silence'

// silence.speak();

harryKitten.save(function (err, harryKitten) {
  if (err) return console.error(err);
  harryKitten.speak();
});

harryKitten2.save(function (err, w) {
  if (err) return console.error(err);
  w.speak();
});

Kitten.find({name:"eshanvohra"},function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})