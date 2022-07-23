const express = require('express');
const router = express.Router();
const { Stream } = require('../models/Stream');

//ROUTER ES UN METODO DE EXPRESS

//get all streams

router.get('/all', async (req, res) => {
  const streams = await Stream.find();
  res.json(streams);
});

//post a new stream
router.post('/new', async (req, res) => {
  console.log(req.body);
  const { title, description, codeToDelete } = req.body;
  if (
    title.length === 0 ||
    description.length === 0 ||
    codeToDelete.length === 0
  ) {
    return res.status(400).json({
      success: false,
      message: ' title and description are required',
    });
  }
  const stream = new Stream(req.body);
  try {
    await stream.save();

    res.status(201).json({
      success: true,
      message: 'Stream created',
      data: stream,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `there was an error ${error}`,
    });
  }
});

//get a stream by id
router.get('/streams/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const stream = await Stream.findById(_id);
    if (!stream) {
      return res.status(404).json({
        success: false,
        message: 'Stream not found',
      });
    }
    res.json({
      success: true,
      message: 'Stream found',
      data: stream,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `there was an error ${error}`,
    });
  }
});

//update a stream by id
router.patch('/edit/:id', async (req, res) => {
  const _id = req.params.id;
  const { title, description } = req.body;
  if (title.length === 0 || description.length === 0) {
    return res.status(400).json({
      success: false,
      message: ' title and description are required',
    });
  }
  try {
    const stream = await Stream.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    console.log(stream);
    if (!stream) {
      return res.status(404).json({
        success: false,
        message: 'Stream not found',
      });
    }
    res.json({
      success: true,
      message: 'Stream updated',
      data: stream,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `there was an error ${error}`,
    });
  }
});

//delete a stream by id
router.delete('/delete/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const stream = await Stream.findByIdAndDelete(_id);
    if (!stream) {
      return res.status(404).json({
        success: false,
        message: 'Stream not found',
      });
    }
    res.json({
      success: true,
      message: 'Stream deleted',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `there was an error ${error}`,
    });
  }
});

module.exports = router;

// fetch.post("http://localhost:4000/api/streams/new", info)
// .then(data => data.json())
// .then(res => console.log(res)){

// {
//   title:"" ,
//   description:""
// }
