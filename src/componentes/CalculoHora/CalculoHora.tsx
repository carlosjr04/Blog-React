export default function calcularTempo(propsHorario:string | undefined){
    const horarioPostString : string | undefined = propsHorario
    if (!horarioPostString) {
        console.error("Horário não fornecido.");
        return; 
    }

    const horarioPost: Date = new Date(horarioPostString);

    const agora: Date = new Date();

    const diferencaSegundos = Math.floor((agora.getTime() - horarioPost.getTime()) / 1000);
    const diferencaMinutos = Math.floor(diferencaSegundos / 60);
    const diferencaHoras = Math.floor(diferencaMinutos / 60);
    const diferencaDias = Math.floor(diferencaHoras / 24);
    const diferencaMeses = Math.floor(diferencaDias / 30);
    const diferencaanos = Math.floor(diferencaMeses / 12);

    let datapubli:string = ""
    if(diferencaanos>0){
        if(diferencaanos>1){
            datapubli = `${diferencaanos} anos`;
        }else{
            datapubli = `${diferencaanos} ano`;
        }
    }else if (diferencaMeses > 0) {
        if(diferencaMeses>1){
            datapubli = `${diferencaMeses} meses`;
        }else{
            datapubli = `${diferencaMeses} mes`;
        }
        
    } else if (diferencaDias > 0) {
        if(diferencaDias>1){
            datapubli = `${diferencaDias} dias`;
        }else{
            datapubli = `${diferencaDias} dia`;
        }
        
    } else if (diferencaHoras > 0) {
        if(diferencaHoras>1){
            datapubli = `${diferencaHoras} horas`;
        }else{
            datapubli = `${diferencaHoras} hora`;
        }
        
    } else if (diferencaMinutos > 0) {
        if(diferencaMinutos>1){
            datapubli = `${diferencaMinutos} minutos`;
        }else{
            datapubli = `${diferencaMinutos} minuto`;
        }
        
    }
     else {
        datapubli = "Agora mesmo";
    }
  return datapubli;
}