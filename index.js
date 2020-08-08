$("canvas").attr("height",window.innerHeight); //sad
const blocks=[];
let bolld=[];
let blocksX=[];
let blocksY=[];
let opop=40
let mx=100,my=100;
let fds=1;
let zz=1;
let bollNum=0;
let patys=[];
let bolls=[];
let pp=0
let border=[];
let fd=0;
let stage=1;
let boll_start_x=280;
setInterval(()=>{
    if(bolld.indexOf(0)==-1 && zz==0){
        next();
        zz=1;
    }
    if(bolld.indexOf(0)!=-1){
        zz=0;
    }
    blocksX=[];
    blocksY=[];
    border=[];
    bolld=[];
    for(i of blocks){
        if(i.delete==0){
            blocksX.push(i.x);
            blocksY.push(i.y);
            border.push(i.border);
        }
    }
    for(i of bolls){
        bolld.push(i.delete);
    }
    const canvas=document.getElementById('game');
    const ctx=canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    patys.map(a=>{
        if(a.op!=0){
            ctx.fillStyle = "#FF5451";
            ctx.globalAlpha = a.op;
            ctx.fillRect(a.x,a.y,a.size,a.size);
        }
    });
    ctx.globalAlpha = 1;
    if(fds==1){
        ctx.beginPath();
        ctx.arc(boll_start_x, 650, 15, 0,(Math.PI/180) *360,false);
        //ctx.arc(x,y, 반지름, 시작각도, 종료각도, 그리는 방향);
        //그리는 방향 : true 이면 시계 반대방향 / false 이면 시계 방향
        ctx.lineWidth=5;
        ctx.fillStyle = "#F1D954";  //채울 색상
        ctx.fill(); //채우기
        ctx.stroke(); //테두리
    }
    ctx.beginPath();
    ctx.lineWidth=3;
    ctx.globalAlpha = 0.5;
    ctx.moveTo(10,650);
    ctx.lineTo(boll_start_x-opop,650);
    ctx.moveTo(boll_start_x+opop,650);
    ctx.lineTo(canvas.width-10,650);
    ctx.stroke();
    ctx.globalAlpha = 1;
    bolls.map(a=>{
        if(a.delete==0){
            for(let j=0;j<a.xyu.length;j++){
                //a.xyu[j].x
                ctx.beginPath();
                ctx.arc(a.xyu[j].x, a.xyu[j].y, 18-(a.xyu.length-j), 0,(Math.PI/180) *360,false);
                //ctx.arc(x,y, 반지름, 시작각도, 종료각도, 그리는 방향);
                //그리는 방향 : true 이면 시계 반대방향 / false 이면 시계 방향
                ctx.lineWidth=0;
                ctx.fillStyle = "#E7E139";  //채울 색상
                ctx.globalAlpha=0.1;
                ctx.fill(); //채우기
                ctx.globalAlpha=1;
                //ctx.stroke(); //테두리
            }
            ctx.beginPath();
            ctx.arc(a.x, a.y, 15, 0,(Math.PI/180) *360,false);
            //ctx.arc(x,y, 반지름, 시작각도, 종료각도, 그리는 방향);
            //그리는 방향 : true 이면 시계 반대방향 / false 이면 시계 방향
            ctx.lineWidth=5;
            ctx.fillStyle = "#F1D954";  //채울 색상
            ctx.fill(); //채우기
            ctx.stroke(); //테두리
        }
    })
    blocks.map(a=>{
        if(a.delete==0){
            eval(drawS(a.x,a.y,a.size,a.size,10,"333333","FF5451",a.num,a.op));
            ctx.font = '28px Fredoka One';
            ctx.fillStyle = "#333333";
            ctx.textAlign = "center";
            ctx.fillText(a.num,a.x+25,a.y+35);
            ctx.fillStyle = "#FF5451";
            if(a.border[0]==0){
                ctx.fillRect(a.x,a.y+5,10,40);
                ctx.fillStyle = "#333333";
                ctx.fillRect(a.x-4,a.y,12,5);
                ctx.fillStyle = "#FF5451";
                ctx.fillStyle = "#333333";
                ctx.fillRect(a.x-4,a.y+45,12,5);
                ctx.fillStyle = "#FF5451";
            }
            if(a.border[1]==0){
                ctx.fillRect(a.x+40,a.y+5,10,40);
                ctx.fillStyle = "#333333";
                ctx.fillRect(a.x+40,a.y,12,5);
                ctx.fillStyle = "#FF5451";
            }
            if(a.border[2]==0){
                ctx.fillRect(a.x+5,a.y+40,40,10);
                ctx.fillStyle = "#333333";
                ctx.fillRect(a.x,a.y+47,5,8);
                ctx.fillStyle = "#FF5451";
                ctx.fillStyle = "#333333";
                ctx.fillRect(a.x+45,a.y+47,5,8);
                ctx.fillStyle = "#FF5451";
            }
            if(a.border[3]==0){
                ctx.fillRect(a.x+5,a.y,40,10);
                
                
            }
        }
    });
},5);
onmousemove = function(e){mx= e.clientX,my= e.clientY}
const next=()=>{
    bollNum++;
    const count=random(6,3);
    let ps=[];
        for(let i=0;i<blocksY.length;i++){
            if(blocksY[i]==0){
                ps.push(blocksX[i]);
            }
    }
    for(let i=0;i<count;i++){
        let o=0;
        while(true){
            o=random(0,11);
            if(ps.indexOf(o*50)==-1){
                break;
            }
        }
        blocks.push(new block(o*50));
        ps.push(blocks[blocks.length-1].x);
    }
    blocks.map(a=>{
        a.next();
    });
    stage++;
}
let mu=0;
$( "body" ).mouseup(function() {
    mu=1;
});
$( "body" ).mousedown(function() {
    mu=0;
});
function g(){
    if(bolld.indexOf(0)==-1){
        pp=1;
        const h=setInterval(()=>{
            if(mu==1){
                clearInterval(h);
                let oo=1;
                let mmmmx=mx,mmmmy=my;
                bolls.push(new boll(mx,my));
                const jjj=setInterval(()=>{
                    if(oo>=bollNum){
                        pp=0;
                        clearInterval(jjj);
                    }else{
                        oo++;
                        bolls.push(new boll(mmmmx,mmmmy));
                    }
                },100);
            }
        },100);
    }
}
const drawS=(x,y,w,h,r,c1,c2,num,op)=>{
    return `var rectX = ${x};
    var rectY = ${y};
    var rectWidth = ${w};
    var rectHeight = ${h};
    var cornerRadius = ${r};
    
    // Set faux rounded corners
    ctx.lineJoin = "round";
    ctx.lineWidth = cornerRadius;
    ctx.globalAlpha = ${op};
    ctx.beginPath();
    // 색 설정
    ctx.strokeStyle = '#${c1}'; // 선 색
    ctx.fillStyle = '#${c2}'; // 채운 사각형 색
    
    // 그리기
    ctx.strokeRect(rectX+(cornerRadius/2), rectY+(cornerRadius/2), rectWidth-cornerRadius, rectHeight-cornerRadius);
    ctx.fillRect(rectX+(cornerRadius/2), rectY+(cornerRadius/2), rectWidth-cornerRadius, rectHeight-cornerRadius);`;
}
const random=(min,max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
}
class block{
    x=0;
    size=50;
    xxx=-1;
    yyy=-50;
    is;
    y=-50;
    num=1;
    op=0.9;
    delete=0;
    border=[1,1,1,1];
    constructor(x){
        this.xxx=x;
        this.x=x;
        this.num=stage;
        const u=setInterval(()=>{
            if(this.delete==1){
                clearInterval(u);
            }
            this.border=[1,1,1,1];
            for(let i=0;i<blocksX.length;i++){
                if(blocksX[i]==this.x+50 && blocksY[i]==this.y){
                    this.border[1]=0;
                }
                if(blocksX[i]==this.x-50 && blocksY[i]==this.y){
                    this.border[0]=0;
                }
                if(blocksY[i]==this.y+50 && blocksX[i]==this.x){
                    this.border[2]=0;
                }
                if(blocksY[i]==this.y-50 && blocksX[i]==this.x){
                    this.border[3]=0;
                }
            }
        },10);
    }
    numM(){
        this.num--;
        if(this.num<1){
            this.num="";
            for(let i=0;i<10;i++){
                patys.push(new paty(this.x+25,this.y+25));
            }
            let pp=0;
            const ui=setInterval(()=>{
                if(pp>10){
                    this.delete=1;
                    clearInterval(ui);
                }
                this.op-=0.1;
                this.size/=1.1;
                this.x+=1;
                this.y+=1;
                pp++;
                
            },10);
        }else{
            this.size-=10;
            this.x+=5;
            this.y+=5;
            let pp=0;
            const ui=setInterval(()=>{
                if(pp>10){
                    clearInterval(ui);
                    this.size=50;
                    this.x=this.xxx;
                    this.y=this.yyy;
                }else{
                    this.size++;
                    this.y-=0.5;
                    this.x-=0.5;
                    pp++;
                }
            },10);
        }
    }
    next(){
        let pp=0;
        let fy=this.y;
        const i=setInterval(()=>{
            if(pp==40){
                this.y=fy+50;
                this.yyy=this.y;
                clearInterval(i);
            }
            pp++;
            this.y+=((fy+50)-this.y)/10;
            this.yyy=this.y;
        },10)
    }
}
class boll{
    goingX=0;
    goingY=0;
    s=boll_start_x;
    x=boll_start_x;
    y=650;
    xl=1;
    yl=1;
    xyu=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
    delete=0;
    constructor(gx,gy){
        let lastyyy=-1;
        if(fd==0){
            let ppp=0;
            const u=setInterval(()=>{
                ppp++;
                if(ppp>30){
                    opop=0;
                    clearInterval(u);
                }
                opop=opop/1.2;
            },10);
            fds=0;
            fd=3;
        }
        if(fd==1){
            fd=0;
        }
        this.goingX=gx;
        this.goingY=gy;
        let nmx=mx;
        const aa=setInterval(()=>{
            if(this.x<10){
                lastyyy=-1;
                this.xl*=-1;
            }
            if(this.x>590){
                lastyyy=-1;
                this.xl*=-1;
            }
            if(this.y<10){
                lastyyy=-1;
                this.yl*=-1;
            }if(this.y>650){
                if(fd==3){
                    let ppp=0;
                            const u=setInterval(()=>{
                                ppp++;
                                if(ppp>41){
                                    opop=40;
                                    clearInterval(u);
                                }
                                opop+=1;
                    },10);
                    fd=0;
                    clearInterval(aa);
                    const ii=setInterval(()=>{
                        if(Math.round(this.x)==Math.round(boll_start_x)){
                            this.delete=1;
                            $("#point_pointer").css("left",boll_start_x-40);
                            fds=1;
                            clearInterval(ii);
                        }
                        this.y+=(650-this.y)/10;
                        boll_start_x+=(this.x-boll_start_x)/10;
                    },10);
                    //boll_start_x=this.x;
                }else{
                    fd=0;
                    clearInterval(aa);
                    const ii=setInterval(()=>{
                        if(Math.round(this.x)==Math.round(boll_start_x)){
                            this.delete=1;
                            clearInterval(ii);
                        }
                        this.x+=(boll_start_x-this.x)/10;
                        this.y+=(650-this.y)/10;
                    },10);
                }
            }
            for(let i=0;i<blocksX.length;i++){
                if(blocksX[i]-10<this.x && blocksX[i]+60>this.x && blocksY[i]+60>this.y && blocksY[i]-10<this.y){
                    if(lastyyy!=i){
                        lastyyy=i;
                        let blockops=blocks.filter(a=>a.delete==0);
                        blockops[i].numM();
                        if(!(blocksY[i]-10<this.y-12)){
                            this.yl*=-1;
                            break;
                        }else if(!(blocksY[i]+60>this.y+12)){
                            this.yl*=-1;
                            break;
                        }else if(!(blocksX[i]-10<this.x-12)){
                            this.xl*=-1;
                            break;
                        }else if(!(blocksX[i]+60>this.x+12)){
                            this.xl*=-1;
                            break;
                        }
                    }
                }
            }
            if(nmx<this.s){
                let oo=15/(((gx-this.s)+(gy-650))/2)/5;
                this.x+=(gx-this.s)*oo*-1*this.xl;
                this.y+=(gy-650)*oo*-1*this.yl;
            }else{
                let oxx=(this.s-(gx-this.s));
                let oyy=gy;
                let oo=15/(((oxx-this.s)+(oyy-650))/2)/5;
                this.x+=(oxx-this.s)*oo*1*this.xl;
                this.y+=(oyy-650)*oo*-1*this.yl;
            }
        },10);
        setInterval(()=>{
            this.xyu.splice(0,1);
            this.xyu.push({x:this.x,y:this.y});
        },10);
    }
}
class paty{
    x;
    y;
    size;
    op=1;
    delete=0;
    constructor(x,y){
        let xo=Math.random() * (5 - -5)-5;
        let yo=Math.random() * (5 - -5)-5;
        this.x=x;
        this.y=y;
        this.size=random(5,15);
        const psddsad=setInterval(()=>{
            this.op-=0.1;
            this.x+=xo;
            this.y+=yo;
            xo/=1.1;
            yo/=1.1;
            if(this.op<=0){
                this.op=0;
                clearInterval(psddsad);
            }
        },50);
    }
}
next();