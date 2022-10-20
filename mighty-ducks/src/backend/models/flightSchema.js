const mongoose = require('mongoose');

const Flight = new mongoose.Schema(
    'Flight',

    new Schema(
        {
            Company:{
                type:String,
                dafault:false,
            },
            AirportD: {
                type: String,
                default: false,
            },
            AirportA:{
                type:String,
                default:false,
            },
            Date:{
                type:String,
                default:false,
            },
            Price:{
                type:String,
                default:false,
            }
            
        },
        { timestamps: true }
    )
);

module.exports = mongoose.model('flight', Flight);