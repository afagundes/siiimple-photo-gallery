const apiURL = 'http://localhost:3001';

export const photoColumns = {
    columns: []
}

function organizePhotos(allPhotos, handleAllPhotos) {
    const newPhotoColumns = { columns: [] }
    const qtdColumns = 4

    let column = 0;
    for (let photo of allPhotos) {
        if (column === qtdColumns) column = 0;
        if (newPhotoColumns.columns[column] === undefined) newPhotoColumns.columns[column] = []

        newPhotoColumns.columns[column].push(photo)
        column++;
    }

    handleAllPhotos(newPhotoColumns)
}

export function fetchPhotos(handleAllPhotos) {
    fetch(`${apiURL}/photos`)
    .then(res => res.json())
    .then(res => organizePhotos(res, handleAllPhotos))
}

export function fetchCategoryPhotos(categoryID, handleAllPhotos) {
    fetch(`${apiURL}/category/${categoryID}`)
    .then(res => res.json())
    .then(res => organizePhotos(res, handleAllPhotos))
}

export function fetchPhotosSearch(query, handleAllPhotos) {
    fetch(`${apiURL}/search?query=${query}`)
    .then(res => res.json())
    .then(res => organizePhotos(res, handleAllPhotos));
}