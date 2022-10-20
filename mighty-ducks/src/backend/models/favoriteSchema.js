const mongoose = require('mongoose');

const Favorite = new mongoose.Schema(
    'Favorite',

    new Schema(
        {
            userFrom: {
                type: Schema.Types.ObjectId,
                ref:'User'
            },
            flight: Object,
        },
        { timestamps: true }
    )
);

module.exports = mongoose.model('favorite', favoriteSchema);