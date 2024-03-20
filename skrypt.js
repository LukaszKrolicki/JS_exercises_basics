const miesiace = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia' ];

function funkcje() {
    let news1 = document.getElementById("news1"); //getting element from html
    let news2 = document.getElementById("news2");
    news1.innerHTML = powitanie()+"<br/>"+data()+"<br/>";
    news2.innerHTML = dniDoUrodzin();
}

function powitanie() {
    let dzisiaj = new Date();
    let godzina = dzisiaj.getHours();
    if( (godzina<18) && (godzina>6) ) {
        return 'Dzień dobry,';
    } else {
        return 'Dobry wieczór,';
    }
}

function data() {
    let dzisiaj = new Date();
    let dzien =  dzisiaj.getDate();
    let miesiac = miesiace[dzisiaj.getMonth()];
    let rok = dzisiaj.getFullYear();

    return 'dzisiaj jest '+ dzien + ' ' +  miesiac + ' ' + ' '  + rok + ' r.';
}

function dniDoUrodzin() {
    var myBirthday, today, bday, diff, days; //tworzymy zmienne
    myBirthday = [15,3]; // 15 marca
    today = new Date(); //bieżąca data
    bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]); //rok,miesiąc -1 bo zaczyna się od 0 i dzień
    if( today.getTime() > bday.getTime()) { //Jeżeli dzisiaj jest póżniej niż urodzinny
        bday.setFullYear(bday.getFullYear()+1); //urodziny sa za rok
    }
    diff = bday.getTime()-today.getTime(); //calculate the difference
    days = Math.floor(diff/(1000*60*60*24)); //czas podziel na czas jednego dnia
    return days+1+ "3 dni do urodzin"

}

function zegarek(){
    let data = new Date(); //obecna data
    let godzina = data.getHours() //godzina
    let minuta=data.getMinutes() //minuta
    let sekunda = data.getSeconds() //sekunda

    if(minuta<10) minuta="0"+minuta //jeżeli minut jest mniej niż 10 wyświetl np 09
    if(sekunda<10) sekunda="0"+sekunda

    let stopka=document.getElementById("stopka")
    stopka.innerHTML="&copy;2024 | "+godzina+":"+minuta+":"+sekunda;
}

function sprawdzPierwsze(){
    pierwsze=new Array()
    let n= document.getElementById('gNumber').value;

    for(i=2; i<=n;i++){
        wpisac= true
        for(y=2; y<i; y++){
            if(i%y==0){
                wpisac=false
                break
            }
        }
        if(wpisac==true){
            pierwsze.push(i)
        }
    }
    console.log(pierwsze)

    let lista = document.getElementById('results');

    if(lista.hasChildNodes()){
        while(lista.firstChild){
            lista.removeChild(lista.firstChild);
        }
    }


    let wynik = document.createTextNode('Wynik:');
    lista.appendChild(wynik);
    let ul = document.createElement('ul');
    for(element in pierwsze){
        let liText = document.createTextNode(pierwsze[element]);
        let li = document.createElement('li');
        li.appendChild(liText);
        ul.appendChild(li);
    }

    lista.appendChild(ul);
    return pierwsze.toString()
}

function wykonaj(option) {

    let r, reg
    let x = document.getElementById('gTekst').value;
    let reg1 = document.getElementById('gReg').value;
    let reg2 = document.getElementById('g2Reg').value;



    if(reg2!==null || reg2!==""){
        reg = new RegExp(reg1, reg2)
    }else {
        reg = new RegExp(reg1)
    }
    console.log()

    switch (option){
        case 1:{
            r = reg.test(x)
            console.log(r)
            break;
        }
        case 2:{
            r = reg.exec(x)
            console.log(r)
            break;
        }
        case 3:{
            r = reg.compile(x)
            console.log(r)
            break;
        }
        case 4:{
            r=x.match(reg)
            console.log(r)
            break;
        }
        case 5:{
            r=x.search(reg)
            console.log(r)
            break;
        }
        case 6:{
            r=x.replace("kota",reg)
            console.log(r)
            break;
        }
        case 7:{
            r=eval(x)
            console.log(r)
            break;
        }
        case(8):{
            r=escape(x)
            console.log(r)
            break;
        }
        default:{
            r="none"
            console.log(r)
        }
    }
}