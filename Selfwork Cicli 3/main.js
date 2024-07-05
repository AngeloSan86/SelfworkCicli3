let scelta;
console.log(`${scelta}`);

let sceltaValida = false;

while(sceltaValida == false){

    scelta = prompt(`Che bevanda vuoi scegliere?\n1 - Acqua\n2 - Coca Cola\n3 - Birra`);

    if(scelta == 1)
        {
        console.log(`E' stata selezionata l'acqua`);
        sceltaValida = true;
    }else if(scelta == 2)
        {
        console.log(`E' stata selezionata coca cola`);
        sceltaValida = true;
    }else if(scelta == 3)
        {
        console.log(`E' stata selezionata birra`);
        sceltaValida = true;
    }else{
        console.log(`SCELTA NON VALIDA!`);
    }
}



