let kinoBilletter = [];

function billettKjop() {
    let enBillett = {
        antall: document.getElementById('antall').value,
        film: document.getElementById('velgFilm').value,
        fornavn: document.getElementById('fornavn').value,
        etternavn: document.getElementById('etternavn').value,
        telefonnr: document.getElementById('telefonnr').value,
        epost: document.getElementById('epost').value
    };

    let errorCount= false;

    // Antall
    if ((isNaN(enBillett.antall) || enBillett.antall <= 0) || enBillett.antall === null) {
        document.getElementById("antallError").innerHTML = "Må skrive noe inn i antall";
        errorCount = true;
    } else {
        document.getElementById("antallError").innerHTML = "";
    }
    // Fornavn
    if (!isNaN(enBillett.fornavn) || enBillett.fornavn === "") {
        document.getElementById("fornavnError").innerHTML = "Må skrive noe inn i fornavnet";
        errorCount = true;
    } else {
        document.getElementById("fornavnError").innerHTML = "";
    }

    //Etternavn
    if (!isNaN(enBillett.etternavn) || enBillett.etternavn === "") {
        document.getElementById("etternavnError").innerHTML = "Må skrive noe inn i etternavnet";
        errorCount = true;
    } else {
        document.getElementById("etternavnError").innerHTML = "";
    }

    // Telefonnr
    if (isNaN(enBillett.telefonnr) || enBillett.telefonnr === "") {
        document.getElementById("telefonnrError").innerHTML = "Må skrive noe inn i telefonnr";
        errorCount= true;
    } else {
        document.getElementById("telefonnrError").innerHTML = "";
    }

    // E-post
    if (!isNaN(enBillett.epost) || enBillett.epost === "") {
        document.getElementById("epostError").innerHTML = "Må skrive noe inn i e-post";
        errorCount= true;
    } else {
        document.getElementById("epostError").innerHTML = "";
    }

    // Tømmer feltene automatisk
    if (errorCount === false) {
        document.getElementById("reset").reset();
    } else {
        return;
    }

    // Tomme og fulle input-felt
    if (kinoBilletter.antall === "" && kinoBilletter.film === "feilFilm" && kinoBilletter.etternavn === "" &&
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

function slett() {
    document.getElementById("kinoBilletter").innerHTML = "";

}