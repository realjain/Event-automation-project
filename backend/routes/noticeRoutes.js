const express=require('express');
const router=express.Router();
const {verifyToken,isAdmin}=require('../middleware/authMiddleware');
const notice_model=require('../models/notice_model');

router.get('/',verifyToken,async(req,res)=>{
    let notices=await notice_model.find()
    res.send(notices)
})

router.get('/:id',verifyToken,isAdmin,async(req,res)=>{
    try {
        const notice= await notice_model.findById(req.params.id);
        if (!notice) return res.status(404).json({ message: "Notice not found" });
        res.status(200).json(notice);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
      }
})

router.put('/:id',verifyToken,isAdmin,async(req,res)=>{
    try{
        const updatedNotice=await notice_model.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true,runValidators:true}
        )
    res.status(201).json({message:"Notice is updated successfuly"});
    }catch(err){
        res.status(403).json({message:"Kuch gadd badh hai re dada"})
    }
})

router.post('/create',verifyToken,isAdmin,async(req,res)=>{
    const newNotice=new notice_model({
            ...req.body,
        });
    await newNotice.save();
    res.status(201).send(newNotice)
});

router.delete('/:id',verifyToken,isAdmin,async(req,res)=>{
    let deletedNotice=await notice_model.findByIdAndDelete(req.params.id)
    res.send(deletedNotice)
})

module.exports=router;