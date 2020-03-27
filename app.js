// define your inputs 
const adjOne = document.getElementById('adj-1-input');
const adjTextOne = document.getElementById('adj-1');

const nounOne = document.getElementById('noun-1-input');
const nounTextOne = document.getElementById('noun-1');

const nounTwo = document.getElementById('noun-2-input');
const nounTextTwo = document.getElementById('noun-2');

const adjTwo = document.getElementById('adj-2-input');
const adjTextTwo = document.getElementById('adj-2');

const adjThr = document.getElementById('adj-3-input');
const adjTextThr = document.getElementById('adj-3');

const plNounOne = document.getElementById('pl-noun-1-input');
const plNounTextOne = document.getElementById('pl-noun-1');
const plNounTextTwo = document.getElementById('pl-noun-2');
const plNounTextThr = document.getElementById('pl-noun-3');


const verbOne = document.getElementById('verb-1-input');
const verbTextOne = document.getElementById('verb-1');

const nounThr = document.getElementById('noun-3-input');
const nounTextThr = document.getElementById('noun-3');

const nounFour = document.getElementById('noun-4-input');
const nounTextFour = document.getElementById('noun-4');

const adjFour = document.getElementById('adj-4-input');
const adjTextFour = document.getElementById('adj4');

const nounFive = document.getElementById('noun-5-input');
const nounTextFive = document.getElementById('noun5');

const nounSix = document.getElementById('noun-6-input');
const nounTextSix = document.getElementById('noun6');
// create function to fill in blanks 

function putAnswersIn() {
    const adjOneFinal = adjOne.value;
    adjTextOne.textContent = adjOneFinal;
    
    const nounOneFinal = nounOne.value;
    nounTextOne.textContent = nounOneFinal;

    const nounTwoFinal = nounTwo.value;
    nounTextTwo.textContent = nounTwoFinal;

    const adjTwoFinal = adjTwo.value;
    adjTextTwo.textContent = adjTwoFinal;

    const adjThrFinal = adjThr.value;
    adjTextThr.textContent = adjThrFinal;

    const plNounFinal = plNounOne.value;
    plNounTextOne.textContent = plNounFinal;
    plNounTextTwo.textContent = plNounFinal;
    plNounTextThr.textContent = plNounFinal;

    const verbOneFinal = verbOne.value;
    verbTextOne.textContent = verbOneFinal;

    const nounThrFinal = nounThr.value;
    nounTextThr.textContent = nounThrFinal;

    const nounFourFinal = nounFour.value;
    nounTextFour.textContent = nounFourFinal;

    const adjFourFinal = adjFour.value;
    adjTextFour.textContent = adjFourFinal;

    const nounFiveFinal = nounFive.value;
    nounTextFive.textContent = nounFiveFinal;

    const nounSixFinal = nounSix.value;
    nounTextSix.textContent = nounSixFinal;

    document.getElementById('new-mad-lib').style.visibility = 'visible';
}


// eventlistener 
const myButton = document.getElementById('button');
myButton.addEventListener('click', putAnswersIn);