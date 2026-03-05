#Yees löysit Baarista haalarimerkki.
#Teen koodi, ilmoitusviesti esim kun pelaaja löytää haalarimerkkin
#Niin hänelle tule ilmoitus siitä ja teen funktion joka pitää kirjaa montako haalarimerkkiä on löydetty.

def haalarimerkki(maara):
    maara = maara +1
    print("Haalarimerkki löydetty!")
    print("Sinulla on nyt", maara, "kpl")
    return maara

#Kysytään käyttäjältä kuinka monta haalarimerkki on löydetty?
def haalarimerkki_määrä():
    maara = input("Kuinka paljon Haalarimerkki on löydetty?:")
    return haalarimerkki




