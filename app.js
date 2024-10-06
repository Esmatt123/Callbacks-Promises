const { error } = require("console")

const fetchAdvice = (id) => {
     fetch(`https://api.adviceslip.com/advice/${id}`)
     .then(response => {
        if (!response.ok){
            throw new Error("Network response was not ok")
        }
        return response.json()
     }).then(data => {
        const advice = data.slip.advice
        console.log(advice)
     }).catch(error => {
        console.log("Oh no, an error occurred! ==> " + error)
     })
}




const guessNumberOneToTen = (number) => {
    console.log(number)
    return new Promise((resolve, reject) => {
        let randomNumber = Math.random().toFixed(1) * 10
        console.log(randomNumber)
        if (number === randomNumber){
            resolve("You win!")
        }
        reject("You lose!")
    })
}

guessNumberOneToTen(4).then((message) => {
    console.log(message)
    if(message === "You win!"){
        
        return fetchAdvice(7)
    }
    
}).catch(() => {
    return fetchAdvice(8)
})


