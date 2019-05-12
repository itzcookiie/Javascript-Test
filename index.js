let actions = []
let object = {}

// !isNaN(parseInt(key))


const runHoover = (input) => {
    //Place XY coordinates into an object so they are together. Set to 0,0
    const robotCords = {
        cords: {
            x:0,
            y:0
        }
    }

    input.map(action => {
        
    })
}

fetch('http://localhost:8000/data')
// .then(stream => new Response(stream))
// .then(response => response)
// // .then(blob => URL.createObjectURL(blob))
// // .catch(err => console.error(err));
.then(response => response.text())
// .then(data => console.log(data))
.then(data => {
    actions = data.split('\n').join().replace(/\s/g, "").split(',')
    const actionArray = () => {
        console.log(actions)
        let newdata = data.split('\n').join().replace(/\s/g, "").split(',')
        console.log(newdata)
    }
    actionArray()
})


