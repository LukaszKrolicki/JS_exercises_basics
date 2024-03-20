class szwalnia{
    typ
    zczego
    cm

    constructor(typ,zczego,cm) {
        this.typ=typ
        this.zczego=zczego
        this.cm=cm
    }

    waliduj(){
        if(this.typ !== "koszula" && this.typ!=="sweter"){
            alert("Wpisz czy koszula czy sweter")
            return false
        }

        if(this.zczego.match("bawelna") || this.zczego.match("skora")){

        }
        else{
            alert("Wpisz bawelna albo skora")
            return false
        }

        if(isNaN(parseInt(this.cm)) || this.cm===null){
            alert("Wpisz powierzchnie")
            return false
        }

        return true
    }

    getTyp(){
        return  this.typ
    }

    getZ(){
        return this.zczego
    }

    getcm(){
        return this.cm
    }
    oblicz(){
        if(this.waliduj()){
            return this.typ + " zrobiona " + this.zczego + " bedzie kosztowac : " + this.cm*4.5
        }
    }
}

function rozwinOmnie(qualifiedName, value){
    x=document.getElementById("omnie");

    if(x.style.display=="none"){
        x.style.display="flex"
    }
    else{
        x.style.display="none"
    }

}

function rozwinOpcje(qualifiedName, value){
    x=document.getElementById("nv");

    if(x.style.display=="none"){
        x.style.display="flex"
    }
    else{
        x.style.display="none"
    }

}

function oblicz(){
    let a = document.getElementById('typ').value;
    let b = document.getElementById('zCzego').value;
    let c = document.getElementById('cm').value;

    const x=new szwalnia(a,b,c)

    let lista = document.getElementById('wynik');

    if(lista.hasChildNodes()){
        while(lista.firstChild){
            lista.removeChild(lista.firstChild);
        }
    }

    let wstep = document.createTextNode("Lista produktów:");

    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');

    let wynik = document.createTextNode(x.oblicz());
    console.log(wynik)

    let liTextTyp = document.createTextNode("Typ: "+x.getTyp());
    let zCzego = document.createTextNode("Z czego: "+x.getZ());
    let cm = document.createTextNode("Ile cm: "+x.getcm());

    let koniec = document.createTextNode("Cena:");

    li1.appendChild(liTextTyp);
    ul.appendChild(li1);

    if(wynik.textContent.match("undefined")){
        if(lista.hasChildNodes()){
            while(lista.firstChild){
                lista.removeChild(lista.firstChild);
            }
        }

        let koniec2 = document.createTextNode("Cos poszlo nie tak")
        lista.appendChild(koniec2)
    }
    else{
        li2.appendChild(zCzego);
        ul.appendChild(li2);

        li3.appendChild(cm);
        ul.appendChild(li3);

        lista.appendChild(wstep);
        lista.appendChild(ul);
        lista.appendChild(koniec)

        lista.appendChild(wynik)
    }



}