import Phaser from "phaser";

class Escena extends Phaser.Scene{


constructor(){
// Constructor que almacenara un key o identificador de la escena, se encarga de enviar los parametros
super('Game'  );      

}

// Se precargan las imagenes y los sonidos del juego desde su directorio

preload(){
    this.load.image('fondo','./imgHenry/fondo.png'); 
    this.load.image('manzana','./imgHenry/manzana.png');   
}

//  Se crean las imagenes y sonidos

create(){
    //creando el fondo
    this.add.image(665,374,'fondo');



}


update(){
      //movimientos segun el cursor del teclado
  if (this.cursors.left.isDown)
  {
    this.player.setVelocityX(-160);
  
      this.player.anims.play('left', true);
  }
  else if (this.cursors.right.isDown)
  {
    this.player.setVelocityX(160);
  
      this.player.anims.play('right', true);
      
  }else if (this.cursors.up.isDown)
  {
    this.player.setVelocityY(160);
  
      this.player.anims.play('up', true);
  }
  else if (this.cursors.down.isDown)
{
  this.player.setVelocityY(160);

    this.player.anims.play('down', true);
}
}

}

export default Escena;