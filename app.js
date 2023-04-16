const desJokeBtn = document.getElementById('desJokeBtn');
const devJokeBtn = document.getElementById('devJokeBtn');
const JokeText = document.getElementById('JokeText');
const desJokes = ['Why did the UX designer break up with the UI designer? Because they had a poor user interface\.', 'Why did the UX designer refuse to eat the hamburger? Because it had too many layers\.', 'How many UX designers does it take to change a lightbulb? None\, they just redesign the interface\.', 'How many designers does it take to change a light bulb? None\, they just hire a developer to do it\.', 'Why did the designer cross the road? To get to the other side of the color wheel\.', 'Why did the designer break up with the developer? Because they kept trying to fit square buttons into round holes\.'];
const devJokes = ['Why do developers prefer dark mode? Because light attracts bugs\.', 'Why was the developer afraid of the ocean? Because they heard there were too many sea sharp\.', 'Why do developers prefer Linux over Windows? Because they can\'t stand to be windowed in\.', 'Why did the developer refuse to go on a date with the designer? Because they heard they always like to \"keep things fluid\"\.', 'How many developers does it take to change a light bulb? None\, they just blame it on the hardware\.', 'Why do developers always win in an argument with designers? Because they always have the upper hand with their keyboard shortcuts\.'];
let currentJokeIndex = 0;
function displayNextJoke(event) {
    if (event.target === desJokeBtn) {
        JokeText.innerHTML = desJokes[currentJokeIndex];
        currentJokeIndex++;
        if (currentJokeIndex >= desJokes.length) {
            currentJokeIndex = 0;
    }
} else if (event.target === devJokeBtn) {
    JokeText.innerHTML = devJokes[currentJokeIndex];
    currentJokeIndex++;
    if (currentJokeIndex >= devJokes.length) {
      currentJokeIndex = 0;
    }
    }
}

desJokeBtn.addEventListener('click', function(event) {
    displayNextJoke(event);
});
devJokeBtn.addEventListener('click', function(event) {
    displayNextJoke(event);
});