const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const subcategory = new mongoose.Schema({
    // title: {
    //     type: String,
    //     required: true
    // },
    // image: {
    //     type: String,
    //     required: true
    // },
    // slug: {
    //     type: String,
    //     slug: "title"
    // },
    // status: {
    //     type: String,
    //     enum: ["Active", "Inactive"],
    //     default: "Active"
    // },
    category: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "category"
        }
    ],
    men:
        [
            {
                title: {
                    type: String,
                    required: true
                },
                slug: {
                    type: String,
                    slug: "title"
                },
                image: {
                    type: String
                },
                Status: {
                    type: String,
                    enum: ["Active", "Inactive"],
                    default: "Active"
                }
            }
        ],
    women:
        [
            {
                title: {
                    type: String,
                    required: true
                },
                slug: {
                    type: String,
                    slug: "title"
                },
                image: {
                    type: String
                },
                Status: {
                    type: String,
                    enum: ["Active", "Inactive"],
                    default: "Active"
                }
            }
        ],
    kid:
        [
            {
                title: {
                    type: String,
                    required: true
                },
                slug: {
                    type: String,
                    slug: "title"
                },
                image: {
                    type: String
                },
                Status: {
                    type: String,
                    enum: ["Active", "Inactive"],
                    default: "Active"
                }
            }
        ],
        slug: {
            type: String,
            slug: "title"
        }

}, {
    timestamps: true
});

module.exports = mongoose.model("subcategorys", subcategory);