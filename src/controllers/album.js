const getDb = require('../services/db');

exports.create = async (req, res) => {
    const db = await getDb();
    const { name, year, artistId } = req.body;
    try {
        await db.query('INSERT INTO Album (name, year, artistId) VALUES (?, ?, ?)', [
            name,
            year,
            artistId
        ]);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).json(error);
    }
    db.close();
};

exports.read = async (_, res) => {
    const db = await getDb();
    try {
        const [albums] = await db.query('SELECT * FROM Album');
        res.status(200).json(albums);
    } catch (error) {
        res.status(500).json(error);
    }
    db.close();
};

exports.readById = async (req, res) => {
    const db = await getDb();
    const { albumId } = req.params;
    const [[album]] = await db.query('SELECT * FROM Album WHERE id = ?', [
        albumId
    ]);
    if(album) {
        res.status(200).json(album);
    } else {
        res.sendStatus(404);
    }
    db.close();
};

exports.update = async (req, res) => {
    const db = await getDb();
    const data = req.body;
    const { albumId } = req.params;
    try {
        const [{ affectedRows }] = await db.query('UPDATE Album SET ? WHERE id = ?', [data, albumId]);
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

exports.delete = async (req, res) => {
    const db = await getDb();
    const { albumId } = req.params;
    try {
        const [{affectedRows}] = await db.query('DELETE FROM Album WHERE id = ?', [albumId]);
        if (affectedRows) {
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.sendStatus(500);
    }
    db.close();
};