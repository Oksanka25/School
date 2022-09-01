const radio = {
    stations: [
        {
            name: 'Kiss 108',
            songs: [
                {
                    title: 'Baby',
                    artist: 'Lil Baby and DaBaby'
                },
                {
                    title: 'Children Of The KoRn',
                    artist: 'Korn'
                },
                {
                    title: 'Do not Kill the Magic',
                    artist: 'Magic!'
                },
                {
                    title: 'Exposed To Love ',
                    artist: 'Exposé'
                }
            ]
        },
        {
            name: 'IHeart Radio',
            songs: [
                {
                    title: 'Killer Queen',
                    artist: 'Queen'
                },
                {
                    title: 'Maiden ',
                    artist: 'Mø'
                },
                {
                    title: 'Roses ',
                    artist: 'The Chainsmokers'
                },
                {
                    title: 'Shotgun Willie',
                    artist: 'Willie Nelson'
                }
            ]
        },
        {
            name: 'Greatest Songs',
            songs: [
                {
                    title: 'Baby Love',
                    artist: 'The Supremes'
                },
                {
                    title: 'Pancho and Lefty ',
                    artist: 'Townes Van Zandt'
                },
                {
                    title: 'Truth Hurts',
                    artist: 'Lizzo'
                },
                {
                    title: 'Without You',
                    artist: 'Harry Nilsson'
                },
                {
                    title: 'You are So Vain',
                    artist: 'Carly Simon'
                }
            ]
        },
    ],

    changeStation() {
        const randomStation = this.stations[Math.floor(Math.random() * this.stations.length)];
        // console.log(`Station: ${randomStation.name}`)
        const randomSong = randomStation.songs[Math.floor(Math.random() * randomStation.songs.length)];
        console.log(`Now Playing: ${randomSong.title} by ${randomSong.artist} on ${randomStation.name} Station`)

        // for all songs in station
        // randomStation.songs.forEach(
        //     el => console.log(`Now Playing: ${el.title} by ${el.artist}`)
        // )
    }
}
radio.changeStation()



