var xhr = new XMLHttpRequest();
let tebody = document.getElementById("data-autput");
xhr.open("GET","products.json",true);
xhr.send();
xhr.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        for(i=0; i<data.length;i++){
            tebody.innerHTML +=
                
            `
             <tr>
                <td>${data[i].id}</td>
                <td><img src="${data[i].image}" alt="missing image"/></td>
                <td>${data[i].name}</td>
                <td>${data[i].price}$</td>
                <td>${data[i].description}</td>
                <td>${data[i].promocode}</td>
             </tr>
            
            
            `

  

        }

    }
}