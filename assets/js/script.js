$(() => {
let timer = $('.timer');
let startBtn = $('#start-btn');

let count = 59; 

startBtn.on('click', () => {
    let timeInterval = setInterval(() => {
        if (count <= 0) {
            clearInterval(timeInterval);
            alert("Time up"); 
            location.reload();
        } else {
            count -= 1;
            timer.text(count);
        }

    }, 1000)

    // remove the intro
    $('#quiz-rule').empty();

    // display question one 
    $('#prompt-1').removeClass('hide-question');
});

// final score
let score = 25;
let submitBtn = $('#submit-btn');
let clearScore = $('#clear-score');
let goBackBtn = $('#back-btn');

const finalScore = () => {
    $('.quiz-score').empty(`Your final score is ${score}.`).append(`Your final score is ${score}.`)
}

submitBtn.on('click', () => {
    let initial = $('.text-input').val();
    $('.score-text').addClass('hide-question');
    $('#high-scores').removeClass('hide-question');
    $('.initials-score').empty(`1. " "${initial} - ${score}`).append(`1.${initial}- ${score}`); 
}); 

clearScore.on('click', () => {
    $('#hide-score').addClass('hide-question');
});

goBackBtn.on('click', () => {
    location.reload();
}); 

// wrong answers
    function wrongAnswers() {
        $('.wrong-answer').click(()=> {
        $('#horizontal-line').addClass('hr-line');
        $('.right-wrong').empty('Wrong!').append('Wrong!');
        count -= 10;
        score -= 1;

        setInterval(() => {
            $('#horizontal-line').removeClass('hr-line');
            $('.right-wrong').empty('Wrong!')

        }, 1000)

        })
    }
    wrongAnswers();

    function rightAnswer1() {
        $('.right-answer1').click(function() {
            $('#horizontal-line').addClass('hr-line');
            $('.right-wrong').empty('Correct!').append('Correct!');

            setInterval(() => {
                $('#horizontal-line').removeClass('hr-line');
                $('.right-wrong').empty('Correct!')
    
            }, 1000)

            // hide question one
            $('#prompt-1').addClass('hide-question');

            // display question two
            $('#prompt-2').removeClass('hide-question');
        })
    };

    function rightAnswer2() {
        $('.right-answer2').click(function() {
            $('#horizontal-line').addClass('hr-line');
            $('.right-wrong').empty('Correct!').append('Correct!');

            setInterval(() => {
                $('#horizontal-line').removeClass('hr-line');
                $('.right-wrong').empty('Correct!')
    
            }, 1000)

            // hide question two
            $('#prompt-2').addClass('hide-question');

            // display question three
            $('#prompt-3').removeClass('hide-question');
        })
    };

    function rightAnswer3() {
        $('.right-answer3').click(function() {
            $('#horizontal-line').addClass('hr-line');
            $('.right-wrong').empty('Correct!').append('Correct!');

            setInterval(() => {
                $('#horizontal-line').removeClass('hr-line');
                $('.right-wrong').empty('Correct!')
    
            }, 1000)

            // hide question three
            $('#prompt-3').addClass('hide-question');

            // display question four
            $('#prompt-4').removeClass('hide-question');
            
        })
    }; 

function rightAnswer4() {
    $('.right-answer4').click(function() {
        $('#horizontal-line').addClass('hr-line');
        $('.right-wrong').empty('Correct!').append('Correct!');

        setInterval(() => {
            $('#horizontal-line').removeClass('hr-line');
            $('.right-wrong').empty('Correct!')

        }, 1000)

        // hide question four 
        $('#prompt-4').addClass('hide-question');

        // display question five 
        $('#prompt-5').removeClass('hide-question');

    })
}; 

function rightAnswer5() {
    $('.right-answer5').click(function() {
        $('#horizontal-line').addClass('hr-line');
        $('.right-wrong').empty('Correct!').append('Correct!');

        setInterval(() => {
            $('#horizontal-line').removeClass('hr-line');
            $('.right-wrong').empty('Correct!')

        }, 1000)

        // hide question five
        $('#prompt-5').addClass('hide-question');

        // display quiz score
        $('.score-text').removeClass('hide-question');
        finalScore();
    })
}; 
rightAnswer1();
rightAnswer2();
rightAnswer3();
rightAnswer4();
rightAnswer5();

})
