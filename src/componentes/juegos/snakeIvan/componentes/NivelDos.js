import Phaser from "phaser";

class NivelDos extends Phaser.Scene {
    // Variables //
    cursors = null;
    platforms = null;
    player = null;
    grupo = null;
    score = null;
    scoreText = null;

    constructor() {
        // Constructor que almacenara un key o identificador de la escena, se encarga de enviar los parametros
        super('NivelDos');
    }

    // Se precargan las imagenes y los sonidos del juego desde su directorio
    preload() {

        //imagenes
        this.load.image('fondo2', './imagenes/fondoNivel2HungryAnt.png');
        this.load.image('largoCostado', './imagenes/ParedCostadoLargo.png');
        this.load.image('largoParado', './imagenes/ParedParadoLargo.png');
        this.load.image('cortoCostado', './imagenes/ParedCostadoCorto.png');
        this.load.image('cortoParado', './imagenes/ParedParadoCorto.png');
        this.load.image('especialCostado', './imagenes/EspecialCostado.png');
        this.load.image('especial', './imagenes/Especial.png');
        this.load.image('manzana', './imagenes/manzana.png');
        this.load.image('anana', './imagenes/anana.png');
        this.load.image('banana', './imagenes/banana.png');
        this.load.image('naranja', './imagenes/naranja.png');
        this.load.image('uva', './imagenes/uva.png');
        this.load.image('ciruela', './imagenes/ciruela.png');
        this.load.image('durazno', './imagenes/durazno.png');
        this.load.image('limon', './imagenes/limon.png');
        this.load.image('sandia', './imagenes/sandia.png');
        this.load.image('personaje', './imagenes/hormiga.png');
        this.load.image('cesta', './imagenes/cesta.png');
        // Musica y sonidos//

        this.load.audio('comida', './musica/comida.mp3');
        this.load.audio('golpe', './musica/golpe.mp3');
        this.load.audio('score', './musica/score.mp3');
        this.load.audio('pou', './musica/pou.mp3');
        this.load.audio('ninios', './musica/ninios.mp3');
        this.load.audio('sonidovictoria', './musica/sonidovictoria.mp3');

    }

