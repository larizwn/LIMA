function verifica_resposta() {
    let respostas = new Array(12);
    respostas[0]= document.getElementById("alternativa1").checked
    respostas[1]= document.getElementById("alternativa6").checked
    respostas[2]= document.getElementById("alternativa8").checked
    respostas[3]= document.getElementById("alternativa12").checked
    respostas[4]= document.getElementById("alternativa15").checked
    respostas[5]= document.getElementById("alternativa16").checked
    respostas[6]= document.getElementById("alternativa19").checked
    respostas[7]= document.getElementById("alternativa23").checked
    respostas[8]= document.getElementById("alternativa25").checked
    respostas[9]= document.getElementById("alternativa28").checked
    respostas[10]= document.getElementById("alternativa32").checked
    respostas[11]=document.getElementById("alternativa35").checked
    

let score = new Array(12);
let pontuacao;


    if(respostas[0] == true ){
        score[0] = 1000;
         document.getElementById("card-1").textContent = "Alternativa correta! ✔️"
       
      }
      else{
        score[0] = 0;
        document.getElementById("card-1").textContent = "Alternativa incorreta! ✖️"
      }
      
    if(respostas[1] == true ){
        score[1] = 1000;
         document.getElementById("card-2").textContent = "Alternativa correta! ✔️"
       
      }
      else{
        score[1] = 0;
        document.getElementById("card-2").textContent = "Alternativa incorreta! ✖️"
      }

      if(respostas[2] == true ){
        score[2] = 1000;
         document.getElementById("card-3").textContent = "Alternativa correta! ✔️"
       
      }
      else{
        score[2] = 0;
        document.getElementById("card-3").textContent = "Alternativa incorreta! ✖️"
      }

      if(respostas[3] == true ){
        score[3] = 1000;
         document.getElementById("card-4").textContent = "Alternativa correta! ✔️"
       
      }
      else{
        score[3] = 0;
        document.getElementById("card-4").textContent = "Alternativa incorreta! ✖️"
      }

      if(respostas[4] == true ){
        score[4] = 1000;
         document.getElementById("card-5").textContent = "Alternativa correta! ✔️"
       
      }
      else{
        score[4] = 0;
        document.getElementById("card-5").textContent = "Alternativa incorreta! ✖️"
      }

      if(respostas[5] == true ){
        score[5] = 1000;
         document.getElementById("card-6").textContent = "Alternativa correta! ✔️"
       
      }
      else{
        score[5] = 0;
        document.getElementById("card-6").textContent = "Alternativa incorreta! ✖️"
      }

      if(respostas[6] == true ){
        score[6] = 1000;
         document.getElementById("card-7").textContent = "Alternativa incorreta! ✔️"
       
      }
      else{
        score[6] = 0;
        document.getElementById("card-7").textContent = "Alternativa incorreta! ✖️"
      }

      if(respostas[7] == true ){
        score[7] = 1000;
         document.getElementById("card-8").textContent = "Alternativa correta! ✔️"
       
      }
      else{
        score[7] = 0;
        document.getElementById("card-8").textContent = "Alternativa incorreta! ✖️"
      }

      if(respostas[8] == true ){
        score[8] = 1000;
         document.getElementById("card-9").textContent = "Alternativa correta! ✔️"
       
      }
      else{
        score[8] = 0;
        document.getElementById("card-9").textContent = "Alternativa incorreta! ✖️"
      }

      if(respostas[9] == true ){
        score[9] = 1000;
         document.getElementById("card-10").textContent = "Alternativa correta! ✔️"
       
      }
      else{
        score[9] = 0;
        document.getElementById("card-10").textContent = "Alternativa incorreta! ✖️"
      }

      if(respostas[9] == true ){
        score[10] = 1000;
         document.getElementById("card-11").textContent = "Alternativa correta! ✔️"
       
      }
      else{
        score[10] = 0;
        document.getElementById("card-11").textContent = "Alternativa incorreta! ✖️"
      }

      if(respostas[9] == true ){
        score[11] = 1000;
         document.getElementById("card-12").textContent = "Alternativa correta! ✔️"
       
      }
      else{
        score[11] = 0;
        document.getElementById("card-12").textContent = "Alternativa incorreta! ✖️"
      }

      pontuacao = score[0] + score[1] + score[2] + score[3] + score[4] + score[5]+ score[6]+ score[7]+ score[8]+ score[9]+ score[10]+ score[11] ;
      localStorage.setItem("pontuacao", pontuacao)
      let a = localStorage.getItem("pontuacao");

      if(localStorage.getItem("pontuacao") > a) {

        document.getElementById("saida_score").textContent = localStorage.getItem("pontuacao") + " de 10000"
        document.textContent("saida_recorde").textContent = localStorage.getItem("pontuacao")
      }
      else{
      
        document.getElementById("saida_score").textContent = localStorage.getItem("pontuacao") + " de 10000"
        document.getElementById("saida_recorde").textContent = a;
      }
      
}




