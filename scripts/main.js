function calcularValores() {
    const name = (document.formulario.nome.value);
    const horasTrabalhadas = parseFloat(document.formulario.horastrab.value);
    const valordahora = parseFloat(document.formulario.valordahr.value);
    const qtddepend = parseFloat(document.formulario.qtdedependentes.value);
    const salBruto = horasTrabalhadas * valordahora;

    if(salBruto < 1751.81){
        porcentINSS = 8;
        valorINSS = (salBruto * 0.08);
    } else if ((salBruto >= 1751.81) && (salBruto <= 2919.72)) {
        porcentINSS = (9);
        valorINSS = (salBruto * 0.09);
    } else if ((salBruto >= 2919.72) && (salBruto <= 5839.45)){
        porcentINSS = (11);
        valorINSS = (salBruto * 0.11);
    }

    if (qtddepend == 0){
        valordpn = 0;
    } else{
        valordpn = (qtddepend * 189.69);
    }

    const valorIRRF = salBruto - valorINSS - valordpn;

    if (valorIRRF<=1903.98){
        porcentIRRF = "0";
        IRRF = 0;
    } else if ((valorIRRF >= 1903.99) && (valorIRRF <= 2826.65)){
        porcentIRRF = "7,5";
        IRRF=(valorIRRF * 0.075)-142.8;
    } else if ((valorIRRF >= 2826.66) && (valorIRRF <= 3751.05)){
        porcentIRRF = "15";
        IRRF = (valorIRRF * 0.15) -354.8;
    } else if ((valorIRRF >= 3751.06) && (valorIRRF <= 4664.68)){
        porcentIRRF = "22,5";
        IRRF = (valorIRRF * 0.225)-36.13;
    } else if (valorIRRF > 4664.68){
        porcentIRRF = "27,5";
        IRRF = (valorIRRF * 0.275) -869.36;
    }

    const liqui = (salBruto-valorINSS) - IRRF;

    document.open();

    document.write("<h3> Nome: "+name+"</h1>");
    document.write("<h3> Horas trabalhadas: "+horasTrabalhadas+"</h3>");
    document.write("<h3> Valor da hora: "+valordahora+"</h3>");
    document.write("<h3> Quantidade de dependentes: "+qtddepend+"</h3>");
    document.write("<h3> Quantia descontada pelos dependentes: R$"+valordpn+"</h3>");
    document.write("<h3> Salário bruto: R$"+salBruto+"</h3>");
    document.write("<h3> INSS: "+porcentINSS+"%</h3>");
    document.write("<h3> Valor INSS: R$"+valorINSS+"</h3>");
    document.write("<h3> IRRF: "+porcentIRRF+"%</h3>");
    document.write("<h3> Valor IRRF: R$"+IRRF+"</h3>");
    document.write("<h3> Líquido: R$"+liqui+"</h3>");

    document.close();
}