
import { URL, TECH, APPLE , ANYTHING} from '../resources/Constants'

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

export async function getSearchData(keyword) {
    let articles
    let URL = ANYTHING.replace("replace_this",keyword)
    try{
        let jsonData = await fetch(URL)
        articles = await(jsonData.json())
        console.log(URL)

        console.log(articles)
        return articles
    }
    catch(error) {
        articles=error
        return articles
    }
}