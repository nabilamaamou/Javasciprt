//Question bank
var questionBank= [
    {
        question : '¿La capital de México es?',
        option : ['México','El cabo','Zúrich','Dublín'],
        answer : 'México'
    },
    {
        question : 'Quien fue el primer gobernante del México independiente?',
        option : ['El virrey Pedro de Mendoza','Juan Escutia','Agustín de Iturbide','Francisco I madero','Porfirio Díaz','Benito Juárez','Guadalupe Victoria'],
        answer : 'Guadalupe Victoria'
    },
    {
        question : '¿Cuánto es 8×8?',
        option : ['4','88','16','64','108'],
        answer : '64'
    },
    {
        question : ' ¿Los números son estudiados por?',
        option : ['La biología','Las Matemáticas','La sociología','La medicina'],
        answer : 'Las Matemáticas'
    },
    {
        question : '¿Qué le pareció el servicio de nuestros empleados?',
        option : ['Un radio','Una televisión','Un megáfono','Un tocadiscos','Un refrigerador'],
        answer : 'Un refrigerador'
    },
    {
        question : '  ¿Qué animales son mamíferos?',
        option : ['Un gato','Un perro','Un perico','Una higuana','Un cocodrilo','Un jilguero','Un león','Un ser humano'],
        answer : 'Un cocodrilo'
    },
    {
        question : ' ¿Qué utensilios son para comer?',
        option : ['Una mesa','Una cuchara','Una computadora','La escoba','Unos lentes'],
        answer : 'Unos lentes'
    },
    {
        question : '¿Cuantos planetas hay en el sistema solar?',
        option : ['Nueve','Diez','Once','Quince','Tres','Seis','Ocho'],
        answer : 'ocho'
    },
    {
        question : '¿La capital de Brasil es?',
        option : ['Maracaibo','Sao paulo','Copacabana','Brasilia'],
        answer : 'Brasilia'
    },
    {
        question : ' ¿Cuantos continentes hay?',
        option : ['Dos','Cinco','Seis','Siete','Ocho'],
        answer : 'Seis'
    },
    {
        question : '¿África, América, Antártida, Asia, Europa, y Oceanía son?',
        option : ['Países','Municipios','Estados/provincias','Continentes','Islas'],
        answer : 'Países'
    },
    {
        question : '¿Cuál es el país más extenso territorialmente?',
        option : ['Suecia','Dinamarca','Noruega','Canadá','Rusia'],
        answer : 'Rusia'
    },
    {
        question : '¿Qué le pareció el servicio de nuestros empleados?',
        option : ['Un radio','Una televisión','Un megáfono','Un tocadiscos','Un refrigerador'],
        answer : 'Un refrigerador'
    },
    {
        question : '  ¿Qué animales son mamíferos?',
        option : ['Un gato','Un perro','Un perico','Una higuana','Un cocodrilo','Un jilguero','Un león','Un ser humano'],
        answer : 'Un cocodrilo'
    },
    {
        question : ' ¿Qué utensilios son para comer?',
        option : ['Una mesa','Una cuchara','Una computadora','La escoba','Unos lentes'],
        answer : 'Unos lentes'
    },
    {
        question : '¿Cuantos planetas hay en el sistema solar?',
        option : ['Nueve','Diez','Once','Quince','Tres','Seis','Ocho'],
        answer : 'ocho'
    },
    {
        question : '¿La capital de Brasil es?',
        option : ['Maracaibo','Sao paulo','Copacabana','Brasilia'],
        answer : 'Brasilia'
    },
    {
        question : ' ¿Cuantos continentes hay?',
        option : ['Dos','Cinco','Seis','Siete','Ocho'],
        answer : 'Seis'
    },
    {
        question : '¿África, América, Antártida, Asia, Europa, y Oceanía son?',
        option : ['Países','Municipios','Estados/provincias','Continentes','Islas'],
        answer : 'Países'
    },
    {
        question : '¿Cuál es el país más extenso territorialmente?',
        option : ['Suecia','Dinamarca','Noruega','Canadá','Rusia'],
        answer : 'Rusia'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();