const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let listingSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    image:{
        url:String,
        filename:String,
    },
    price:{
        type:Number
    },
    location:{
        type:String
    },
    country:{
        type:String
    },
    reviews:[{
        type: Schema.Types.ObjectId,
        ref:"Review"
    },],
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    geometry: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
          },
          coordinates: {
            type: [Number],
          }        
    },
    filter: {
        type:String
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
