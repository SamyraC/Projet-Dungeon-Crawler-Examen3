document.addEventListener("DOMContentLoaded", () =>  { //Utilisation de la fonction flechée => pour avoir une syntaxe plus courte que les expressions de fonction 
    const codeJeu = document.querySelector(".code-jeu");
    const recommencerBouton = document.getElementById("recommencer-btn");
    const taillegrille = { rows: 15, cols: 25 };
    const joueur = { a: 0, b: 0};
    const monstres = [ {a: 5, b:5}, {a: 10, b: 8}];
    const tresors = [{a: 2, b:3}, {a:20, b: 10}];
    const murs = [{a: 3, b:2}, {a:6, b:6}];

    //Fonction de la grille du jeu 

           function grilleJeu() {
           for (let row = 0; row < taillegrille.rows; row++) {
           for (let col = 0; col < taillegrille.cols; col++) {
           const cell = document.createElement("div");
           cell.classList.add("cell");

           
    //definition de type de cellule en se basant sur les coordonees

             if (joueur.a === col && joueur.b === row) {
             cell.classList.add("joueur"); }
             else if (monstres.some(monstre => monstre.a === col && monstre.b === row)) {
             cell.classList.add("monstre"); }
             else if (tresors.some(tresor => tresor.a === col && tresor.b === row)) {
             cell.classList.add("tresor");}
             else if (murs.some(mur => mur.a === col && mur.b === row)) {
             cell.classList.add("mur");}
             else {
             cell.classList.add("vide");
            }  
             codeJeu.appendChild(cell);
        } } }
    
    //generation de la grille par appel de grillejeu
             grilleJeu();

          
    //fonction servant a la mise a jour de la grille
           function miseajourJeu() {
        //suppression de l'ancienne grille
           codeJeu.innerHTML = "";
        //reconstitution de la grille accompagnée des positions ajoutées
           grilleJeu();
           

    // Initialisation du score 
            let score = 0;
        // Fonction d'adaptation du jeu et score
            function miseajourJeu() {
        // suppression de la grille precedente
            codeJeu.innerHTML = "";
        // mise a jour pour deplacer des monstres 
            function miseajourJeu() {
        //suppression de l'ancienne grille
            codeJeu.innerHTML = "";
        //deplacement des monstres aleatoirement
            monstres.forEach(monstre => {
            const directionHasard = Math.floor(Math.random() * 4); // 0: haut, 1: bas, 2: gauche, 3: droite
            if (directionHasard === 0 && monstre.b > 0) {
                 monstre.b--;
            } else if (directionHasard === 1 && monstre.b < taillegrille.rows - 1) {
                monstre.b++;
            } else if (directionHasard === 2 && monstre.a > 0) {
                monstre.a--;
            } else if (directionHasard === 3 && monstre.a < taillegrille.cols - 1) {
                monstre.a++;
            }
            });
           }   
        }
        // mise a jour de l'affichage du score
           const scoreDisplay = document.getElementById("score");
           scoreDisplay.textContent = `Score: ${score}`;}
        // code pour possibles collisions
        //collisions avec les monstres
        if (monstres.some(monstre => monstre.a === joueur.a) && monstre.b === joueur.b) {
            jeuTerminé("perdu");
            return;
            }
        //collision avec des tresors
            const indexcollectetresor = tresors.recupindex(tresor => tresor.a === joueur.a && tresor.b === joueur.b);
            if (indexcollectetresor !== -1) {
            tresors.splice(indexcollectetresor, 1);
            if (tresors.length === 0) {
            jeuTerminé("gagné");
            }  
            }
        //fonction pour les cas de victoire ou echec
               if (tresors.length === 0) {
                jeuTerminé("gagné");
                return;
                }
                
                function jeuTerminé(resultat) {
                if (resultat === "gagné") {
                //apparition d'un message de victoire -- empechement d'autre mouvement 
                alert("FELICITATIONS! Vous avez collecté tout les trésors et avez gagnez le jeu!"); }
                else if (resultat === "perdu") {
                // apparition d'un message de perte -- empechement d'autre mouvement
                alert("Dommage! Vous avez été attrapé par un monstre. GAME OVER!")
                }
        //ajout des event listener pour le bouton recommencer et pour les differents mouvements du joueur
              //event listener pour les differents mouvements du joueur
        document.addEventListener("keydown", (event) => {
            const key = event.key.toLowerCase();
     
            if (key === "haut" && joueur.b > 0) {
            joueur.b--;}
            else if (key === "bas" && joueur.b < taillegrille.rows -1) {
            joueur.b++;}
            else if (key === "gauche" && joueur.a > 0) {
            joueur.a--;}
            else if (key === "droite" && joueur.a < taillegrille.cols -1)  {
            joueur.a++; 
            } 
        
            miseajourJeu();
     });  
        //event listener pour le bouton recommencer 
            recommencerBouton.addEventListener("click", () => {
           //la renitialisation de la position du joueur et du jeu en entier lui meme
            joueur.a = 0;
            joueur.b = 0;
          //suppression de l'ancienne grille
             codeJeu.innerHTML = "";
          //Recreation de la grille
             grilleJeu();
     });

        // mise a jour pour collecter les tresors et donner le score
             function miseajourJeu() {
        // Collisisons avec les tresors
             const indexcollectetresor = tresors.findIndex(tresor => tresor.x === joueur.a && tresor.b === joueur.b);
             if (indexcollectetresor !== -1) {
             tresors.splice(indexcollectetresor, 1);
             score++; // Incrementation du score
             if (tresors.length === 0) {
             jeuTerminé("gagné");
             return;
             }
            }
        }


    //reinitialisation de la position du joueur et du jeu en lui meme
         joueur.a = 0;
         joueur.b = 0;
         
    //suppression de l'ancienne grille
         codeJeu.innerHTML = "";

    //recreation de la grille
         grilleJeu();
    
    }
});



