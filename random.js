fetch('https://matchmaking-data.onrender.com/10k.json',{
    method : "GET"
})
.then( (res) => {
    res.json()
    .then( (resJSON) => {
        console.log(resJSON.cybersecurity)
    })
})