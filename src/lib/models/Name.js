import mongoose, { Schema, model, models } from "mongoose";

const NameSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Name = mongoose.models.Name || mongoose.model("Name", NameSchema);

export default Name;