    //  Se crean las imagenes y sonidos
    create() {

        //creando el fondo2
        this.add.image(650, 370, 'fondo2');
        this.add.image(1210, 18, 'cesta');
        //creando las plataformas y estos permanecen estaticos.
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(326, 55, 'largoCostado');
        this.platforms.create(975, 55, 'largoCostado');
        this.platforms.create(158, 155, 'cortoCostado');
        this.platforms.create(550, 155, 'cortoCostado');
        this.platforms.create(1110, 155, 'largoCostado');
        this.platforms.create(407.5, 362.5, 'largoParado');
        this.platforms.create(760, 323.5, 'cortoParado');
        this.platforms.create(615, 323.5, 'cortoParado');
        this.platforms.create(760, 383.5, 'cortoParado');
        this.platforms.create(615, 383.5, 'cortoParado');
        this.platforms.create(390, 250, 'especialCostado');
        this.platforms.create(0, 250, 'cortoCostado')
        this.platforms.create(942.6, 250, 'cortoCostado');
        this.platforms.create(1300, 250, 'especialCostado');
        this.platforms.create(1000, 250, 'especialCostado');
        this.platforms.create(1278, 522.5, 'largoParado');
        this.platforms.create(1278, 700, 'especial');
        this.platforms.create(0, 355, 'largoCostado');
        this.platforms.create(1015, 355, 'cortoCostado');
        this.platforms.create(872.5, 468.9, 'cortoParado');
        this.platforms.create(1015, 455, 'cortoCostado');
        this.platforms.create(852.5, 550, 'largoCostado');
        this.platforms.create(513.5, 476.5, 'cortoParado');
        this.platforms.create(712.5, 650, 'largoCostado');
        this.platforms.create(712.5, 680, 'largoCostado');
        this.platforms.create(1160.5, 723.5, 'cortoParado');
        this.platforms.create(1133.5, 723.5, 'cortoParado');
        this.platforms.create(1198.5, 723.5, 'cortoParado');
        this.platforms.create(1238.5, 723.5, 'cortoParado');
        this.platforms.create(305, 630, 'largoParado');
        this.platforms.create(65, 660, 'cortoCostado');
        this.platforms.create(65, 690, 'cortoCostado');
        this.platforms.create(171, 462.5, 'especialCostado');
        this.platforms.create(112.5, 560, 'especialCostado');
        this.platforms.create(513.5, 390, 'especial');
        this.platforms.create(407.5, 515, 'especial');
        this.platforms.create(207.5, 780, 'especial');
        this.platforms.create(90, 780, 'especial');
        this.platforms.create(712.5, 755, 'largoCostado');
        this.platforms.create(400, 755, 'especialCostado');
        this.platforms.create(1000, 755, 'especialCostado');

        //player asignado
        this.player = this.physics.add.image(20, 105, 'personaje').setImmovable(); // La variable y palabra reservada jugador se encarga de guardar a la imagen del jugador con su posicion en la pantalla, ademas se la establece como  Inamovible es decir permancera quieta amenos que se produzca un movimiento.
        this.player.setCollideWorldBounds(true); // Impide que el jugador se salga del rango de la pantalla, este choca con los bordes.
        this.cursors = this.input.keyboard.createCursorKeys();//Creacion de cursores para jugador

        //// Se añade fisicas a los objetos frutas y estos permanecen estaticos.
        this.grupo = this.physics.add.staticGroup();

        //agregando las manzanas
        this.grupo.create(650, 104, 'manzana');
        this.grupo.create(750, 104, 'manzana');
        this.grupo.create(850, 104, 'manzana');
        this.grupo.create(950, 104, 'manzana');
        this.grupo.create(1050, 104, 'manzana');
        this.grupo.create(1150, 104, 'manzana');
        this.grupo.create(1250, 104, 'manzana');

        // //agregando las ananas  
        this.grupo.create(686, 255, 'anana');
        this.grupo.create(686, 315, 'anana');
        this.grupo.create(686, 375, 'anana');
        this.grupo.create(686, 435, 'anana');
        this.grupo.create(686, 495, 'anana');

        //agregando las bananas
        this.grupo.create(915, 405, 'banana');
        this.grupo.create(915, 505, 'banana');
        this.grupo.create(975, 405, 'banana');
        this.grupo.create(975, 505, 'banana');
        this.grupo.create(1035, 405, 'banana');
        this.grupo.create(1035, 505, 'banana');

        // //agregando las naranjas
        this.grupo.create(452, 201.5, 'naranja');
        this.grupo.create(565, 503, 'naranja');
        this.grupo.create(820, 503, 'naranja');
        this.grupo.create(820, 305, 'naranja');
        this.grupo.create(1280, 305, 'naranja');
        this.grupo.create(1280, 201.5, 'naranja');
        this.grupo.create(1218, 600, 'naranja');
        this.grupo.create(358, 680, 'naranja');
        this.grupo.create(1075, 680, 'naranja');

        //agregando las uvas 
        this.grupo.create(22, 200, 'uva');
        this.grupo.create(22, 300, 'uva');
        this.grupo.create(80, 200, 'uva');
        this.grupo.create(80, 300, 'uva');
        this.grupo.create(140, 200, 'uva');
        this.grupo.create(140, 300, 'uva');

        //agregando las ciruelas
        this.grupo.create(22, 410, 'ciruela');
        this.grupo.create(77, 410, 'ciruela');
        this.grupo.create(132, 410, 'ciruela');
        this.grupo.create(187, 410, 'ciruela');
        this.grupo.create(242, 410, 'ciruela');
        this.grupo.create(297, 410, 'ciruela');

        //agregando los duraznos

        this.grupo.create(25, 610, 'durazno');
        this.grupo.create(110, 610, 'durazno');
        this.grupo.create(195, 610, 'durazno');
        this.grupo.create(255, 513, 'durazno');
        this.grupo.create(155, 513, 'durazno');
        this.grupo.create(55, 513, 'durazno');

        //agregando las sandias
        this.grupo.create(105, 513, 'sandia');
        this.grupo.create(205, 513, 'sandia');
        this.grupo.create(152, 610, 'sandia');
        this.grupo.create(65, 610, 'sandia');
        this.grupo.create(255, 680, 'sandia');

        //agregando los limones
        this.grupo.create(460, 600, 'limon');
        this.grupo.create(540, 600, 'limon');
        this.grupo.create(620, 600, 'limon');
        this.grupo.create(700, 600, 'limon');
        this.grupo.create(780, 600, 'limon');
        this.grupo.create(860, 600, 'limon');
        this.grupo.create(940, 600, 'limon');
        this.grupo.create(1020, 600, 'limon');

        //colision jugador contra las plataformas
        this.physics.add.collider(this.player, this.platforms, this.paredColision, null, this);

        //choque de las frutas y verdura con el jugador 
        this.physics.add.overlap(this.player, this.grupo, this.frutaColision, null, this);

        //Creacion de la musica y sonido
        this.comidaSound = this.sound.add('comida');
        this.golpeSound = this.sound.add('golpe');
        this.scoreSound = this.sound.add('score');
        this.pouSound = this.sound.add('pou');
        this.niniosSound = this.sound.add('ninios');
        this.victoriaSound = this.sound.add('sonidovictoria');

        //texto de puntaje
        this.scoreText = this.add.text(1233, 14, 'X 0', { fontSize: '16px', fill: 'YELLOW', fontFamily: 'Franklin Gothic Medium' });

    }

