const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

//Creat in
async function index (req, res) {
    try {
        const posts = await Post.all;
        res.status(200).json(posts);
    } catch(err) {
        res.status(500).json({err});
    }
}

async function show (req, res) {
    try {
        const post = await Post.findById(parseInt(req.params.id));
        res.status(200).json(post);
    } catch(err) {
        res.status(404).json({err});
    }
}