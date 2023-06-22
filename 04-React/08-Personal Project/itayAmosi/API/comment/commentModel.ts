import mongoose, { Schema, Document } from "mongoose";

interface Comment {
  user: string;
  project:string;
  comment: string;
}

const CommentSchema = new Schema<Comment>({
  user: {
    type: String,
    ref:"Users"

  },
  project: {
    type: String,
    ref:"Project"
  },
  comment: String,

});

const CommentModel = mongoose.model<Comment>("Comment", CommentSchema);

export default CommentModel;
