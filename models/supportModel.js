const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const support = new mongoose.Schema({
  order: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  mobileno: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active"
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    }
  ],
  slug: {
    type: String,
    slug: "title"
}
  
}, {
  timestamps: true
});

module.exports = mongoose.model('supports', support);
