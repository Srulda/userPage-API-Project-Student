//This is the class that will manage all your APIs
class APIManager {
    constructor() {
        this.data = {}
    }
    //you should make all your API requests here
    //each request should update the `data` object accordingly
    loadData() {
        let poke_URL = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*(945-1))}`
        $.get(poke_URL, (pokemon) => {
            let poke = {
                img: pokemon.sprites.front_default,
                name: pokemon.name
            }
            this.data.poke = poke
        })

        let mainUser_URL = `https://randomuser.me/api/?format=pretty`
        $.get(mainUser_URL, (data) => {
            let mainUser = {
                first: data.results[0].name.first,
                last: data.results[0].name.last,
                city: data.results[0].location.city,
                state: data.results[0].location.state,
                img: data.results[0].picture.large
            }
            this.data.mainUser = mainUser
        })

        let friends_URL = `https://randomuser.me/api/?results=7`
        $.get(friends_URL, (data) => {
            let friendsArr = []
            for (let i = 0; i < 6; i++) {
                let x = data.results[i]
                friendsArr.push({
                    first: x.name.first,
                    last: x.name.last
                })
            }

            this.data.myFridens = friendsArr
        })

        let bacon_URL = `https://baconipsum.com/api/?type=meat-and-filler&paras=2`
        $.get(bacon_URL, (text) => {
            let bacon = text
            this.data.baconText = bacon
        })
    }
}