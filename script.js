let sangatBagus = 0;
let cukupBagus = 0;
let kurangBagus = 0;

const klikSangatBagus = () =>{
    sangatBagus++;
    document.querySelector("#jumlahSangatBagus").innerHTML = sangatBagus;
}
const klikCukupBagus = () => {
    cukupBagus++;
    document.querySelector("#jumlahCukupBagus").innerHTML = cukupBagus;
}
const klikKurangBagus = () => {
    kurangBagus++;
    document.querySelector("#jumlahKurangBagus").innerHTML = kurangBagus;
}