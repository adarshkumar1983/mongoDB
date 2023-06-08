/**
 * @Author: Your name
 * @Date:   2023-04-21 14:58:06
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-05-21 12:22:08
 */
const express = require('express');
const Model = require('../models/model');
const ItemContainer = require('../models/item_container');
// const Book = require('../models/book');
const router = express.Router()

//Post Method
router.post('/post', async (req, res) => {
    // console.log("printing row requst body")
    console.log(req.body)
    const data = new Model(
    {
         name: req.body.name,
         description: req.body.description,
         type:req.body.type
    })
    try 
    {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
    res.status(400).json({ message: error.message })
    } 
})


// router.post('/relation/create', async (req, res) => {
//     // console.log("printing row requst body")
//     console.log(req.body)
//     const data = new ItemContainer(
//     {
//         item_name: req.body.item_name,
//         container_name: req.body.container_name
  
//     })
//     try 
//     {
//         const dataToSave = await  data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//     res.status(400).json({ message: error.message })
//     } 
// })

router.post('/relation/create', async (req, res) => {
    const { item_name, container_name } = req.body;
  
    try {
      let data = await ItemContainer.findOne({ item_name });
  
      if (data) {
        // If the item already exists, update the container_name
        if (data.container_name !== container_name) {
          data.container_name = container_name;
          const updatedData = await data.save();
          res.status(200).json(updatedData); // Return the updated data
        } else {
          res.status(200).json(data); // Return the existing data without making any updates
        }
      } else {
        // If the item doesn't exist, create a new document
        data = new ItemContainer({
          item_name,
          container_name
        });
  
        const newData = await data.save();
        res.status(200).json(newData); // Return the newly created data
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });




  ///
  
// Assuming you have already set up your Express app and imported the necessary dependencies

// GET /api/relation/getContainer

router.get('/relation/', async (req, res) => {
  const  item_name  = req.query.item_name;

  try {
    const data = await ItemContainer.findOne({ item_name});

    if (data) 
    {
      res.status(200).json({ container_name: data.container_name });
    } 
    else
    {
      res.status(404).json({ message: 'Container not found' });
    }
  }
   catch (error) {
    res.status(500).json({ message: error.message });
  }
});

  
  




// router.get('/getAllO', async (req, res) => {
//     try {

//         const data = await Model.find({ type: 'object' });
//         res.json(data)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
  
// })
// router.get('/getAllC', async (req, res) => {
//     try {

//         const data = await Model.find({ type: 'container' });
//         res.json(data)

//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
   
// })






router.get('/getAll', async (req, res) => {
    try {
      let data;
      switch (req.query.type) {
        case 'object':
          data = await Model.find({ type: 'object' });
          break;
        case 'container':
          data = await Model.find({ type: 'container' });
          break;
        default:
          data = await Model.find();
          break;
      }
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// router.get('/getAll', async (req, res) => {
//     try {

//         const data = await Model.find();
//         res.json(data)

//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
//    // return res.redirect('index.html');
// })






//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})






//Update by ID Method
router.post('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

})




//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
module.exports = router;