const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

//Create index callback function
async function index (req, res) {
    try {
        const posts = await Post.all;
        res.status(200).json(posts);
    } catch(err) {
        res.status(500).json({err});
    }
}

//Create show callback function
async function show (req, res) {
    try {
        const post = await Post.findById(parseInt(req.params.id));
        res.status(200).json(post);
    } catch(err) {
        res.status(404).json({err});
    }
}

//Make create callback function
async function create (req, res) {
    try {


    } catch(err) {

    }
}

module.exports = { index, show, create };