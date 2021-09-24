export default function fetchCategories(handleCategories) {
    fetch('http://localhost:3001/categories')
        .then(res => res.json())
        .then(handleCategories)
}