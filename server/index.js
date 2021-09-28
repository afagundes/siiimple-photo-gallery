import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { fetchPexels, compareCategoriesTitles, getRandomPage } from './utils/utils.js';

dotenv.config();

const app = express();
app.use(cors());

let totalCategories;
let totalPhotos;

function init() {
    const categoriesResource = `collections/featured?per_page=1`;
    const photosResource = `curated?per_page=1`;

    fetchPexels(categoriesResource, (json) => totalCategories = json.total_results);
    fetchPexels(photosResource, (json) => totalPhotos = json.total_results);
}

app.get('/categories', (_, res) => {
    const pageSize = 50;
    const page = getRandomPage(totalCategories, pageSize);
    const resource = `collections/featured?per_page=${pageSize}&page=${page}`;

    fetchPexels(resource, (json) => res.json(json.collections.sort(compareCategoriesTitles)));
});

app.get('/photos', (_, res) => {
    const pageSize = 80;
    const page = getRandomPage(totalPhotos, pageSize);
    const resource = `curated?per_page=${pageSize}&page=${page}`;

    fetchPexels(resource, (json) => res.json(json.photos));
});

app.get('/category/:id', (req, res) => {
    const pageSize = 80;
    const resource = `collections/${req.params.id}?per_page=${pageSize}&type=photos`;

    fetchPexels(resource, (json) => res.json(json.media));
});

app.get('/search', (req, res) => {
    const pageSize = 80;
    const resource = `search?query=${req.query.query}&per_page=${pageSize}`;

    fetchPexels(resource, (json) => res.json(json.photos));
});

app.listen(3001, () => {
    init();
    console.log("Server is running on port 3001")
});