    update() {

        // Movimientos segun el cursor del teclado
        if (this.cursors.left.isDown) // Si se presiona la tecla "izquierda" :
        {
            this.player.setVelocityX(-100); // El jugador se desplaza a 100 unidades en X hacia la izquierda.
            this.player.setVelocityY(0);  // El desplazamiento en Y se anula en cero, de lo contrario se produce un movimiento hacia la izquierda y en diagonal.
            this.player.flipX = true;    // Gira la imagen del jugador 300 unidades en X hacia la izquierda (la serpiente mira hacia la izquierda).
            this.player.rotation = 300;
        }
        else if (this.cursors.right.isDown)  // El desplazamiento en Y se anula en cero, de lo contrario se produce un movimiento hacia la izquierda y en diagonal.
        {
            this.player.setVelocityX(100);   // El jugador se desplaza a 100 unidades en X hacia la derecha.
            this.player.setVelocityY(0);  //  El desplazamiento en Y se anula en cero, de lo contrario se produce un movimiento hacia la derecha y en diagonal.
            this.player.rotation = -300;     // Gira la imagen del jugador -300 unidades en X hacia la derecha (la serpiente mira hacia la derecha).
        }
        else if (this.cursors.up.isDown)   // Si se presiona la tecla "arriba" :
        {
            this.player.setVelocityY(-100);   // El jugador se desplaza a -100 unidades en Y hacia arriba.
            this.player.setVelocityX(0);    //  El desplazamiento en X se anula en cero, de lo contrario se produce un movimiento hacia arriba y en diagonal.
            this.player.rotation = 0;       // Como la imagen inicial de la serpiente (Jugador) mira hacia arriba, se establece la rotacion en 0 de esta forma devuelve a la posicion incial cuando se presione la tecla arriba.
        }
        else if (this.cursors.down.isDown)   // Si se presiona la tecla "abajo" :
        {
            this.player.setVelocityY(100);    // El jugador se desplaza a -100 unidades en Y hacia abajo.
            this.player.setVelocityX(0);    //  El desplazamiento en X se anula en cero, de lo contrario se produce un movimiento hacia abajo y en diagonal.
            this.player.rotation = 600;     // Gira la imagen de la serpiente 600 unidades en Y es decir  hacia abajo (la serpiente mira hacia  abajo cuando presionamos la tecla abajo).
        }

    }
    frutaColision(player, grupo) {
        grupo.disableBody(true, true);                // Si se produce una colision entre el objeto player y el grupo , estos ultimos se destruyen.
        this.score++;                                // Adiciona un punto por cada colsion con las frutas.
        this.scoreText.setText('X ' + this.score);   // Refleja el valor actualizado del score.
        this.comidaSound.play();                     // Reproduce sonido al colisionar con las frutas.
        this.scoreSound.play();                     // Reproduce sonido del score.
        if (this.grupo.countActive() === 0)         //si el grupo llega a 0  se cambia a la escena de pantalla de Victoria  
        {
            this.mostrarPantallaVictoria();        // Se invoca el metodo que cambiara a la escena nivel dos.
        }
    }
    // Metodo para la colision del jugador y las paredes 
    paredColision() {
        this.golpeSound.play();   // Si el jugador colisiona con alguna de las paredes del mapa del juego, se pierde y se muestra la escena Game Over
        this.mostrarGameOver();   // Se invoca el metodo que cambiara a la escena Game Over.
    }
    //Metodo que muestra la pantalla o escena Game Over
    mostrarGameOver() {
        this.scene.start('GameOver');
        this.sound.pauseAll('musica1');    // Pausa la musica de el nivel 1
        this.golpeSound.play();          // Reproduce sonido.
        this.pouSound.play();            // Reproduce sonido.
    }
    //Metodo que muestra la pantalla o escena de Victoria
    mostrarPantallaVictoria() {
        this.scene.start('Victoria');       // Inicia la escena Victoria          
        this.sound.pauseAll('musica1');      // Pausa la musica de el nivel 1
        this.niniosSound.play();             // Reproduce sonido.
        this.victoriaSound.play();           // Reproduce sonido.
    }

    init() {
        this.score = 0;                   // Inicializa el Marcador Score en 0.
    }
}

export default NivelDos;