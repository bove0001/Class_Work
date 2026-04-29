import { response } from "express"

export default {
    getRandomWYR() { // return a Promise
        return fetch('/wyr').then(response => {
            return response.json()
        })
    }
}