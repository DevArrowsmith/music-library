const { expect } = require('chai');
const request = require('supertest');
const getDb = require('../src/services/db');
const app = require('../src/app');

describe('update album', () => {
    let db;
    let artists;
    let albums;

    beforeEach(async() => {
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
        [artists] = await db.query('SELECT * from Artist');

        await Promise.all([
            db.query('INSERT INTO Album (name, year, artistId) VALUES(?, ?, ?)', [
                'The Uncanny Valley',
                '2016',
                artists[0].id
            ]),
            db.query('INSERT INTO Album (name, year, artistId) VALUES(?, ?, ?)', [
                'Plunge',
                '2017',
                artists[1].id
            ]),
            db.query('INSERT INTO Album (name, year, artistId) VALUES(?, ?, ?)', [
                'Interloper',
                '2010',
                artists[2].id
            ]),
        ]);

        [albums] = await db.query('SELECT * FROM Album');
    });

    afterEach(async () => {
        await db.query('DELETE FROM Artist');
        await db.query('DELETE FROM Album');
        await db.close();
    });

    describe('/album/:albumId', () => {
        describe('PATCH', () => {
            it('updates a single album with the correct id', async () => {
                const album = albums[0];
                const res = await request(app)
                    .patch(`/album/${album.id}`)
                    .send({ name: 'Dangerous Days', year: '2014' });
                expect(res.status).to.equal(200);
                const [[newAlbumRecord]] = await db.query('SELECT * FROM Album WHERE id = ?', [album.id]);
                expect(newAlbumRecord.name).to.equal('Dangerous Days');
                expect(newAlbumRecord.year).to.equal(2014);
            });

            it('returns a 404 if the album is not in the database', async() => {
                const res = await request(app)
                    .patch('/album/999999')
                    .send({ name: 'new name', year: '5555' });
                expect(res.status).to.equal(404);
            });
        });
    });
});