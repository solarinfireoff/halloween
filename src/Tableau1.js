/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');


        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gmushroom1','assets/level/ground/g-mushroom1.png');

        this.load.image('gtree2','assets/level/ground/g-tree-2.png  ');
        this.load.image('gpont','assets/level/ground/g-wooden-bridge.png');
        this.load.image('gstone4','assets/level/ground/g-stone-4.png');
        this.load.image('gwater', 'assets/level/ground/g-water.png');
        this.load.image('gbox2','assets/level/ground/g-box-2.png');
        this.load.image('gright','assets/level/ground/g-right.png');
        this.load.image('gstone5','assets/level/ground/g-stone-4.png');
        this.load.image('gwat2','assets/level/ground/g-water.png');
        this.load.image('gtree4','assets/level/ground/g-tree-1.png');
        this.load.image('gvinea','assets/level/ground/g-vine-a.png');
        this.load.image('gvineb','assets/level/ground/g-vine-b.png');



        for(let i=1;i<=5;i++) {
            this.load.image('trappp' +i, 'assets/characters/trap2/open/trappp-' +i+ '.png');
        }





        this.load.image('gfellentree1','assets/level/ground/g-fellen-tree-1.png');
        this.load.image('gmid1','assets/level/ground/g-mid.png');



        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }



        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for(let i=1;i<=3;i++){
            this.load.image('filterblood'+i, 'assets/level/filters/bloody/frame'+i+'.png');
        }

        //rain

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        this.load.image('bg-animation-a', 'assets/level/background-2/bg-animation/bg-animation-a.png');

    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-a').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-100,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(400,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.angle=-5; //pencher l'arbre de -5 degrès

        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(-300,200, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);


        /**
         *ajoutgris
         */
        let water=this.add.image(30,600, 'gwater').setOrigin(-1,1);
        let wat2=this.add.image(401,600, 'gwat2').setOrigin(-1,1);






        //-------------ground (premier plan noir)---------------------------









        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree1=this.add.image(300,350, 'gTree1').setOrigin(0,1);

        this.groundContainer.add(tree1);
        /**
         * ajout
         */
        let mushroom1=this.add.image(300,350, 'gmushroom1').setOrigin(1.5,1)

        let gtree2=this.add.image(300,400, 'gtree2').setOrigin(2,1)

        let pont=this.add.image(300,400,'gpont').setOrigin(-0.44,1.3)

        let stone4=this.add.image(300,100 , 'gstone4').setOrigin(-1.45,-5.1);
        stone4.flipX=true ;

        let right=this.add.image(300,500, 'gright').setOrigin(-3.5,0.4);
        right.flipX=true;

        let stone5=this.add.image(300,500,'gstone5').setOrigin(-5.8,4.2);

        let tree2=this.add.image(300,450,'gtree4').setOrigin(-6.1,1);
        tree2.flipX=true
        tree2.angle=-5;


        let vinea=this.add.image(300,500, 'gvinea').setOrigin(-6,10);

        /**
         * ajout2
         */
        let mid1=this.add.image(190,731,'gmid1').setOrigin(-5,1,6);



        /**ajout2
         *
         */
        let fellentree1=this.add.image(300,350,'gfellentree1').setOrigin(-4.5,5);



        // let trap1=this.add.image(300,350,'trap0').setOrigin(-5.5,5);











        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions
        let gMid1=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width+1,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */

        this.trappp = this.add.sprite(0,0, 'trappp1').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'open',
            frames: [//this.getFrames("trappp",5),
                {key:'trapp1'},
                {key:'trapp1'},
                {key:'trapp1'},

            ],
            frameRate: 12,
            repeat: -1

            })
        this.trappp.play('open');






        this.filterblood = this.add.sprite(0, 0, 'filterblood1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'bloody',
            frames: [
                {key:'filterblood1'},
                {key:'filterblood2'},
                {key:'filterblood3'},
            ],
            frameRate: 16,
            loop: -+1

        });


        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterblood.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
    }
    getFrames(prefix,length) {
        let frames = [];
        for (let i = 1; i <= length; i++) {
            frames.push({key: prefix + i});
        }
        return frames;
    }





    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=4;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-4;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.UP:
                    me.trap1close.play('trap1closeanim');
                    break;
                case Phaser.Input.Keyboard.KeyCodes.DOWN:
                    me.trap1close.play('trap1openanim');
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;

                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterblood.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
