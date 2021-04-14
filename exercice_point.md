    /* programme Point 
    * but : creation et utilisation de la classe point
    * auteur : Matthieu Hubert
    * date : 13/04/2021
    */

classe Point
    construteur
        x = entier
        y = entier
        setX(x)
        getX()
        setY(y)
        getY()
    
fonction PointString = Point.toString()

fonction testPoint
début
    affecter 1 à x
    affecter 2 à y
fin

appel classe testPoint