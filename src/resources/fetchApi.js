
import { URL } from '../resources/Constants'

export async function fetchData() {
    let articles
    try {
        let jsonData = await fetch(URL)
        articles = await(jsonData.json())
        return articles
    }
    catch (error) {
        articles = error
        return articles
    }
}