document.querySelectorAll(".pipe").forEach(e=>{
    e.addEventListener("click", rotate);
});

let reslut = document.querySelector("#submit").addEventListener("click", verif);


//fonction de modification du dataset avec la position actuelle de la pièce 
function rotate(){
    let num_actuel = parseInt(this.dataset.num);
    if(this.classList.contains("angle")){
        if(num_actuel+1>4){
            num_actuel=1;
            // let rota=(num_actuel-1)*90;
            // this.style.transform ='rotate('+rota+'deg)';
            this.style.transform+="rotate(90deg)";
            return this.dataset.num=num_actuel;
            
        }
        else{
            // let rota=num_actuel*90;
            // this.style.transform ='rotate('+rota+'deg)';
            this.style.transform+="rotate(90deg)";
            return this.dataset.num=num_actuel+1;
            
        }
        
    }
    if(this.classList.contains("droit")){
        if(num_actuel+1>2){
            console.log("if : "+num_actuel)
            num_actuel=1;
            // let rota=(num_actuel-1)*90;
            // this.style.transform ='rotate('+rota+'deg)';
            this.style.transform+="rotate(90deg)";
            return this.dataset.num=num_actuel;
            
        }
        else{
            console.log("else : "+num_actuel)
            // let rota=num_actuel*90;
            // this.style.transform ='rotate('+rota+'deg)';
            this.style.transform+="rotate(90deg)";
            return this.dataset.num=num_actuel+1;
            
        }
    }
}

function verif(){
    let tableau=[];
    document.querySelectorAll('.juste').forEach(e=>{
        if(e.dataset.juste && e.dataset.num){                    
            if(e.dataset.juste == e.dataset.num){
                console.log("l'incompétente sait faire copier coller");
            }
            else{
                tableau.push(e);
            }

        }
    });
    if(tableau.length){
        console.log(tableau);
        alert(false);
        refresh();
    }
    else{
        console.log(tableau);
        alert(true);
    }
}

function refresh(){
    document.querySelectorAll('.pipe').forEach(elt=>{
        elt.dataset.num=elt.dataset.ini;
        elt.style.transform ='rotate(0deg)';
    });
    return true;
}