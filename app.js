const owl = document.querySelectorAll("#owl path");
for (let i = 0; i < owl.length; i++) {
    console.log('Letter ${i} is ${owl[i].getTotalLength()}');
}

const owl2 = document.querySelectorAll("#owl2 path");
for (let i = 0; i < owl2.length; i++) {
    console.log('Letter ${i} is ${owl2[i].getTotalLength()}');
}

