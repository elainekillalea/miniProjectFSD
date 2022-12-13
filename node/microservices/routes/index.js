let express = require('express');
let router = express.Router();

let Mongoose = require('mongoose').Mongoose;
let Schema = require('mongoose').Schema;

let oldMong = new Mongoose();
oldMong.connect('mongodb://127.0.0.1:27017/db');

let studentSchema = new Schema({
  meetingId: String,
  name: String,
  image: String,
  age: String,
  grade: String
}, { collection: 'students' });

let students = oldMong.model('students', studentSchema);

let blogSchema = new Schema({
  blogId: String,
  title: String,
  image: String,
  location: String,
  details: String,
  created: new Date().toISOString()
}, { collection: 'blogs' });

let blogs = oldMong.model('blogs', blogSchema);

router.get('/', async function (req, res, next) {
  const students = await getStudents();
  res.render('index');
});

router.post('/getStudents', async function (req, res, next) {
  const students = await getStudents();
  res.json(students);
});

async function getStudents() {
  data = await students.find().lean();
  return { students: data };
}

router.post('/saveStudent', async function (req, res, next) {
  const students = await saveStudent(req.body);
  res.json(students);
});

async function saveStudent(theStudent) {
  console.log('theStudent: ' + theStudent);
  await students.create(theStudent,
    function (err, res) {
      if (err) {
        console.log('Could not insert')
        return { saveStudentResponse: "fail" };
      }
    }
  )
  return { saveStudentResponse: "success" };
}

router.delete('/deleteStudent', async function (req, res, next) {
  console.log(JSON.stringify(req.body));
  const students = await deleteStudent(req.body);
  res.json(students);
});

async function deleteStudent(theStudent) {
  console.log('theStudent: ' + theStudent);
  await students.deleteOne(theStudent,
    function (err, res) {
      if (err) {
        console.log('Could not delete')
        return { deleteStudentResponse: "fail" };
      }
    }
  )
  return { deleteStudentResponse: "success" };
}

module.exports = router;