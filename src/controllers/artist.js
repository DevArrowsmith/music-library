const { request } = require('express');
const getDb = require('../services/db');

exports.create = async (req, res) => {
    const db = await getDb();
    const { name, genre } = req.body;
    try {
        await db.query('INSERT INTO Artist (name, genre) VALUES (?, ?)', [
            name,
            genre
        ]);
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500).json(error);
    }
    db.close;
};

exports.read = async (_, res) => {
    const db = await getDb();
    try {
        const [artists] = await db.query('SELECT * FROM Artist');
        res.status(200).json(artists);
    } catch (error) {
        res.status(500).json(error);
    }
    db.close;
};