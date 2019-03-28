// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(users) {
        $('.user-container').empty()
        let source = $('#user-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(users);
        $('.user-container').append(newHTML);

    }

    _renderFriends(users) {
        $('.friends-container').empty()
        let source = $('#user-friends-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({
            users
        });
        $('.friends-container').append(newHTML);
    }

    _renderQuote(quoteInfo) {

    }

    _renderPokemon(pokemon) {
        $('.pokemon-container').empty()
        let source = $('#pokemon-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(pokemon);
        $('.pokemon-container').append(newHTML);
    }

    _renderMeat(meatText) {
        $('.meat-container').empty()
        let source = $('#meat-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(meatText);
        $('.meat-container').append(newHTML);
    }

    render(data) {
        this._renderPokemon(data.poke)
        this._renderUsers(data.mainUser)
        this._renderFriends(data.myFridens)
        this._renderMeat(data.baconText)
        //invokes all the individual _render methods
    }
}