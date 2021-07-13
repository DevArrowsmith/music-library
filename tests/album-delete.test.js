const { expect } = require('chai');
const request = require('supertest');
const getDb = require('../src/services/db');
const app = require('../src/app');

describe('delete album', () => {
    let db;
    let artists;
    let albums;
    beforeEach(async () => {
        db = await getDb();
        await Promise.all([
            db.query('INSERT INTO Artist (name, genre) VALUES(?, ?)', [
                'Perturbator',
                'electronic',
            ]),
            db.query('INSERT INTO Artist (name, genre) VALUES(?, ?)', [
                'Fever Ray',
                'electronic',
            ]),
                db.query('INSERT INTO Artist (name, genre) VALUES(?, ?)', [
                'Carbon Based Lifeforms',
                'ambient',
            ]),
        ]);
        
        [artists] = await db.query('SELECT * FROM Artist');

        await Promise.all([
            db.query('INSERT INTO Album (name, year, artistId) VALUES(?, ?, ?)', [
                'The Uncanny Valley',
                '2016',
                artists[0].id
            ]),
        ]);

        [albums] = await db.query('SELECT * FROM Album');
    });
    afterEach(async () => {
        await db.query('DELETE FROM Artist');
        await db.query('DELETE FROM Album');
        await db.close();
    });

    describe('/album/albumId', () => {
        describe('DELETE', () => {
            it('deletes a single album with the specified id', async () => {
                const album = albums[0];
                const res = await request(app).delete(`/album/${album.id}`).send();
                expect(res.status).to.equal(200);

                const [[deletedAlbumRecord]] = await db.query('SELECT * FROM Album WHERE id = ?', [album.id]);
                expect(!!deletedAlbumRecord).to.be.false;
            });
            it('returns a 404 if the album is not in the database', async () => {
                const res = await request(app).delete('/artist/999999').send();
                expect(res.status).to.equal(404);
            });
        });
    });
})