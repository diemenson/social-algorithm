function enviar(){

    var contador = 0

    var primeiro = document.getElementsByName('primeiro')
    var segundo = document.getElementsByName('segundo')
    var terceiro = document.getElementsByName('terceiro')
    var quarto = document.getElementsByName('quarto')
    var quinto = document.getElementsByName('quinto')
    var sexto = document.getElementsByName('sexto')
    var setimo = document.getElementsByName('setimo')
    var oitavo = document.getElementsByName('oitavo')
    var nono = document.getElementsByName('nono')
    var decimo = document.getElementsByName('decimo')

    if(primeiro[2].checked){
        contador++
    }

    if(segundo[1].checked){
        contador++
    }

    if(terceiro[0].checked){
        contador++
    }

    if(quarto[1].checked){
        contador++
    }

    if(quinto[2].checked){
        contador++
    }

    if(sexto[1].checked){
        contador++
    }

    if(setimo[0].checked){
        contador++
    }

    if(oitavo[2].checked){
        contador++
    }

    if(nono[1].checked){
        contador++
    }

    if(decimo[1].checked){
        contador++
    }

    if(window.alert("Sua Nota Foi: "+contador)){

    }else    window.location.reload();

    
}