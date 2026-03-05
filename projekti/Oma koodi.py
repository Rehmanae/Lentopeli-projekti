#Löysit Baarista haalarimerkki.
#Teen koodi, ilmoitusviesti esim kun pelaaja löytää haalarimerkkin
#Niin hänelle tule ilmoitus siitä ja teen funktion joka pitää kirjaa montako haalarimerkkiä on löydetty yhteensä.

def haalarimerkki(maara):
    maara = maara +1
    print("Haalarimerkki löydetty!")
    print("Sinulla on nyt", maara, "kpl")
    return maara

#Kysytään käyttäjältä kuinka monta haalarimerkki on löydetty?
maara = int(input("Montako haalarimerkkiä sinulla on?: "))

maara = haalarimerkki(maara)





