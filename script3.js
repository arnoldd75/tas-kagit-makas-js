let PCrastgele = Math.round(Math.random() * 2)
console.log (PCrastgele);

let pcSecim;



if (PCrastgele == 0){
   pcSecim = "tas"
}

else if (PCrastgele == 1){
    pcSecim = "kagit"
 }

else if (PCrastgele == 2){
    pcSecim = "makas"
 }


 document.getElementById('select').addEventListener('change', getSelectedValue);

 function getSelectedValue() {
   let selectElement = document.getElementById('select');
   let selectedValue = selectElement.value;

   // Seçilen değeri ekrana yazdırma (örnek olarak console.log)
   console.log("Seçilen Değer: " + selectedValue);
   oyun(selectedValue);
   
}

const btn = document.getElementById('btn')
btn.addEventListener('click',oyun);
    

function oyun(selectedValue){

//Bilgisayar seçiminin bizi yendiği durumlar

if(pcSecim == "tas" && selectedValue == "makas"){
   alert ("Kaybettiniz")
}

else if(pcSecim == "kagit" && selectedValue == "tas"){
   alert ("Kaybettiniz")
}

else if(pcSecim == "makas" && selectedValue == "kagit"){
   alert ("Kaybettiniz")
}

// Bizim kazandığımız durumlar
if(selectedValue == "tas" && pcSecim == "makas"){
   alert ("Kazandınız")
}

else if(selectedValue == "kagit" && pcSecim == "tas"){
   alert ("Kazandınız")
}

else if(selectedValue == "makas" && pcSecim == "kagit"){
   alert ("Kazandınız")
}

else if(selectedValue == "makas" && pcSecim == "kagit"){
   alert ("Kazandınız")
}

else if(pcSecim == selectedValue){
   alert ("Berabere")
}

}