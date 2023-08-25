import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const groupTypeEnum = ['study', 'project'];
// prettier-ignore
const locationsEnum = [
  '전국', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '강원', '경기',
  '경남', '경북', '전남', '전북', '충남', '충북', '제주'
];

const groupSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    currentUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    groupType: { type: String, enum: groupTypeEnum, required: true },
    location: { type: String, enum: locationsEnum, required: true },
    skills: [{ type: String }],
    imageUrl: { type: String },
    maxMembers: { type: Number },
    viewCount: { type: Number, default: 0 },
    wishCount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Group', groupSchema);
