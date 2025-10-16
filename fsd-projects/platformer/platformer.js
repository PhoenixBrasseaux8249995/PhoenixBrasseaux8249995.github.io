$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(300, 400 , 50 , 20 ) 
createPlatform(500 , 300 ,50 , 20 ) 
createPlatform(300 , 600 , 50 , 30)
createPlatform(500 , 480, 50 ,20)
createPlatform(500 , 700 , 50 , 32)



    // TODO 3 - Create Collectables
createCollectable("max",400,100);
createCollectable("diamond",400,500);
createCollectable("steve",560,700);


    
    // TODO 4 - Create Cannons

    createCannon( "right", 200 , 300 );
    createCannon( "top", 100 , 100 );
    createCannon( "right", 600 , 980 );

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
