import Product from '../models/product.model.js'
import mongoose from 'mongoose'

export const getProducts=async(req,res)=>{
    try {
        const products=await Product.find({})
        res.status(200).json({success:true,data:products})
    } catch (error) {
        console.log("Error in get product: ",error.message);
        res.status(200).json({success:false, message:"products couldn't be fetched"})
    }
}


export const createProducts=async(req,res)=>{
    const product=req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success:false, message: "Please provide all fields"})
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({ success:true, data:newProduct})
    } catch (error) {
        console.log("Error in create product: ",error.message);
        res.status(200).json({success:false, message:"product not created"})
    }
}


export const updateProducts=async(req,res)=>{
    const {id}=req.params;
    const product=req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ success:false, message:"invalid id"})
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true})
        res.status(201).json({ success:true, data:updatedProduct})
    } catch (error) {
        res.status(500).json({ success:false, message:"couldn't update"})
    }
}



export const deleteProducts=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ success:false, message:"invalid id"})
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"product deleted"})
    } catch (error) {
        console.log("Error in delete product: ",error.message);
        res.status(500).json({success:false, message:"product not found"})
    }
}