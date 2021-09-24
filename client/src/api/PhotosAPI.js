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
    fetch('http://localhost:3001/photos')
    .then(res => res.json())
    .then(res => organizePhotos(res, handleAllPhotos))
}

export function fetchCategoryPhotos(categoryID, handleAllPhotos) {
    fetch(`http://localhost:3001/category/${categoryID}`)
    .then(res => res.json())
    .then(res => organizePhotos(res, handleAllPhotos))
}