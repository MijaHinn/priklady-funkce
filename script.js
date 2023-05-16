console.log('%c JavaScript funguje ', 'background:black;color:yellow;');
/*
Napište funkci dle zadání.
Pokud má funkce vracet hodnotu (všechny, mimo příklad 1), uložte tuto hodnotu do proměnné a tu pak vypište dokonzole.
*/
/*
Cvičení 1: Pozdravovací funkce
Napište jednoduchou JavaScriptovou funkci s názvem pozdrav, která přijímá jeden parametr, jméno, a vrátí pozdravovací zprávu s daným jménem. Například pokud je vstupem "Jan", funkce by měla vrátit "Ahoj, Jan!"
*/

const pozdrav = (jmeno) => {
    console.log("Ahoj, " + jmeno + "!");
}

pozdrav("Mija");


/*
Cvičení 2: Funkce pro sečítání dvou čísel
Napište jednoduchou JavaScriptovou funkci s názvem secti, která přijímá dva parametry, a a b, a vrátí součet těchto dvou čísel.
*/

const secti = (a, b) => {
    let vysledek = a + b;
    console.log("Součet je: " + vysledek);
    return vysledek;
}

secti(5, 3);


/*
Cvičení 3: Výpočet plochy obdélníka
Vytvořte funkci s názvem vypoctiPlochu, která přijímá dva parametry, sirka a vyska, a vrátí plochu obdélníka podle vzorce: plocha = šířka * výška.
*/

const vypoctiPlochu = (sirka, vyska) => {
    let plocha = sirka * vyska;
    console.log("Plocha obdelníku je: " + plocha);
    return plocha;
}

vypoctiPlochu(2, 3);


/*
Cvičení 4: Funkce pro výpočet průměru dvou čísel
Vytvořte funkci s názvem prumer, která přijímá dva parametry, a a b, a vrátí průměr těchto dvou čísel. Průměr je součet dvou čísel dělený dvěma.
*/

const prumer = (a, b) => {
    let prumerVysledek = (a + b) / 2;
    console.log("Průměr je: " + prumerVysledek);
    return prumerVysledek;
}

prumer(16, 4);


/*
Cvičení 5: Převod teploty z Fahrenheit na Celsius
Napište funkci s názvem fahrenheitNaCelsius, která přijímá jeden parametr, fahrenheit, a vrátí teplotu v Celsiusu podle vzorce: Celsius = (Fahrenheit - 32) * 5/9. Výsledek zaokrouhlete na dvě desetinná místa.
*/

const fahrenheitNaCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) * 5/9;
    console.log("Převod teploty z Fahrenheit na Celsius je: " + celsius);

    let zaokrouhleni = Math.round(celsius * 100) / 100;

    console.log("Zaokrouhlené stupně Celsia: " + zaokrouhleni);
    return zaokrouhleni;
}

fahrenheitNaCelsius(100);


/*
Cvičení 6: Funkce pro výpočet geometrického průměru dvou čísel
Vytvořte funkci s názvem geometrickyPrumer, která přijímá dva parametry, a a b, a vrátí geometrický průměr těchto dvou čísel. Geometrický průměr je odmocnina ze součinu dvou čísel. Můžete použít funkci Math.sqrt() pro výpočet odmocniny.
*/

const geometrickyPrumer = (a, b) => {
    return Math.sqrt(a * b);
}
console.log(geometrickyPrumer(4, 36));


/*
Cvičení 7: Funkce pro zjištění, zda je číslo sudé nebo liché
Napište funkci s názvem jeSude, která přijímá jeden parametr, cislo, a vrátí řetězec "sudé", pokud je číslo sudé, nebo "liché", pokud je číslo liché. Můžete využít operátor modulo (%) pro zjištění zbytku po dělení čísla dvěma.
*/

const jeSude = (cislo) => {

    if ((cislo % 2) === 1){
        return "Liché";
    }
    
    return "Sudé";
}

console.log(jeSude(10));


/*
Cvičení 8: Funkce pro zjištění, zda je číslo kladné, záporné nebo nulové
Napište funkci s názvem typCisla, která přijímá jeden parametr, cislo, a vrátí řetězec "kladné", pokud je číslo kladné, "záporné", pokud je číslo záporné, nebo "nulové", pokud je číslo rovno nule.
*/

const typCisla = (cislo) => {
    if (cislo < 0) {
        return "Záporné";
    } else if (cislo == 0) {
        return "Nulové";
    } 
    
    return "Kladné";
}

console.log(typCisla(3));