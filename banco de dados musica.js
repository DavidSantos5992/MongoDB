/* Deverá criar as instruções de insert */
use('spotifyData')
db.top50.insertMany([
{ 
    "TrackName": "Señorita", 
     "ArtistName": "Show Mendes", 
     "Genre": "canadian pop", 
     "Beast Per Minute": 117, 
     "Energy": 55, 
     "Danceability": 76, 
     "Loudeness dB" : -6, 
     "Liveness": 8, 
     "Valence": 75, 
     "Length": 191, 
     "Acousticness": 4, 
     "Speechiness" : 3, 
     "Popularity": 79 
},

{ 
    "TrackName": "China", 
  "ArtistName": "Anuel AA", 
  "Genre": "reggaeton flow", 
  "Beast Per Minute": 105 , 
  "Energy": 81 , 
  "Danceability": 79, 
  "Loudeness dB": -4, 
  "Liveness": 8, 
  "Valence": 61, 
  "Length": 302, 
  "Acousticness": 8, 
  "Speechiness": 9, 
  "Popularity": 92 
},

{ 
    "TrackName": "boyfriend (with Social House)",
    "ArtistName": "Ariana Grande",
    "Genre": "dance pop",
    "Beast Per Minute": 190,
    "Energy": 80,
    "Danceability": 40,
    "Loudeness dB": -40,
    "Liveness": 16,
    "Valence": 70,
    "Length": 186,
    "Acousticness": 12,
    "Speechiness": 46,
    "Popularity": 85
            
},

{ 
    "TrackName": "Beatiful Peaple (feat. khalid)", 
    "ArtistName": "Ed Sheeran", 
    "Genre": "pop", 
    "Beast Per Minute": 93, 
    "Energy": 65, 
    "Danceability": 64, 
    "Loudeness dB": -8, 
    "Liveness": 8, 
    "Valence": 55, 
    "Length": 198, 
    "Acousticness": 12, 
    "Speechiness": 19, 
    "Popularity": 85 
},

{ 
    "TrackName": "Goodbyes (Feat. Young Thug)", 
    "ArtistName": "Post Malone", 
    "Genre": "dfw rap", 
    "Beast Per Minute": 150, 
    "Energy": 65, 
    "Danceability": 58, 
    "Loudeness dB": -4, 
    "Liveness": 11, 
    "Valence": 18, 
    "Length": 175 , 
    "Acousticness": 45, 
    "Speechiness": 7, 
    "Popularity": 94 
},

{ 
  "TrackName": "I Don't Care (with Justin Bieber)", 
  "ArtistName": "Ed Sheeran", 
  "Genre": "pop", 
  "Beast Per Minute": 102, 
  "Energy": 68, 
  "Danceability": 80, 
  "Loudeness dB" : -5, 
  "Liveness": 9, 
  "Valence": 84, 
  "Length": 220, 
  "Acousticness": 9, 
  "Speechiness": 4, 
  "Popularity": 84 
},

{ 
  "TrackName": "Ranson", 
  "ArtistName": "Lil Tecca", 
  "Genre": "trap music", 
  "Beast Per Minute": 180, 
  "Energy": 64, 
  "Danceability": 75, 
  "Loudeness dB": -6, 
  "Liveness": 7, 
  "Valence": 23, 
  "Length": 131, 
  "Acousticness": 2, 
  "Speechiness": 29, 
  "Popularity": 92
},
  
{ 
  "TrackName": "How Do You Sleep",
  "ArtistName": "Sam Smith", 
  "Genre": "pop", 
  "Beast Per Minute": 111, 
  "Energy": 68, 
  "Danceability": 48, 
  "Loudeness dB": -5, 
  "Liveness": 8, 
  "Valence": 35, 
  "Length": 202, 
  "Acousticness": 15, 
  "Speechiness": 9, 
  "Popularity": 90 
},
  
{ 
  "TrackName": "Old Town Road - Remix", 
  "ArtistName": "Lil Nas X", 
  "Genre": "country rap", 
  "Beast Per Minute": 136, 
  "Energy": 62, 
  "Danceability": 88, 
  "Loudeness dB": -6, 
  "Liveness": 11, 
  "Valence": 64, 
  "Length": 157, 
  "Acousticness": 5, 
  "Speechiness": 10, 
  "Popularity": 87
},  
  
{ 
  "TrackName": "bad guy", 
  "ArtistName": "Billie Eilish", 
  "Genre": "eletronicpop", 
  "Beast Per Minute": 135, 
  "Energy": 43, 
  "Danceability": 70, 
  "Loudeness dB": -11, 
  "Liveness": 10, 
  "Valence": 56, 
  "Length": 194,
  "Acousticness": 33, 
  "Speechiness": 38, 
  "Popularity": 95
},
  
{ 
  "TrackName": "Callaíta", 
  "ArtistName": "Bad Bunny", 
  "Genre": "reggaeton", 
  "Beast Per Minute": 176, 
  "Energy": 62, 
  "Danceability": 61, 
  "Loudeness dB": -5, 
  "Liveness": 24, 
  "Valence": 24, 
  "Length": 251, 
  "Acousticness": 60, 
  "Speechiness": 31, 
  "Popularity": 93 
},
  
{ 
  "TrackName": "Loco Contigo (Feat J. Balvin & Tyga)", 
  "ArtistName": "DJ Snake", 
  "Genre": "dance pop", 
  "Beast Per Minute": 96, 
  "Energy": 71, 
  "Danceability": 82, 
  "Loudeness dB": -4, 
  "Liveness": 15, 
  "Valence": 38, 
  "Length": 185, 
  "Acousticness": 28, 
  "Speechiness": 7, 
  "Popularity": 86 
},

])
use('spotifyData')
db.top50.drop()

/* Deverá recuperar todos os documentos do Artista Ed Sheeran */
use('spotifyData')
db.top50.find({ArtistName:'Ed Sheeran'})

/* Deverá recuperar todos os documentos com as músicas mais populares (popularity > 90) */
use('spotifyData')
db.top50.find({ Popularity: {$gt:90} })

/* Deverá recuperar todos os documentos com as músicas do gênero pop */
use('spotifyData')
db.top50.find({ Genre: 'pop'})

/* Atualize as canções do Ed Sheeran alterando o nome do artista para Teddy */
use('spotifyData')
db.top50.updateMany({ArtistName: 'Ed Sheeran'}, { $set:{ArtistName: 'pinto' }})

/* Remova todos as canções do artista Dj Snake */
use('spotifyData')
db.top50.remove({ArtistName: 'Dj Snake'})

/* Remova todos as canções com popularidade < 86 */
use('spotifyData')
db.top50.remove({Popularity: {$lt: 86}})

use('spotifyData')
db.top50.find()