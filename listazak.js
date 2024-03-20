function dodajZ(){
    let a = document.getElementById('typ').value;
    let b = document.forms['dane'].elements['nazwa'].value;
    let c = document.getElementById('ilosc').value;

    let lista = document.getElementById('lista');
    let li = document.createElement('li');
    let liText = document.createTextNode(a+ " " + b+ "" + c);
    li.appendChild(liText);
    lista.appendChild(li)

    let a2 = document.getElementById('typ').value="";
}