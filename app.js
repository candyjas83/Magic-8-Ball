const pressBtn = document.querySelector('button');



const magicBall = () => {
    const responseArr = ['Yes, of course!', 'Without a doubt, yes.', 'You can count on it.', 
'For sure!', 'Ask me later.', 'I\'m not sure.', 'I can\'t tell you right now', 'I\'ll tell you afer my nap.',
'No way!', 'I don\'t think so.', 'Without a doubt, no.', 'The answer is clearly NO.'];

    const randomNumber = Math.floor(Math.random() * responseArr.length);
    const response = responseArr.at(randomNumber);
    pressBtn.innerHTML = '';
    pressBtn.append(response);
    setTimeout(() => {
        pressBtn.innerHTML = 'Press Me';
    }, '3000')
}

pressBtn.addEventListener('click', magicBall);