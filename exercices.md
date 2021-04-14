# Exercice 1


    /* programme comparaison chaînes
    * but : comparer la taille d'une châine à une autre
    * auteur : Matthieu Hubert
    * date : 13/04/2021
    */
    
    programme comparaison chaînes
	    chaine_1 = chaîne
	    chaine_2 = chaîne
	début
		afficher "entrer chaîne 1"
		saisir chaine_1
		
		afficher "entrer chaîne 2"
		saisir chaine_2

		si longueur(chaine_1) * 2 > longueur(chaine_2) 
			afficher: "la chaîne 1 est au moins deux fois plus grande que la chaîne 2"
		sinon
			afficher: "la chaîne 1 n'est pas deux fois plus grande que la chaîne 2"
		finsi
	fin


# Exercice 2

    /* programme somme nombres
    * but : effectuer somme de nombres entiers
    * auteur : Matthieu Hubert
    * date : 13/04/2021
    */
    
    programme somme nombres
	    nombre_utilisateur = entier
	    somme = 0 
	début
		afficher "entrer nombre entier"
		saisir nombre_utilisateur
		
		pour i = 0, i <= nombre_utilisateur; i++
			 somme = somme + i
		finpour
		
		afficher somme
	fin

# Exercice 3

    /* programme stockage tableau 
    * but : effectuer somme de nombres entiers
    * auteur : Matthieu Hubert
    * date : 13/04/2021
    */
    
    programme stockage tableau 
	    entier_1 = nbr
	    entier_2 = nbr
	    entier_3 = nbr
	    entier_4 = nbr
	    entier_5 = nbr
	    tableau_nombres= tableau
	    somme = 0
	    moyenne = 0
	début
		afficher "entrer entier 1"
		saisir entier_1
		
		afficher "entrer entier 2"
		saisir entier_2

		afficher "entrer entier 3"
		saisir entier_3

		afficher "entrer entier 4"
		saisir entier_4

		afficher "entrer entier 5"
		saisir entier_5
		
		push entier_1, entier_2, entier_3, entier_4, entier_5 dans tableau_nombres
		
		trouver plus grand entier dans tableau_nombres
		afficher "l'indice est" + indice(plus grand entier dans tableau_nombres)
		
		somme = entier_1 + entier_2 + entier_3 + entier_4 + entier_5 
		moyenne = somme / 5
		afficher "la moyenne est" + moyenne
	fin
