document.getElementById('story-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const story = document.getElementById('story').value;
    const words = document.getElementById('words').value;
    const symbol = document.getElementById('symbol').value || '*';

    const output = story.replace(new RegExp(words, 'g'), symbol);
    document.getElementById('output').textContent = output;
});

document.getElementById('copy-button').addEventListener('click', function() {
    const output = document.getElementById('output').textContent;
    navigator.clipboard.writeText(output);
});