import CustomLocalStorageService from "./CustomLocalStorageService.js";
import LocalUsersService from "./LocalUsersService.js";
import MessageService from "./MessageService.js";

class AuthService {

  // Bienvenue dans le service d'authentification 
  // il possède trois comportements autrement dit trois méthodes 
  // J'ai décide de ne pas mettre de constructeur et par conséquent je n'ai créé que des méthodes statiques. 
  // la méthode login attend un paramètre objet { email: string, password : strign } pour écrire cela en typescript 



  static async login({ email, password }) {


    // la première chose que je fais est de récupérer tous les utilisareurs de ma mocked database pour ensuite voir si l'email et le password appartiennent bien à l'un d'eux. En effet ici nous sommes en train de connecter une utilisateur qui par principe doit exister en base de données. Il ne s'agit pas d'une inscription auquel cas nous aurions simplement vérifier si l'utilisateur n'était pas déjà en base de données histoire d'éviter de lui créer un deuxième compte.

    
    const users = await LocalUsersService.getUsers();



    if (users.length) {

      // si je récupère bien du service LocalUsersService un tableau d'utilisareurs alors 
      // je regarde si dans ce tableau je trouve un utilisateur (objet) dont la propriété email est identique à l'email donnée par l'utilisateur en train de se logger;


      const user = users.find((user) => user.email === email);


      if (user) {

        // si je trouve bien un tel utilisateur dans la base de données ( autrement dit un utilisateur ayant un email égal à celui donné par l'utilisateur souhaitant se logger je regarde ou plutôt vérifie si le mot de passe qu'il a donné coincide avec celui qui se trouve dans le bdd et qui est l'une des propriétés de l'utilisateur récupéré dans le tableau 


        if (user.password === password) {

          // si tel est le case alors je stocke dans la mémoire locale du navigateur que l'utilisateur utilise un objet token ( j'ai pris ce nom mais vous pouvez utiliser autre chose) qui contient l'email de l'utilisateur et une propriété isLoggedIn qui est un booléen. 


          // J'ai donc un service CustomLocalStorage qui s'occupe de parser un JSON le javascript ou bien de parser en JS le JSON. En effet les informations stockés dans le local storage doivent être en JSON si il s'agit d'objet et non en JS.

          // Aussi est-il important d'avoir ce service CustomeLocalStorageService parce que je l'ai écrit pour m'éviter d'avoir à faire des erreurs car dedans il y a des méthodes de parsing qui font tout pour moi à ce niveau-là
          CustomLocalStorageService.setSpecificItem("token", {
            isLoggedIn: true,
            email: user.email,
          });


          // Je vérifie que le stockage du token a bien eu lieu et je demande à le récupérer et le stocker dans une variable navigatorToken

          const navigatorToken =
            CustomLocalStorageService.getSpecificItem("token");


          // si la propriété email de l'objet token == email de l'utilisateur cherchant à se logger alors c'est que le processus s'est bien passé et je fais en sorte que la fonction, après un petit message gérer par le service de Messagerie que j'aurai pu appeler le service de Notification, retourne true 

          if (navigatorToken.email == email) {
            new MessageService().message = {
              type: "positive",
              content: "Vous êtes connecté(e)",
            };
            return true;
          }
        } else {
          new MessageService().message = {
            type: "negative",
            content: "Informations incorrectes",
          };
          return false;
        }
      } else {
        new MessageService().message = {
          type: "negative",
          content: "Informations incorrectes",
        };
        return false;
      }
    } else {
      new MessageService().message = {
        type: "negative",
        content: "Impossible de se connecter à la base de données",
      };
      return false;
    }
  }

  static isLoggedIn() {
    const token = CustomLocalStorageService.getSpecificItem("token");
    new MessageService().message = {
      type: "info",
      content: "Vous êtes toujours connecté(e)",
    };
    return token.isLoggedIn;
  }

  static logout(token) {
    CustomLocalStorageService.removeSpecificItem(token);
    new MessageService().message = {
      type: "info",
      content: "Déconnexion en cours",
    };
  }
}

export default AuthService;
