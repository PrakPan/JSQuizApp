const questions=[
    {
        "ques":"What is hell ?",
        "a":"hell",
        "b":"Bell",
        "c":"Dell",
        "d":"Shell",
         "ans":"a"
    },
    {
        "ques":"What is Bell ?",
        "a":"hELl",
        "b":"Bell",
        "c":"Dell",
        "d":"Shell",
        "ans":"b"
    }

];
// console.log(questions[0].ques);
let index=0;
let right=0;
let wrong=0;
let total=questions.length;
const input=document.querySelectorAll('#rad');
// console.log(input[0].value);
const quiz=()=>{
    if(index === total)
    {
       return end();
        }
        reset();
        document.getElementById('question').innerText=`${index+1}) ${questions[index].ques}`;
        document.getElementById('a').innerText=questions[index].a;
        document.getElementById('b').innerText=questions[index].b;
        document.getElementById('c').innerText=questions[index].c;
        document.getElementById('d').innerText=questions[index].d;
       }

// quiz();
const Button=document.getElementById('btn');
Button.addEventListener('click',()=>{
    // console.log(getAns());
    const data=questions[index];
    const ans=getAns();
    if(ans === data.ans)
    right++;
    else{
        wrong++;
    }
    index++;
    quiz();
});


const getAns=()=>{
    let ans;
  input.forEach((element)=> {
     
    if(element.checked){
        // console.log(element.checked);
       ans=element.value;
    }
    // quiz();
   
  });
  return ans;
 
}
const reset=()=>{
    input.forEach((element)=> {
         element.checked=false;
    });
}
const end=()=>{
    document.getElementsByClassName("container")[0].innerHTML=`<p style="color:red;font-size:20px">ThankYou Your Resul Will be Declared soon !!!</p>
    <h2> ${right}/${total} are correct </h2>`;
}
quiz(index);