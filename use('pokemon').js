use('pokemon')
db.pokemons.find()

/*Imprima todos os nomes de Pokémon no console do MongoDB da seguinte forma
name: <name_of_pokemon>. */
use('pokemon')
let result = db.pokemons.find()
result.forEach(pokemon => {
    console.log(pokemon.name)
});


/* Item 2 - Encontre o Pokémon com o nome "Mew". */
use('pokemon')
db.pokemons.find({name:'Mew'})

/* Item 3 - Quantos Pokémons são 87.5 masculinos? */
use('pokemon')
db.pokemons.find({'misc.sex.male' : 87.5}).count()

/* Item 4 - Quantos Pokémons tem ice "2"? */
use('pokemon')
db.pokemons.find({'damages.ice': "2"}).count()

/* Item 5 - Quantos Pokémons tem ice "2" e são fêmeas "12.5"? */
use("pokemon")
db.pokemons.find({ $and: [{"damages.ice": "2"}, {"misc.sex.female": "12.5"}]}).count()

/* item 6 quantos pokemons tem speed '60  ou sao do type 'Grass*/
use('pokemon')
db.pokemons.find({ $or: [{'stats.speed': '60'}, { 'type':'Grass' }] }).count()


/* item 7 quantoos tem ambos 'speed': '60' e são do tipo 'Grass*/
use('pokemon')
db.pokemons.find({ $and: [{'stats.speed': '60'}, {'type':'Grass'}] }).count()

/* Item 8 - Crie uma nova coleção com o nome Schmittymons e adicione um novo Schmittymon com as seguintes características:
name: Schmitty
img: http://40.media.tumblr.com/tumblr_m78kl3JexC1rag2cto1_500.jpg
tutor:
name: grass pledge
gen: V
happiness: 99 */

use('pokemons')
db.createCollection('Schmittymons')

use('pokemons')
db.Schmittymons.insertOne({
    name: 'Schmitty',
    img: 'http://40.media.tumblr.com/tumblr_m78kl3JexC1rag2cto1_500.jpg',
    tutor:'',
    name: 'grass pledge',
    gen: 'V',
    happiness: '99'
})


use('pokemons')
db.Schmittymons.find()

use('pokemon')
db.pokemons.find()
