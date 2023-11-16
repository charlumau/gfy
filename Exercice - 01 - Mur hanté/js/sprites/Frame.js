class Portrait {
    constructor(id){
        this.id = id;
        this.node = document.querySelector("#" + this.id);
        this.node.style.opacity = 0 +"%";
        this.opacity = 0.0;
        this.speed = 0.02;

        this.node.onmouseover = () => {this.speed = -0.5}
        this.node.onmouseout = () => {this.speed = 0.02}
    }

    tick() {
        if(this.opacity <= 100.0 && this.opacity >= 0.0 ){
            this.opacity += this.speed;
        }

        if(this.opacity > 100){this.opacity = 100}
        if(this.opacity < 0){this.opacity = 0}

        this.node.style.opacity = this.opacity +"%";
    }
}