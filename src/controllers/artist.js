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
        res.status(500).json(error);
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

exports.findArtistById = async (req, res) => {
    const db = await getDb();
    const { artistId } = req.params;
    const [[artist]] = await db.query('SELECT * FROM Artist WHERE id = ?', [
        artistId
    ]);
    if (artist) {
        res.status(200).json(artist);
    } else {
        res.sendStatus(404);
    }
    db.close; 
};

exports.update = async (req, res) => {
    const db = await getDb();
    const data = req.body;
    const { artistId } = req.params;
    try {
        const [{ affectedRows }] = await db.query('UPDATE Artist SET ? WHERE id = ?', [data, artistId]);
        if (affectedRows) {
            res.status(200).send();
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.sendStatus(500);
    }
    db.close();
};

exports.delete = async (req, res) => {
    const db = await getDb();
    const { artistId } = req.params;
    try {
        const [{affectedRows}] = await db.query('DELETE FROM Artist WHERE id = ?', [artistId]);
        if (affectedRows) {
            res.status(200).send();
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.sendStatus(500);
    }
    db.close();
}