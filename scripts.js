function quantasQuestoes() {



    var notas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var total = 0;
    var e = document.getElementById("questao1");
    notas[1] = e.options[e.selectedIndex].value;
    if (notas[1] == 1)
        total++;

    var e = document.getElementById("questao2");
    notas[2] = e.options[e.selectedIndex].value;
    if (notas[2] == 2)
        total++;

    var e = document.getElementById("questao3");
    notas[3] = e.options[e.selectedIndex].value;
    if (notas[3] == 3)
        total++;

    var e = document.getElementById("questao4");
    notas[4] = e.options[e.selectedIndex].value;
    if (notas[4] == 1)
        total++;

    var e = document.getElementById("questao5");
    notas[5] = e.options[e.selectedIndex].value;
    if (notas[5] == 1)
        total++;

    var e = document.getElementById("questao6");
    notas[6] = e.options[e.selectedIndex].value;
    if (notas[6] == 3)
        total++;

    var e = document.getElementById("questao7");
    notas[7] = e.options[e.selectedIndex].value;
    if (notas[7] == 2)
        total++;

    var e = document.getElementById("questao8");
    notas[8] = e.options[e.selectedIndex].value;
    if (notas[8] == 2)
        total++;

    var e = document.getElementById("questao9");
    notas[9] = e.options[e.selectedIndex].value;
    if (notas[9] == 1)
        total++;

    var e = document.getElementById("questao10");
    notas[10] = e.options[e.selectedIndex].value;
    if (notas[10] == 2)
        total++;

    if (total >= 7 && total < 11)
        document.getElementById("resultado").innerHTML = "Parabens, voce acertou " + total + " questoes, e realmente conhece muito sobre o assunto."

    else if (total >= 4 && total < 7)
        document.getElementById("resultado").innerHTML = "Muito bem, voce acertou " + total + " questoes, e demonstrou conhecer um pouco sobre esse assunto."

    else if (total >= 0 && total < 4)
        document.getElementById("resultado").innerHTML = "Voce acertou " + total + " questoes, navegue neste site e adquira conhecimentos sobre esse assunto e depois tente novamente para verificar o que aprendeu."
        



}
