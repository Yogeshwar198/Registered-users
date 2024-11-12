import { mongoose } from 'mongoose';


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true, 
});


const userModel = mongoose.model.user || mongoose.model('user', userSchema);

export default userModel;
