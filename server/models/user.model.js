const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    sparse: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    trim: true,
  },
  region: {
    type: String,
    enum: ['Nairobi', 'Coast', 'Rift Valley', 'Nyanza', 'Central', 'Western', 'Eastern', 'North Eastern'],
  },
  ageGroup: {
    type: String,
    enum: ['12-17', '18-24', '25-35'],
  },
  isGuest: {
    type: Boolean,
    default: false,
  },
  // role: {
  //   type: String,
  //   enum: ['student', 'teacher'],
  //   default: 'student',
  // },
}, { timestamps: true });

userSchema.methods.generateAuthToken = function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '7d' });
  return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
