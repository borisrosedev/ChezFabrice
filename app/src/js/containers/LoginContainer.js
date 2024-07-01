// le plus important la logique métier de la page login

import AuthService from "../services/AuthService.js";

class LoginContainer {
  // Je pars du principe qu'au moment où j'utilise cette classe l'interface login est déjà associé au html
  // Le constructeur est une fonction très particulière
  // Elle permet à une classe de créer des instances d'elle-même.
  // Elle permet à une classe de transmettre son prototype à d'autres objets qui deviennent ainsi ses instances.
  // Une classe n'a pas obligatoirement un constructeur
  constructor() {
    const form = document.getElementById("login-form");
    const self = this;

    form.onsubmit = function (e) {
      console.log(this) // l'élément html qui est contenu dans le form est devenu l'objet appelant ici 
      // c'est pourquoi j'ai dû stocker dans la variable self le this qui lui faisait référence à l'objet appelant en l'occurence la classe LoginContainer pour utiliser une de ses méthodes onSubmit()
      self.onSubmit(e);
    };
  }

  onSubmit(e) {
    e.preventDefault();
    // nous devons arrêter le rechargement de la page car nous alors juste en-dessous gérer nous-mêmes ce qui se passe après que l'utilisateur a cliqué sur Valider 

    // C'est toujours le même principe : si vous souhaitez utiliser des éléments du DOM (autrement dit de la page html) vous devez les stocker dans des variables 
    const email = document.getElementById("email");
    // je veux récupérer à termes sa valeur autrement dit ce que l'utilisateur a entré dans le champs email 

    const password = document.getElementById("password");
    // idem pour le mot de passe,

    const emailError = document.getElementById("email-error");
    // si vous regardez bien mon composant input-article vous allez voir que j'ai créé une balise small qui permettra d'afficher des messages en dessous des champs si jamais l'utilisateur écrit qqch qui est erronée ou qu'il oublie de remplir un champs

    const passwordError = document.getElementById("password-error");
    // idem


    const emailValue = email.value;
    const passwordValue = password.value;
    // je stocke au-dessus les valeurs des inputs du formulaire de login dans deux variables 


    if (!emailValue) {
      // si l'utilisateur n'a pas complété le champs email alors je lui affiche un message en ajoutant du contenu textuel à l'intérieur des balises small susmentionnées 

      // Je n'ai pas utilisé innerHTML parce que la chaîne de caractères ci-dessous n'a pas besoin d'être interprétées en HTML puisqu'elle ne contient aucune balise
      emailError.innerText = "Veuillez entrer un identifiant";
      return;
    }

    if (!passwordValue) {
      // idem pour le mot de passe
      passwordError.innerText = "Veuillez entrer le mot de passe";
      return;
    }

    // si tout est rempli et que précédemment des messages d'erreur avaient été affichées je vide le contenu des balises small qui affichaient les messages en question puisque maintenant tout est correctement rempli
    passwordError.innerText = emailError.innerText = "";

    // Vu que j'ai des valeurs (alors vous auriez pu ajouter des contrôles, des contraintes et des conditions pour maximiser la qualité des informations pourvues par l'utilisateur et éviter des surpises) je peux maintenant les passer au service qui va s'occuper de l'authentification.


    // Un service est pour moi toujours une classe et a minima un objet. Je veux que tous les comportements liés à l'authentification s'y trouvent comme le login, le signup le logout etc

    // L'idée des classes c'est de rassembler des comportements qui ont une relation 

    // Comme vous pouvez le voir j'appelle SUR la classe elle-même sa méthode (de classe) login autrement dit dès que vous voyez cette écriture vous pouvez vous dire qu'il s'agit d'une méthode statique car les méthodes statiques sont des méthodes appelées SUR le nom de la classe et non sur une instance (new qqch()) de la classe.

    // quand vous voyez le mot then derrière vous pouvez être certain(e) qu'il y a une action asynchrone ( qui n'est pas instantanée dans la fonction) Autrement dit la méthode statique login retourne une promesse qui n'est pas accomplie instantanément par définition. 
    // Elle est d'abord pending (en cours) puis potentiellement fulfilled (accomplie)

    AuthService.login({ email: emailValue, password: passwordValue }).then(
      (result) => {

        // result represente ce que retourne la fonction une fois accomplie 
        // ici cela peut me retourne soit undefined soit un booleen 
        
        // ci-dessous je vérifie que le result n'est ni undefined ni false 
        // il est égal a true si tout c'est bien passé selon ce que j'ai écrit dans la méthode login que je vous laisse le loisir d'aller observer 

        if (result) {

          // dans le case ou result == true alors 2secondes après je redirige l'utilisateur vers la homePage / landingPage 
          setTimeout(() => {
            // setTimeout() est également une fonction asynchrone car elle permet une exécution différé d'un d'instructions ce que la méthode then permet également puisqu'elle n'exécute ce qu'elle contient à savoir une callback que si la promesse à laquelle est elle associée par dot.notation est accomplie
            window.location.hash = "";
          }, 2000);


        }
      },
    );
  }
}

export default LoginContainer;
