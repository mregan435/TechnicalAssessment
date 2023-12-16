const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const minStepsToStrongPassword = require('../../assignment/assessmentOne');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/minimizeDifferenceDB').catch((error)=>{console.log(error.message);});

// MongoDB schema and model
const result_schema = new mongoose.Schema({
  password: {type : String},
  steps: {type:String},
});

const Result = mongoose.model('Result', result_schema);

app.post('/check_strong_password', async (request, response) => {
  const { password } = request.body;
  let steps = minStepsToStrongPassword(password)

  const result = new Result({
    password,
    steps,
  });

  try {
    await result.save();
    response.json(steps);
  } catch (error) {
    response.status(500).json({ success: false, message: 'Error saving result to MongoDB' });
  }

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
