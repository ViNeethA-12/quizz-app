const question=[
    {
        'queue':'Which of the following are markup Language?',
        'a':'HTML',
        'b':'CSS',
        'c':'Javascript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'queue':'What year was javascript Launched?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'1993',
        'correct':'b'
    },
    {
        'queue':'Fullform of CSS?',
        'a':'cascading style sheet',
        'b':'creative style segment',
        'c':'colorful style sheet',
        'd':'computer style sheet',
        'correct':'a'
    }
]
let index=0;
let right=0,wrong=0;
let total=question.length;
const quebox=document.getElementById("quebox");
const optionInput=document.querySelectorAll('.options');
const loadQuestions=()=>{
    if(index===total){
        return endQuizz();
    }
    const data=question[index];
    console.log(data);
    reset();
    quebox.innerText=`${index+1}) ${data.queue}`;
    optionInput[0].nextElementSibling.innerText=data.a;
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;
}

const submitQuizz=()=>{
    const data=question[index];
    const ans=getAnswer();
    if(ans===data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestions();
    return;
}
let answer;
const ans=getAnswer=()=>{
    optionInput.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
            }
        }
    )
     return answer;   
}
const reset=()=>{
    optionInput.forEach(
        (input)=>{
            if(input.checked){
                input.checked=false;
            }
        }
    )
}
const endQuizz=()=>{
    document.getElementById("box").innerHTML=`
    <h3>Thank you for playing the quizz</h3>
    <h2>${right}/${total} are correct</h2> `
}
loadQuestions();