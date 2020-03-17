const alunosDaEscola=[
{nome:"Hendy",notas:[6,4,3,5,5],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date()}],faltas:5},
{nome:"Felipe",notas:[7,9,8,9,7],cursos:[{nomeDoCurso:"Marketing Digital",dataMatricula:new Date()}],faltas:2},
{nome:"Bruno",notas:[10,9,8,9,6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date()}],faltas:0},
{nome:"Guilherme",notas:[10,9,8,9,6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date()}],faltas:1},
{nome:"Carol",notas:[8,9,7,9,7],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date()}],faltas:4},
{nome:"Luana",notas:[10,9,8,9,6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date()}],faltas:2}];


const adicionarAluno = novoAluno => {
    if (typeof novoAluno == "string") {
    console.log("Aluno(a) Matriculado com Sucesso");
    } else { 
    console.log("Insira um valor válido");
   }
  }; 

const matricularAluno = ({aluno:novoAluno},curso) => { 
    if (typeof curso == "string") {    
    console.log(`Aluno(a) ${novoAluno} matriculado(a) no curso ${curso}`);
    alunosDaEscola.push({nome: novoAluno, nomeDoCurso: curso, dataMatricula: new Date()});                 
  } else { 
    console.log("Insira um valor válido");
   }
  }

 const aplicarFalta = (novoAluno,numeroDeFaltas) => {
       for(var aluno of alunosDaEscola)
    if(aluno.nome == novoAluno){
        aluno.faltas = numeroDeFaltas;
        console.log(`Falta adicionada ao aluno(a) ${novoAluno}`)
    }if(aluno.nome != novoAluno){
        console.log("Aluno(a) não encontrado(a), matricule-se antes")
      }
      }
  

const  aplicarNota = (novoAluno,{nota}) => {
     for(var aluno of alunosDaEscola) 
  if(aluno.nome == novoAluno){
      aluno.notas = nota;
      console.log(`Nota adicionada ao aluno(a) ${novoAluno}`);
  }if(aluno.nome != novoAluno){
      console.log("Aluno(a) não encontrado(a), matricule-se antes")
  }
  }


const aprovarAluno = (novoAluno) => {
  
  for(var aluno of alunosDaEscola)
  if(aluno.nome == novoAluno){
    var media = (aluno.notas.reduce((prevVal, elem) => { return prevVal + elem }) / aluno.notas.length)
   console.log(media);
    if(aluno.faltas > 3 ||  media < 7){
     console.log(`Aluno(a)  ${novoAluno} Reprovado! :(`);
}else{
     console.log(`Aluno(a)  ${novoAluno} Aprovado! :)`);
  } 
 } 
}



  const listarAlunos = () => {

   for (let aluno of alunosDaEscola) {
     console.log(`
    ------------------------
    Nome: ${aluno.nome}
    Curso: ${aluno.nomeDoCurso}
    Matrícula:${aluno.dataMatricula}
    Notas:${aluno.notas}
    Faltas:${aluno.faltas}
    -------------------------`);
   }
   console.log("------------------------");
};



const buscarAluno = nomeAluno => {
     
      let alunoEncontrado = alunosDaEscola.filter(aluno => aluno.nome == nomeAluno);
      console.log(`Encontramos ${alunoEncontrado.length} aluno(a) com o nome ${nomeAluno}`);

};


//adicionarAluno('Gabriel');
//adicionarAluno('Camila');
//matricularAluno("Camila", "Full Stack");
//matricularAluno({aluno:'Gabriel'}, "Ux");
//aplicarFalta('Gabriel',2);
//aplicarNota('Gabriel',{nota:[10,10,9,8,10]})
//aprovarAluno('Felipe');
//aprovarAluno('Carol');
aprovarAluno('Luana');
aprovarAluno('Hendy');
//aprovarAluno('Bruno');

//listarAlunos();
//buscarAluno('Henrique');
