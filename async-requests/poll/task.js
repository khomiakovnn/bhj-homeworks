const pollAnswer = document.getElementById('poll__answers')
const xhr = new XMLHttpRequest()

xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE) {
        document.getElementById('poll__title').textContent = xhr.response.data['title']
        xhr.response.data['answers'].forEach(element => {
            let buttonChois = document.createElement('button')
            buttonChois.className = 'poll__answer'
            buttonChois.textContent = element
            pollAnswer.appendChild(buttonChois)
        });

        const answerButtons = Array.from(document.querySelectorAll('.poll__answer'))
        answerButtons.forEach(element => {
            element.onclick = () => {
            alert('Спасибо, ваш голос засчитан!')
            
            let voteId = xhr.response.id
            let answerId = xhr.response.data.answers.indexOf(element.textContent)
            let xhrBody = `vote=${voteId}&answer=${answerId}`
            const xhrResult = new XMLHttpRequest
            xhrResult.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll')
            xhrResult.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
            xhrResult.responseType = 'json'
            xhrResult.send(xhrBody)
            xhrResult.onreadystatechange = () => {
                if (xhrResult.readyState === xhrResult.DONE) {
                    pollAnswer.textContent = ''
                    
                    let statSumm = 0
                    xhrResult.response.stat.forEach(elem => {statSumm += Number(elem.votes)});    
                    
                    xhrResult.response.stat.forEach(elem => {
                        let pElem = document.createElement('p')
                        let pText = `${elem.answer}: ${(100*elem.votes/statSumm).toFixed(2)}%`
                        pElem.textContent = pText
                        pollAnswer.appendChild(pElem)
                    });
                }  
            }
            }
        });
    }
}

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.responseType = 'json'
xhr.send()