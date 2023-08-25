import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  imgUrl: { type: String },
  introduce: { type: String },
  skills: [{ type: String }],
  joinGroup: [{ type: Schema.Types.ObjectId, required: true, ref: 'Group' }],
  wishGroup: [{ type: Schema.Types.ObjectId, required: true, ref: 'Group' }],
});

export default mongoose.model('User', userSchema);
