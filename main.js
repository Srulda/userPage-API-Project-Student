// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance
const renderer = new Renderer()
const apiManager = new APIManager()


//on load
const loadData = function () {
    apiManager.loadData()
}
//on display
const renderData = function () {
    $(".quote-container").empty()
    renderer.render(apiManager.data)
    $(".quote-container").append(`<p>Favorite quote:</p>
    <span><i>"This is the object that call the function"</i> <br>
        - Aristo</span>`)
}