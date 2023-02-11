let kinoBilletter = [];

function billettKjop() {
    let enBillett = {
        film: document.getElementById('velgFilm').value,
        antall: document.getElementById('antall').value,
        fornavn: document.getElementById('fornavn').value,
        etternavn: document.getElementById('etternavn').value,
        telefonnr: document.getElementById('telefonnr').value,
        epost: document.getElementById('epost').value
    };

    let errorCount= false;

    // Antall-felt
    if ((isNaN(enBillett.antall) || enBillett.antall <= 0)) {
        document.getElementById("antallError").innerHTML = "Må skrive noe inn i antall";
        errorCount = true;
    } else {
        document.getElementById("antall").innerHTML = "";
    }
    // Fornavn-felt
    if (!isNaN(enBillett.fornavn)) {
        document.getElementById("fornavnError").innerHTML = "Må skrive noe inn i fornavnet";
        errorCount = true;
    } else {
        document.getElementById("fornavn").innerHTML = "";
    }

    //Etternavn-felt
    if (!isNaN(enBillett.etternavn)) {
        document.getElementById("etternavnError").innerHTML = "Må skrive noe inn i etternavnet";
        errorCount = true;
    } else {
        document.getElementById("etternavn").innerHTML = "";
    }

    // Telefonnr-felt
    if (isNaN(enBillett.telefonnr) || enBillett.telefonnr === "") {
        document.getElementById("telefonnrError").innerHTML = "Må skrive noe inn i telefonnr";
        errorCount= true;
    } else {
        document.getElementById("telefonnr").innerHTML = "";
    }

    // E-post-felt
    if (!isNaN(enBillett.epost)) {
        document.getElementById("epostError").innerHTML = "Må skrive noe inn i e-post";
        errorCount= true;
    } else {
        document.getElementById("epost").innerHTML = "";
    }

    // Blanker ut feltene
    if (errorCount === false) {
        document.getElementById("reset").reset();
    } else {
        return;
    }

    //Billett
    if (kinoBilletter.film === "" && kinoBilletter.antall === "" && kinoBilletter.fornavn === "" && kinoBilletter.etternavn === "" &&
        kinoBilletter.telefonnr === "" && kinoBilletter.epost === "") {
        return;
    } else {
        kinoBilletter.push(enBillett)
    }

    //Skriver ut billetten
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th>" +
        "<th>Telefonnr</th><th>Epost</th>" + "</tr>";

    for (let b of kinoBilletter) {
        ut+="<tr>";
        ut+="<td>"+b.film+"</td><td>"+b.antall+"</td><td>"+b.fornavn+"</td>" + "<td>"+b.etternavn+"</td><td>"+b.telefonnr+"</td><td>"+b.epost+ "</td>";
        ut+="</tr>";
    }
    document.getElementById("kinoBilletter").innerHTML = ut;
}

//Sletter billett
function slett() {
    document.getElementById("kinoBilletter").innerHTML = "";
}