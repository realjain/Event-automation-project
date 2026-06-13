const express=require('express')
const router=express.Router();
const {verifyToken,isAdmin}=require('../middleware/authMiddleware')
const event_model=require('../models/event_model');

router.get('/',verifyToken,async(req,res)=>{
    let events= await event_model.find();
    res.send(events)
})

// router.post('/',verifyToken,isAdmin,async(req,res)=>{
//     const newEvent=new event_model(req.body);
//     await newEvent.save();
//     res.status(201).send(newEvent);
// })


//fetching single event details
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const event = await event_model.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


router.put('/organizer/edit/:id', verifyToken, async (req, res) => {
  try {
    if (req.user.role !== 'organizer') {
      return res.status(403).json({ message: 'Access denied' });
    }
    // Make sure the organizer owns the event
    const event = await event_model.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    console.log("req.user:", req.user);
console.log("event.organizer:", event.organizer.toString());
    if (event.organizer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const updatedEvent = await event_model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({ message: 'Event updated successfully', updatedEvent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


router.post('/organizer/create',verifyToken,async(req,res)=>{
    if(req.user.role!=='organizer'){
        return res.status(403).json({message:"Access denied"})
    }
    const newEvent=new event_model({
        ...req.body,
        organizer:req.user._id
    });
    await newEvent.save();
    res.status(201).send(newEvent); 
    });


router.get('/organizer/events',verifyToken,async(req,res)=>{
    if(req.user.role!=='organizer'){
        return res.status(403).json({message:"Access denied"})
    }
    let events=await event_model.find({organizer:req.user._id});
    res.send(events)
})




router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const event = await event_model.findById(req.params.id);

    if (!event) return res.status(404).json({ message: "Event not found" });
    console.log('role in event delete route:',req.user.role)

    if(req.user.role!=='organizer' && req.user.role!=='admin'){
        return res.status(403).json({message:"Access denied"})
    }

    const deletedEvent = await event_model.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Event deleted successfully", deletedEvent });
    console.log('Deleted event:',deletedEvent)
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports=router