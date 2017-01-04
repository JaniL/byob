console.log('\'Allo \'Allo!');
console.log(PIXI);

//Create the renderer
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();

PIXI.loader
  .add('images/poop.png')
  .load(setup);

function setup() {

  var i = 0;

  function lisaaKakka() {
    i++;
    if (i > 50) {
      return;
    }
    var poop = new PIXI.Sprite(
      PIXI.loader.resources['images/poop.png'].texture
    );

    function liiku() {
      poop.x += 1;
      poop.y += 1.0;
      poop.rotation += 0.1;
      renderer.render(stage);
    }

    setInterval(liiku, 10)
    stage.addChild(poop);
  }

  lisaaKakka()

  setInterval(lisaaKakka,250)

  //Tell the `renderer` to `render` the `stage`
  renderer.render(stage);
}
