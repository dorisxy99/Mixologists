const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    creator: Schema.Types.ObjectId,
    creatorName: String,
    creatorAvatar: String
});

const reviewSchema = new Schema({
    content: {type: String, required: true},
    rating: {type: Number, min: 1, max: 5, default: 5},
    // Add the 3 new properties below
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

const drinkSchema = new Schema({
    name: String,
    link: String,
    ingredients: String,
    creator: Schema.Types.ObjectId,
    comments: [commentSchema],
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('drinks', drinkSchema);