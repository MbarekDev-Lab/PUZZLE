let source ;
 let tile = [];
 let cols = 4;
 let rows = 4;
 let w, h;
 let board = [];


function preload() {
  source = loadImage("pro.png");
}
function setup(){
    createCanvas(400, 400);
    w = width/cols;
    h = height/rows;
    for(let i=0; i<cols; i++){
        for(let j=0; j<rows; j++){
             let x = i * w;
             let y = j * h;
             let img = createImage(w, h);
             img.copy(source, x, y, w, h, 0, 0, w, h);
             let index = i + j * cols;
             board.push(index);
             let tile = new Tile(index, img);
             tiles.push(tile);
            // let img = createImage(w,h);
            // img.loadPixels();
            // img.copy(source,x,y,w,h,0,0,w,h);
            // img.updatePixels();
            // let index = i + j * cols;
            // board.push(index)
            // let tile = new Tile(index, img);
            // tiles.push(tile);
             

        }
    }
    tites.pop();
    board.pop();
    board.push()
    shuffle(board);
}

function swap(i, j, arr){
    let temp = arr[i];
    arr[i]= arr[j];
    arr[j]= temp;
}
function randomMove(arr) {
  let r1 = floor(random(cols));
  let r2 = floor(random(rows));
  move(r1, r2, arr);
}
function shuffle(arr){
    for(let i=0; i<100; i++){
    //  let r1 = floor(random(0, arr.length))
    //  let r2 = floor(random(0, arr.length))
    //  swap(r1, r2, arr)
    randomMove(arr)

    }
}
function mousePressed() {
  let i = floor(mouseX / w);
  let j = floor(mouseY / h);
  move(i,j,board);
}

// for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       let x = i * w;
//       let y = j * h;
//       strokeWeight(2);
//       noFill();
//       rect(x, y, w, h);
//     }
//   }



// function drow(){
//     // image(source, 0, 0,);
//     for(let i=0; i<cols; i++){
//         for(let j=0; j< rows; j++){
//             let x = i * w;
//             let y = j * h;
//             strokeWeight(2);
//             noFill();
//             rect(x,y,w,h);
//             // let index = i +j * cols;
//             // let x = i * w;
//             // let y = j * h;
//             // let titleIndex = board[index]
//             // let img = tiles[titleIndex].img;
//             // image(img, x, y);
//             // board[index].schow();

//         }
//     }
//     noLoop();
// }

function draw(){
  background(0);

  // Draw the current board
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let index = i + j * cols;
      let x = i * w;
      let y = j * h;
      let tileIndex = board[index];
      if (tileIndex > -1) {
        let img = tiles[tileIndex].img;
        image(img, x, y, w, h);
      }
    }
  }
}