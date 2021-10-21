const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    content: {type: String, required: true},
    rating: Schema.Types.ObjectId,
    // Add the 3 new properties below
    user: Schema.Types.ObjectId,
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

const drinkSchema = new Schema({
    name: String,
    img: {type: String, default: '/img/placeholder.jpg'},
    ingredients: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Drink', drinkSchema);