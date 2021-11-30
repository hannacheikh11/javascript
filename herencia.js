window.addEventListener("load",function(){
    class Movil {
        constructor(marca){
            this.marca=marca;

        }
        publ(){
            return"esta marca de movil es muy buena" + this.marca;
        }
    }
    class Modelo extends Movil{
        constructor(marca,modelo){
            super(marca);
            this.modelo=modelo;
        }
        pubFinal(){
            return this.publ() + ":el modelo " + this.modelo;
        }
        
    }
    let mitel= new Modelo("ggggg","iphon");
     mensaje.innerHTML=mitel.pubFinal(); 
}, true);