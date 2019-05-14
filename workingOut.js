//Initial working out before refactoring
let actions = []
let object = {}

// !isNaN(parseInt(key))

const checkCordIsInGrid = (robotCord, cord, gridSize, operation) => {
    operation === "add" ? robotCord[cord]++ : robotCord
    if(robotCord[cord] < 0) {
        robotCord[cord] = 0
    } else if(robotCord[cord] > gridSize[cord]) {
        robotCord[cord] = gridSize[cord]
    } 
}

const runHoover = (input) => {
    //Place XY coordinates into an object so they are together. Set to 0,0
    const robotCords = {
            x:0,
            y:0
    },
    gridSize = {
        x:0,
        y:0
    }
    dirtLocations = [],
    allCords = [];
    let dirtCounter = 0;
    object = robotCords

//Sort out initial robot cords. Should be equal to first line in input.txt/second item in input array
//Handle the other if statement so it only applies to the 3rd to second to last statements
//Ternary is not working correctly
    input.map((action,index) => {
        if(!isNaN(parseInt(action))){
            // if(index > 1 && index <= input.length - 2) {
            //     dirtLocations.push(action)
            //     // console.log('working' + index)
            // } else if(index > 0){
            //     for(let i = 0, a = action.length; i < a; i++){
            //         // console.log('action:' + action[i])
            //         i ? robotCords.y = action[i] : robotCords.x = action[i]
            //     }
            //     allCords.push(`${robotCords.x}${robotCords.y}`)
            // }

            switch(index){
                case 0:
                for(let i = 0, a = action.length; i < a; i++){
                    i ? gridSize.y = action[i] : gridSize.x = action[i]
                }
                break;
                case 1:
                for(let i = 0, a = action.length; i < a; i++){
                    // console.log('action:' + action[i])
                    i ? robotCords.y = action[i] : robotCords.x = action[i]
                }
                allCords.push(`${robotCords.x}${robotCords.y}`)
                break;
                case index:
                dirtLocations.push(action)
            }

        } else {
            for(let j = 0, b = action.length; j < b; j++){
                switch(action[j]){
                    case "N":
                    checkCordIsInGrid(robotCords, "y", gridSize, "add")
                    allCords.push(`${robotCords.x}${robotCords.y}`)
                    break; 
                    case "S":
                    checkCordIsInGrid(robotCords, "y", gridSize, "subtract")
                    allCords.push(`${robotCords.x}${robotCords.y}`)
                    break;
                    case "E":
                    checkCordIsInGrid(robotCords, "x", gridSize, "add")
                    allCords.push(`${robotCords.x}${robotCords.y}`)
                    break;
                    case "W":
                    checkCordIsInGrid(robotCords, "x", gridSize, "subtract")
                    allCords.push(`${robotCords.x}${robotCords.y}`)
                }
            }
        }
    })
        for(let i = 0, x = dirtLocations.length; i < x; i++){
            for(let j = 0, z = allCords.length; j < z; j++) {
                if(dirtLocations[i] === allCords[j]){
                    let cordMatch = dirtLocations.slice(i,i+1)
                    dirtCounter++
                }
            }
        }
    console.log(robotCords)
    console.log(allCords)
    // console.log(dirtCounter)
    console.log(dirtLocations)
    console.log(gridSize)
    // console.log(input)
    // console.log( {finalPosition: allCords[allCords.length - 1], dirtCounter} )
    console.log(`Final Position:${robotCords.x} ${robotCords.y}\nNo.OfDirt:${dirtCounter}`)
}

fetch('http://localhost:8000/data')
// .then(stream => new Response(stream))
// .then(response => response)
// // .then(blob => URL.createObjectURL(blob))
// // .catch(err => console.error(err));
.then(response => response.text())
// .then(data => console.log(data))
.then(data => {
    const actionArray = () => {
        // console.log(actions)
        // let newdata = data.split('\n').join().replace(/\s/g, "").split(',')
        // console.log(newdata)
    }
    // actionArray()
    // runHoover()
   runHoover(data.split('\n').join().replace(/\s/g, "").split(','))
//    console.log(p)
})

// let array = []

// const fileInput = document.querySelector('input')
// fileInput.addEventListener('change', (e) => {
//     let input = event.target
//     let reader = new FileReader();
//     reader.onload = () => {
//         let text = reader.result
//         // console.log(reader.result.substring(0, 200))
//         console.log(text)
//         array.push(text)
//     }
//     reader.readAsText(input.files[0])
//     // console.log(reader.readAsText(input.files[0]))
//     console.log(array)
// })

// const readFile = () => {
//     let reader = new FileReader();
//     reader.onload = () => {
//         let text = reader.result
//         // console.log(reader.result.substring(0, 200))
//         console.log(text)
//         array.push(text)
//     }
// }

