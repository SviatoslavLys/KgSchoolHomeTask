function drawTriangle(height){

    for (let i=1; i <= height; i++)
    {
      let eachLine = ''
  
        for (let j=1; j<=i; j++)
        {
          eachLine += j + " "
        }
        eachLine = eachLine.trim();
        console.log(eachLine);
    }
  
  }
  
  let height = 3 ;
  drawTriangle(height)
