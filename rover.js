
  let roverando  = {
    name: "br",
    direction: "N",
    x:0,
    y:1,
    travelLog: [{x:0,y:0}]

  };

  let roverando2  = {
    name: "to",
    direction: "S",
    x:0,
    y:0,
    travelLog: [{x:0,y:0}]

  };

  let morando = [ 
                  [" "," "," "," "," "," "," "," "," "," "],
                  [" "," "," "," "," "," "," "," "," "," "],
                  [" "," "," "," "," "," "," "," "," "," "],
                  [" "," "," "," "," "," "," "," "," "," "],
                  [" "," "," "," "," "," "," "," "," "," "],
                  [" "," "," "," "," "," "," "," "," "," "],
                  [" "," "," "," "," "," "," "," "," "," "],
                  [" "," "," "," "," "," "," "," "," "," "],
                  [" "," "," "," "," "," "," "," "," "," "],
                  [" "," "," "," "," "," "," "," "," "," "] 
                ];

  function turnLeft(rover) {
    switch(rover.direction){
      case "N":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "E": 
        rover.direction = "N";
        break;
    }
    console.log(`A direção que ele está é ${rover.direction}`);
  };

  function turnRight(rover) {
    switch(rover.direction){
      case "N":
        rover.direction = "E";
        break;
      case "W":
        rover.direction = "N";
        break;
      case "S":
        rover.direction = "W";
        break;
      case "E":
        rover.direction = "S";
        break;
    }
    console.log(`A direção que ele está é ${rover.direction}`);
  };

  function moveForward(rover, marte){
    let tempox = rover.x;
    let tempoy = rover.y;
     switch(rover.direction){
      case "N":
        tempoy -=1;
        break;
      case "W":
        tempox -=1;
        break;
      case "S":
        tempoy +=1;
        break;
      case "E":
        tempox +=1;
        break;
      }
      if(marte[tempox][tempoy] == 0){
        console.log("Ta livre para se mover")
        marte[tempox][tempoy] = rover.name;
        
          if(tempox < 9 && tempox >= 0 && tempoy < 9 && tempoy >0){
            rover.x = tempox;
            rover.y = tempoy;
              let posiFrente = {x: rover.x , y: rover.y};
              rover.travelLog.push(posiFrente);
              console.log(`x: ${rover.x} e y: ${rover.y}`);
          }else {
              console.log("Você saiu de marte");
          }
    }else{
      console.log("Bateu")
    }
  };

  function movetras(rover, marte){
    let tempox = rover.x;
    let tempoy = rover.y;
        switch(rover.direction){
          case "N":
            tempox+=1;
            break;
          case "W":
            tempoy+=1;
            break;
          case "S":
            tempox-=1;
            break;
          case "E":
            tempoy-=1;
            break;
       }
       if(marte[tempox][tempoy] == 0){
        console.log("Ta livre para se mover")
        marte[tempox][tempoy] = rover.name;

          if(tempox < 9 && tempox >= 0 && tempoy < 9 && tempoy >=0){
            rover.x = tempox;
            rover.y = tempoy;      
              let posiTras = {x: rover.x, y: rover.y};
              rover.travelLog.push(posiTras);
              console.log(`x: ${rover.x} e y: ${rover.y}`);
          }else{
            console.log("Você saiu de marte");
          }
        }else{
            console.log("Bateu")
          }
    };

  function commands(rover, comandos){
    let validos = ["f","r","l","b"];
    for(let i =0; i < comandos.length;i++){
      let comando = comandos[i];
      console.log(comando);
      console.log(validos.includes(comando));
      if(validos.includes(comando)){
        switch(comando){
          case "f":
            moveForward(rover,morando);
            break;
          case "l":
            turnLeft(rover);
            break;
          case "r":
            turnRight(rover);
            break;
          case "b":
            movetras(rover, morando);
            break;    
      }
    }else{
      console.log("Comando inválido");
    }
  }
}

//commands(nome do rover, "comandos")
// Rovers: roverando e roverando2
//commands(roverando,"r");
commands(roverando2,"f");
commands(roverando,"rffrfflfrff");
console.log(morando);
console.log(roverando.travelLog);



