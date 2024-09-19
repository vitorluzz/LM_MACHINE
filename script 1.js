
function converter_decimal(){

var decimal = Number(ipt_decimal.value)
var octal = decimal.toString(8)
var hexadecimal = decimal.toString(16)
var binario = decimal.toString(2)

span_octal1.innerHTML = `<b>Octal:</b> ${octal}`
span_hexadecimal1.innerHTML = `<b>Hexadecimal:</b> ${hexadecimal.toUpperCase()}`
span_binario1.innerHTML = `<b>Binário:</b> ${binario}`

if(ipt_decimal.value == ''){
    span_mensagem_erro4.innerHTML = `ERRO! INSIRA UM VALOR VÁLIDO!`
    span_octal1.innerHTML = ''
span_hexadecimal1.innerHTML = ''
span_binario1.innerHTML = ''
        }else{
            span_mensagem_erro4.innerHTML = null
        }
    

}


function converter_octal() {
    var inputValue = ipt_octal.value;
    
    // Verifica se o input contém números não-octais (8 ou 9)
    if (/[^0-7]/.test(inputValue)) {
        span_mensagem_erro3.innerHTML = `ERRO! VALOR NÃO OCTAL. INSIRA APENAS DÍGITOS 0 A 7.`
        span_decimal2.innerHTML = '';
        span_hexadecimal2.innerHTML = '';
        span_binario2.innerHTML = '';
        return;
    }

    if (inputValue === '') {
        span_mensagem_erro3.innerHTML = `ERRO! INSIRA UM VALOR VÁLIDO.`;
        return;
    }

    var octal = parseInt(inputValue, 8);

    var decimal = octal.toString(10);
    var hexadecimal = octal.toString(16);
    var binario = octal.toString(2);

    span_decimal2.innerHTML = `<b>Decimal:</b> ${decimal}`;
    span_hexadecimal2.innerHTML = `<b>Hexadecimal:</b> ${hexadecimal.toUpperCase()}`;
    span_binario2.innerHTML = `<b>Binário:</b> ${binario}`;
    
    span_mensagem_erro3.innerHTML = null;
}

function converter_hexadecimal(){

        var hexadecimal = parseInt(ipt_hexadecimal.value, 16)
    
        var decimal = hexadecimal.toString(10)
        var octal = hexadecimal.toString(8)
        var binario = hexadecimal.toString(2)
        
        span_decimal3.innerHTML = `<b>Decimal:</b> ${decimal}`
        span_octal3.innerHTML = `<b>Octal:</b> ${octal}`
        span_binario3.innerHTML = `<b>Binário:</b>${binario}`

        if(ipt_hexadecimal.value == ''){
            span_mensagem_erro2.innerHTML = `ERRO! INSIRA UM VALOR VÁLIDO!`
            span_decimal3.innerHTML = ''
            span_octal3.innerHTML = ''
            span_binario3.innerHTML = ''
                }else{
                    span_mensagem_erro2.innerHTML = null
                }
        
 }

 function converter_binario() {
    var inputValue = ipt_binario.value;

    // Verifica se o input contém valores não-binários (0 ou 1)
    if (/[^01]/.test(inputValue)) {
        span_mensagem_erro1.innerHTML = `ERRO! VALOR NÃO BINÁRIO. INSIRA APENAS DÍGITOS 0 OU 1.`;
        span_decimal4.innerHTML = '';
        span_octal4.innerHTML = '';
        span_hexadecimal4.innerHTML = '';
        return;
    }

    if (inputValue === '') {
        span_mensagem_erro1.innerHTML = `ERRO! INSIRA UM VALOR VÁLIDO!`;
        return;
    }

    var binario = parseInt(inputValue, 2);

    var decimal = binario.toString(10);
    var octal = binario.toString(8);
    var hexadecimal = binario.toString(16);

    span_decimal4.innerHTML = `<b>Decimal:</b> ${decimal}`;
    span_octal4.innerHTML = `<b>Octal:</b> ${octal}`;
    span_hexadecimal4.innerHTML = `<b>Hexadecimal:</b> ${hexadecimal.toUpperCase()}`;

    span_mensagem_erro1.innerHTML = null;
}
