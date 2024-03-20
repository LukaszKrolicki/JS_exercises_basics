class obliczDniDo{
    dzisiaj = new Date();

    podanyDzien
    podanyMiesiac
    podanyRok
    dataDo

    x
    constructor(a,b,c) {
        this.podanyDzien = a;
        this.podanyMiesiac = b;
        this.podanyRok= c;
        this.dataDo=new Date(c,b-1,a);

    }

    oblicz(){
        var diff = this.dataDo.getTime()-this.dzisiaj.getTime(); //calculate the difference
        this.x= Math.floor(diff/(1000*60*60*24)); //czas podziel na czas jednego dnia
    }

    waliduj(){
        if(this.podanyMiesiac == null || isNaN(parseInt(this.podanyMiesiac))){
            this.x= "cos poszlo nie tak"
        }
    }

    getX(){
        this.waliduj()
        if(this.x+1===0){
            return "To dzisiaj"
        }
        if(this.x+1<0){
            return "To już było"
        }
        return this.x+1
    }
}

function podpiecie(){
    let element = document.getElementById('licz');
    element.addEventListener('click', function (event){
        let a = document.getElementById('dni').value;
        let b = document.forms['dane'].elements['miesiac'].value;
        let c = document.getElementById('rok').value;

        const f = new obliczDniDo(a,b,c);
        f.oblicz();

        let lista = document.getElementById('wynik');
        if(lista.hasChildNodes()){
            while(lista.firstChild){
                lista.removeChild(lista.firstChild);
            }
        }

        let wynik = document.createTextNode('Wynik:'+f.getX());
        lista.append(wynik)
    })

}