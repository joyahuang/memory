import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String, //name of creator
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
  creator: String,
});
var PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
