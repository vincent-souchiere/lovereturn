const name = ["le return", "la boucle", "le modulo", "la condition"] 

let problem = prompt("Quel problématique rencontrez-vous entre : le return / la boucle / le modulo / la condition ?")

    for (i=0; i<500; i++){
        function lasolution (name) {
            return `J'aime ${name}`
         }

    switch(problem){
        case "return":
            console.log (lasolution(name[0]));
            break;
        case "boucle":
            console.log (lasolution(name[1]));
            break;
        case "modulo":
            console.log (lasolution(name[2]));
            break;
        case "condition":
            console.log (lasolution(name[3]));
            break;
        default:
            console.log("Pas d'ouverture de VS Code pas de problème. Tu as raison.");
            break;
    }
}