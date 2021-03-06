//Refactored - check workingOut.js for my inital working

//Keeping code DRY
const reformatData = (data) => {
    return data.split('\n').join().replace(/\s/g, "").split(',')
}

//Function that checks if the hoover has hit a wall
const checkCordIsInGrid = (robotCord, cord, gridSize, operation) => {
    operation === "add" ? robotCord[cord]++ : robotCord[cord]--
    if(robotCord[cord] < 0) {
        robotCord[cord] = 0
    } else if(robotCord[cord] > gridSize[cord]) {
        robotCord[cord] = gridSize[cord]
    } 
}

const runHoover = (input) => {
    //Stores inital hover position then will reflect the current position of the hoover based on instructions given at the time
    const robotCords = {
            x:0,
            y:0
    },
    //Holds information regarding the dimensions of the grid
    gridSize = {
        x:0,
        y:0
    }
    //Contains all coordinate positions for dirt
    dirtLocations = [],
    //Each item will refer to a coordinate position where the hoover was based on the instructions given
    allCords = [];
    //Tracker for how much dirt has been removed
    let dirtCounter = 0;

    input.map((action,index) => {
        if(!isNaN(parseInt(action))){
            switch(index){
                //Store grid position for reference
                case 0:
                for(let i = 0, actionLength = action.length; i < actionLength; i++){
                    i ? gridSize.y = action[i] : gridSize.x = action[i]
                }
                break;
                //Set initial coordinate position 
                case 1:
                for(let i = 0, actionLength = action.length; i < actionLength; i++){
                    i ? robotCords.y = action[i] : robotCords.x = action[i]
                }
                allCords.push(`${robotCords.x}${robotCords.y}`)
                break;
                //Push all coordinates for dirt into an array
                case index:
                dirtLocations.push(action)
            }

        } else {
            //Actions for each cardinal direction.
            for(let i = 0, drivingInstructions = action.length; i < drivingInstructions; i++){
                switch(action[i]){
                    //Increment Y cord by 1
                    case "N":
                    checkCordIsInGrid(robotCords, "y", gridSize, "add")
                    allCords.push(`${robotCords.x}${robotCords.y}`)
                    break; 
                    //Decrement Y cord by 1
                    case "S":
                    checkCordIsInGrid(robotCords, "y", gridSize, "subtract")
                    allCords.push(`${robotCords.x}${robotCords.y}`)
                    break;
                    //Increment X cord by 1
                    case "E":
                    checkCordIsInGrid(robotCords, "x", gridSize, "add")
                    allCords.push(`${robotCords.x}${robotCords.y}`)
                    break;
                    //Decrement X cord by 1
                    case "W":
                    checkCordIsInGrid(robotCords, "x", gridSize, "subtract")
                    allCords.push(`${robotCords.x}${robotCords.y}`)
                }
            }
        }
    })
    //Search and check if any of the hoover cords match the cords for dirt
        for(let i = 0, numOfDirt = dirtLocations.length; i < numOfDirt; i++){
            for(let j = 0, aC = allCords.length; j < aC; j++) {
                if(dirtLocations[i] === allCords[j]){
                    //Remove the dirt cords from the dirtLocations array
                    dirtLocations.splice(i,1)
                    //Increment tracker for dirt
                    dirtCounter++
                }
            }
        }
    return `${robotCords.x} ${robotCords.y}\n${dirtCounter}`
}

//First call for the input.txt file
fetch('http://localhost:8000/data')
.then(response => response.text())
.then(data => {
   let robot = runHoover(reformatData(data))
   console.log(robot)
})

//Abstract whole function into a function expression
const running = () => {
fetch('http://localhost:8000/data')
.then(response => response.text())
.then(data => {
   let robot = runHoover(reformatData(data))
   console.log(robot)
})
}

//Run function upon each click of the button
const button = document.querySelector('button')
button.addEventListener('click', running)


//Drag and drop 
let dropArea = document.getElementById('drop-area')

;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
  })
  
  function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
  }

  ;['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
  })
  
  ;['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
  })
  
  function highlight(e) {
    dropArea.classList.add('highlight')
  }
  
  function unhighlight(e) {
    dropArea.classList.remove('highlight')
  }

  dropArea.addEventListener('drop', handleDrop, false)

function handleDrop(e) {
  let dt = e.dataTransfer
  let files = dt.files
    let reader = new FileReader();
    reader.readAsText(files[0])
    reader.onload = () => {
        let text = reader.result
        let bot = runHoover(reformatData(text))
        console.log(bot)
    }
}