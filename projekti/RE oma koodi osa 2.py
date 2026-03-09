# Kirjoita funktio / (koodi) joka laskee etäisyyden appropiste1
#ja appropiste 2 välillä, esim. piste 1k - piste 2k = väli/matka on 1k


import random

# Tässä Funktio laskee kahden pisteen välisen etäisyyden
def appropiste(piste1, piste2):
    # Tarkistaa kumpi pisteistä on suurempi
    if piste1 > piste2:
        erotus = piste2 - piste1     # Laskee pisteiden välinen erotus
    else:
        erotus = piste2 - piste1     # Eli jos piste2 on suurempi niin lasketaan näin
    return erotus

appropiste1 = random.randint(1000,10000)

appropiste2 = random.randint(1000,10000)

print(appropiste1)
print(appropiste2)

matka = appropiste(appropiste1, appropiste2)

print("Erotus on", matka)


