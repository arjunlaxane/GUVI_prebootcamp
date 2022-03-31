//Fix the code to gen Title caps.

let arro = ['guvi', 'geek', 'zen', 'fullstack'];

let ano = function (arro) {
  for (let i = 0; i < arro.length; i++) {
    console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
  }
};
ano(arro);
