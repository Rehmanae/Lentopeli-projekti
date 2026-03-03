#Yees löysit Baarista haalarimerkki.
#Minä teen koodi ilmoitusviesti esim teen sellaista kun löydän haalarimerkkin
#  niin siitä tule ilmoitus ja teen funktion joka pitää kirjaa
#montako haalarimerkkiä on löydetty

def haalarimerkki():
    print("Haalarimerkki löydetty!")

haalarimerkki()

haalarimerkki=[]


#Kysytään käyttäjältä kuinka monta haalarimerkki on löydetty?
def haalarimerkki_määrä():
    maara = input("Kuinka paljon Haalarimerkki on löydetty?:")
    haalarimerkki.append(maara)
    return haalarimerkki

while True:
    print("Haalarimerkkiä on löydetty:", maara)

haalarimerkki_määrä()



