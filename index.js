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
    },
    dirtLocations = [];
    allCords = [];
    newCords = [];

    input.map(action => {
        if(!isNaN(parseInt(action))){
            if(index > 0){
                for(let i = 0, a = action.length; i < a; i++){
                    i ? robotCords.cords.x : robotCords.cords.y
                }
            }
            if(index > 1 || index < input.length - 2) {
                dirtLocations.push(parseInt(action))
            }
        } else {
            for(let j = 0, b = action.length; j < b; j++){
                switch(action[j]){
                    case "N":
                    robotCords.cords.y++
                    
                }
            }
        }
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


