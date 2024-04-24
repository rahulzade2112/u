const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category_slug: {
    type: String,
    required: true,
    unique: true,
  },

  category_type: {
    type: String,
  },

  child_categories: [
    {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      category_slug: {
        type: String,
        required: true,
        unique: true,
      },
    },
  ],
});


const Category = mongoose.model("Category", CategorySchema);
