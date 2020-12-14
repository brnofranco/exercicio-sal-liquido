function calcularValores() {
    name=(document.formulario.nome.value);
    horastrabalhadas=parseFloat(document.formulario.horastrab.value);
    valordahora=parseFloat(document.formulario.valordahr.value);
    qtddepend=parseFloat(document.formulario.qtdedependentes.value);
    salbruto=horastrabalhadas*valordahora;

    if(salbruto<1751.81){
        porcentINSS=8;
        valorINSS=(salbruto*0.08);
    } else if ((salbruto>=1751.81) && (salbruto<=2919.72)) {
        porcentINSS=(9);
        valorINSS=(salbruto*0.09);
    } else if ((salbruto>=2919.72) && (salbruto<=5839.45)){
        porcentINSS=(11);
        valorINSS=(salbruto*0.11);
    }

    if (qtddepend==0){
        valordpn=0;
    } else{
        valordpn=(qtddepend*189.69);
    }

    valorIRRF=salbruto-valorINSS-valordpn;

    if (valorIRRF<=1903.98){
        porcentIRRF="0";
        IRRF=0;
    } else if ((valorIRRF>=1903.99) && (valorIRRF<=2826.65)){
        porcentIRRF="7,5";
        IRRF=(valorIRRF*0.075)-142.8;
    } else if ((valorIRRF>=2826.66) && (valorIRRF<=3751.05)){
        porcentIRRF="15";
        IRRF=(valorIRRF*0.15)-354.8;
    } else if ((valorIRRF>=3751.06) && (valorIRRF<=4664.68)){
        porcentIRRF="22,5";
        IRRF=(valorIRRF*0.225)-36.13;
    } else if (valorIRRF>4664.68){
        porcentIRRF="27,5";
        IRRF=(valorIRRF*0.275)-869.36;
    }

    liqui=(salbruto-valorINSS)-IRRF;

    document.open();

    document.write("<h3> Nome: "+name+"</h1>");
    document.write("<h3> Horas trabalhadas: "+horastrabalhadas+"</h3>");
    document.write("<h3> Valor da hora: "+valordahora+"</h3>");
    document.write("<h3> Quantidade de dependentes: "+qtddepend+"</h3>");
    document.write("<h3> Quantia descontada pelos dependentes: R$"+valordpn+"</h3>");
    document.write("<h3> Salário bruto: R$"+salbruto+"</h3>");
    document.write("<h3> INSS: "+porcentINSS+"%</h3>");
    document.write("<h3> Valor INSS: R$"+valorINSS+"</h3>");
    document.write("<h3> IRRF: "+porcentIRRF+"%</h3>");
    document.write("<h3> Valor IRRF: R$"+IRRF+"</h3>");
    document.write("<h3> Líquido: R$"+liqui+"</h3>");

    document.close();
}