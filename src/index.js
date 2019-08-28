function getAscPet() {
    let pet = "";

    pet += " \ ______/ V`-,\n";
    pet += "  }        /~~\n";
    pet += " /_)^ --,r'\n";
    pet += "|b      |b\n";

    return pet;
}

function getAscDeath() {
    let death = "";

    death += "  _____\n";
    death += " /     \\\n";
    death += "| () () |\n";
    death += " \\  ^  /\n";
    death += "  |||||\n";
    death += "  |||||\n";

    return death;
}

function getAscRepet() {
    let repet = "";

    repet += "  /^ ^\\\n";
    repet += " / 0 0 \\\n";
    repet += " V\ Y /V\n";
    repet += "  / - \\\n";
    repet += " /    |\n";
    repet += "V__) ||\n";

    return repet;
}

function Repet() {
    console.log("Tinham dois cachorros..\n");
    console.log("O Pet:");
    console.log(getAscPet());
    console.log( "E o Repet: ");
    console.log(getAscRepet());
    console.log("Daí o pet morreu: ");
    console.log(getAscDeath());
    console.log("Quem sobrou?");
    console.log("Repet...\n\n");
    Repet();
}

Repet();
