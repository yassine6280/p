
class Nav{
    constructor(){
        this.btn1=document.getElementById("btn1");
        this.p_1=document.getElementById("p-1");
        this.p_1_i=document.getElementById("p-1-i");
        this.title=document.getElementById("box-2")
        this.img=document.getElementById('img-1');
        this.isplay=false;
        btn1.addEventListener("click",()=>{this.open_srch()})
    }
    open_srch(){
        
            if(this.isplay===false){
                this.p_1.style.width="100%"
                this.p_1.style.height="100vh"
                this.p_1.style.marginTop="-10px"
                this.title.style.display="none"
                this.btn1.style.marginTop="0.75rem"
                this.p_1_i.style.display="block"
                this.img.src="./icon/round_arrow_back_ios_black_48dp.png"
                this.isplay=true
                }else if(this.isplay=true){
                    this.title.style.display="block"
                    this.btn1.style.marginTop="0.75rem"
                    this.p_1_i.style.display="none"
                    this.p_1.style.width="0%"
                    this.p_1.style.height="0vh"
                    this.p_1_i.value=null
                    this.img.src="./icon/outline_search_black_48dp.png"
                    this.isplay=false
                }
        
    }
}
onload=new Nav