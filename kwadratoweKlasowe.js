class kwadratowe{
    A
    B
    C
    #delta
    #x1
    #x2

    constructor(a,b,c) {
        this.A = a;
        this.B = b;
        this.C = c;
    }

    liczDelta(){
        this.delta = (this.B * this.B) - 4 * this.A * this.C;
        return this.delta;
    }

    miejscaZerowe(){
        let d = this.liczDelta();

        if(d > 0){
            this.x1 = ((this.B * -1) - Math.sqrt(d)) / (2*this.A);
            this.x2 = ((this.B * -1) + Math.sqrt(d)) / (2*this.A);
        }
        else if(d == 0){
            this.x1 = (this.B * -1)  / (2 * this.A);
            this.x2 = null;
        }
        else{
            this.x1 = null;
            this.x2 = null;
        }
    }

    getX1(){
        return this.x1;
    }

    getX2 = function (){
        return this.x2;
    }

    getDelta(){
        return this.delta;
    }

    waliduj(){
        if(this.A == null || isNaN(parseInt(this.A)) || this.A == 0)
            return false;
        if(this.B == null || isNaN(parseInt(this.B)))
            return false;
        if(this.C == null || isNaN(parseInt(this.C)))
            return false;
        return true;

    }

    licz(){
        if(this.waliduj()){
            this.miejscaZerowe();
        }
        else{
            alert("Złe dane!" + this.A);
        }
    }
}



function podpiecie(){
    let element = document.getElementById('licz');
    element.addEventListener('click', function (event){
        let a = document.getElementById('wsp_a').value;
        let b = document.forms['dane'].elements['wb'].value;
        let c = document.getElementById('wsp_c').value;

        const rownanie = new kwadratowe(a,b,c);
        rownanie.licz();

        if(rownanie.getDelta() == null)
            return false;

        let lista = document.getElementById('lista');
        let x1 = null;
        let x2 = null;

        if(lista.hasChildNodes()){
            while(lista.firstChild){
                lista.removeChild(lista.firstChild);
            }
        }
        let wynik = document.createTextNode('Wynik:');

        if(rownanie.getDelta() > 0){
            x1 = 'x\u2081 = ' + rownanie.getX1();
            x2 = 'x\u2082 = ' + rownanie.getX2();
        }
        else if(rownanie.getDelta() == 0){
            x1 = 'x = ' + rownanie.getX1();
        }
        else{
            x1 = 'Brak miejsc zerowych, \u0394 < 0'
        }

        let ul = document.createElement('ul');
        let li = document.createElement('li');

        let liText = document.createTextNode(x1);
        li.appendChild(liText);
        ul.appendChild(li);

        lista.appendChild(wynik);
        lista.appendChild(ul);

        if(x2){
            let li2 = document.createElement('li');
            let liText2 = document.createTextNode(x2);
            li2.appendChild(liText2);
            ul.appendChild(li2);
        }

    });
}