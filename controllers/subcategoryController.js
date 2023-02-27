const subcategory = require("../models/subcategoryModel");
const category = require("../models/category");
const liveController = {};

liveController.subcategoryPost = async function (req, res) {

    try {
        if (req.files.thumbnail) {
            req.body.thumbnail = req.files.thumbnail[0].path
        }

        category.find(req.body.categoryId);
        const subcategorys = new subcategory(req.body);
        // subcategory.find(req.body.categoryId);
        console.log(req.params.categoryId, "subbbbbbcaaaatt")
        category.aggregate([
            {
                $match: {
                    from: 'category',
                    localField: '_id',
                    foreignField: 'categoryId',
                    connectToField: "categoryId",
                    startWith: "$categoryId",
                    as: 'subcategory'
                }
            }
        ])
        console.log(req.body.categoryId, "cateidddddd");

        await subcategorys.save();
        return res.status(200).send({
            success: true,
            data: subcategorys
        })

    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err + "err in "
        })
    }
}

liveController.subcategoryGet = async function (req, res) {
    try {
        const subcategorys = await subcategory.find();
        return res.status(200).send({
            success: true,
            data: subcategorys
        })
    } catch (err) {
        return res.status(500).send({
            success: false,
            msg: err
        })
    }
}

module.exports = liveController;