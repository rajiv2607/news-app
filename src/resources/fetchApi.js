
import { URL, TECH, APPLE } from '../resources/Constants'

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

export async function fetchTech() {
    let articles
    try{
        let jsonData = await fetch(TECH)
        articles = await(jsonData.json())
        return articles
    }
    catch(error) {
        articles=error
        return articles
    }
}

export async function fetchApple() {
    let articles
    try{
        let jsonData = await fetch(APPLE)
        articles = await(jsonData.json())
        return articles
    }
    catch(error) {
        articles=error
        return articles
    }
}