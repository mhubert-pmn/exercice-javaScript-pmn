    /* programme Hippopotamus 
    * but : creation et utilisation de la classe Hippopotamus
    * auteur : Matthieu Hubert
    * date : 13/04/2021
    */


classe Hippopotamus(name, weight, tusksSize)
début
    fonction swim()
    début
        weight = weight - 0.3
    fin

    fonction eat()
    début
        weight = weight + 1
    fin

    fonction fight(Hippopotamus_1, Hippopotamus_2)
    début
        si tusksSize Hippopotamus_1 > tusksSize Hippopotamus_2 alors
            afficher "Hippopotamus_1 a les plus grandes défenses, il l'emporte"
        ou si tusksSize Hippopotamus_1 = tusksSize Hippopotamus_2 alors
            afficher "égalité"
        sinon
            afficher "Hippopotamus_2 a les plus grandes défenses, il l'emporte"
        finsi
fin


Hippopotamus.toString() = fonction stringHippo
début
    afficher "L'hippopotame s'appel " + name + ", il pèse " + weight + "kg et il a des défenses d'une longueur de " + tusksSize) + "cm"
fin

fonction cycle_life(Hippopotamus)
heure = 0
début
    tantque heure < 15 pour chaque heure
        heure = heure + 1
        eat() * 2
        swim() * 3
    fin tantque
fin

fonction combat
début
    Hippopotamus_1 = Hippopotamus("da", "300", "200")
    Hippopotamus_2 = Hippopotamus("fo", "300", "100")
    appel fonction fight()
fin

appel Hippopotamus("fred", "300", "150")

fonction soir
début
    jour = 0
    si jour < 21 alors
        jour = jour + 1
        appel Hippopotamus
fin