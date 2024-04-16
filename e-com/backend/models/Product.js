const mongoose =require("mongoose");

const ReviewShema=mongoose.Schema({
    text:{type: String },
    raiting:{type:Number },
    user:{type:mongoose.Schema.Types.ObjectId, ref:"User" ,required:true}
})

const ProductShema=mongoose.Schema({

    productname:{type: String, required:true} ,
    img :[{type:String , required:true}],
    reviews:[ReviewShema],
    description:{type: String, required:true} ,
    colors:[{type:String ,required:true}],
    sizes:[{type:String ,required:true}],
    price:{
        current:{type:Number,required:true},
        discount:{type:Number }
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,ref:"Category",
        required:true,
    } 
},
{timestamps:true}
);

const Product=mongoose.model( "Product" , ProductShema);

module.exports=Product;