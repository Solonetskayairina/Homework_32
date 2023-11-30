    const voting = {
        smiles: document.querySelectorAll('.smile_btn'),
        results: document.querySelectorAll('.js-result-smile'),
        votes: [0, 0, 0, 0, 0],
    };

    voting.smiles.forEach((button, index) => {
        button.addEventListener('click', handleVoteClick);
    })

    function handleVoteClick(event) {
        const optionIndex = parseInt(event.target.dataset.index)
        vote(optionIndex)
    }

    function vote(optionIndex) {
        if (optionIndex >= 0 && optionIndex < voting.smiles.length) {
            voting.votes[optionIndex]++;
            displayResults();
        }
    }

    function displayResults() {
        voting.results.forEach((result, index) => {
            result.textContent = voting.votes[index];
        });
    }