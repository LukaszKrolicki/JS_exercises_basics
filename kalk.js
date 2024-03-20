class obliczenieMat{
    pierwszaZmienna=null
    drugaZmienna=null
    znak = null

    setPlus(){
        this.znak="+"
    }

    setMin(){
        this.znak="-"
    }

    setMulti(){
        this.znak="*"
    }

    setZmienna(x){
        if(this.pierwszaZmienna==null){
            this.pierwszaZmienna=x
        }
        else{
            this.drugaZmienna=x
        }
    }

    oblicz(){
        switch(this.znak) {
            case '+':
                console.log(this.pierwszaZmienna + this.drugaZmienna)
                return this.pierwszaZmienna + this.drugaZmienna;
            case '-':
                return this.pierwszaZmienna - this.drugaZmienna;
            case '*':
                return this.pierwszaZmienna * this.drugaZmienna;
            case '/':
                return this.pierwszaZmienna / this.drugaZmienna;
            default:
                return "Nieznany operator";
        }
        this.pierwszaZmienna=null
        this.drugaZmienna=null
        this.znak=null
    }


}

const obliczenie = new obliczenieMat()
function obliczwynikPrzycisk(){
    let element = document.getElementById('=');
    element.addEventListener('click', function (event) {
    })
}

function przycisk(x){
    console.log(x);
    obliczenie.setZmienna(x)
}

function plus(){
    obliczenie.setPlus()
}

function minus(){
    obliczenie.setMin()
}

function multiply(){
    obliczenie.setMulti()
}

function oblicz(){
    let lista = document.getElementById('w');
    let wynik = document.createTextNode(obliczenie.oblicz());
    lista.appendChild(wynik)
}