#!/bin/bash
cd .. #je me place un niveau au-dessus donc à la racine
boiler_plate(){
    #si vous exécutez cette fonction elle va vous créer une architecture propre
    mkdir assets src #ces deux dossiers doivent être créés à la racine 
    cd src && mkdir js html css #mais on ne va plus utiliser le dossier html
    cd ..
    cd js && mkidr components pages containers #les deux premiers dossiers sont des dossiers de création d'interface UI et le dernier est LE PLUS IMPORTANT il contient la logique métier (business logic) autrement dit ce qui permet aux pages d'être utiles
    mkdir services data_sources #ces deux fichiers sont TRÈS IMPORTANTS pour la gestion de votre application vis-à-vis de ses composants et de l'extérieur
    #Le dossier services va contenir tous les services dont votre application a besoin par exemple un service d'authentification,un service de LocalStorage pour faire persister les données dans le navigateur. 
    touch ../../.gitignore #si vous prévoyez que votre application sera un dépôt local git et que certains dossiers et fichiers ne doivent pas être l'objet d'un commit 
    touch ../../.prettierrc #si vous prévoyez que votre application sera gérée dans son format par prettier et que certains fichiers ou dossiers ne devront pas l'être 
    #les fichiers .gitignore et .prettierrc doivent se trouver à la racine de votre application

    echo "node_modules" >> ../../.gitignore
    echo ".prettierrc" >> ../../.gitignore
    echo ".vscode" >> ../../.gitignore
    echo "DS_Store" >> ../../.gitignore
   
}

boiler_plate #exécution de la fonction de création du boilerplate