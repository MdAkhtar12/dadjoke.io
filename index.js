const btnEl = document.getElementById("btn");

const jokeEl = document.getElementById("joke");

const ApiKey = "oS61P2x0OlFEYZOgRa/EWQ==aQwFY2Xz7TdqBC8R"

const options = {
    method : "GET",
    headers :{
        "X-Api-Key" : ApiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjoke(){
    try {
        jokeEl.innerText = "Updating..."
    btnEl.innerText = true;
    btnEl.innerText = "loading..."

    const response = await fetch(apiURL, options )
    const data = await response.json()

    btnEl.innerText = false;
    btnEl.innerText = "tell me a joke"

    jokeEl.innerText = data[0].joke
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later"
        console.log(error)
    }
}

btnEl.addEventListener("click", getjoke)