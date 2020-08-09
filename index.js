$("canvas").attr("height",window.innerHeight); //sad
$("#point_pointer").css("top",610+"px"); 
import("https://cdn.jsdelivr.net/gh/exte0427/betterHTML/code.js");
const blocks=[];
let rank=1;
let ops=1;
const ips=ip();
let mu=1;
let ranking=[];
let ranked="";
let rank_name=[];
let rank_val=[];
setInterval(()=>{
    if(mu==1){
        $.ajax({
            url : "https://ex-link.herokuapp.com/wall/get",
            dataType : "jsonp",
            jsonp : "callback",
            success : function(d){
                ranked="";
                rank_name=[];
                rank_val=[];
                ranking=d.data;
                my=ranking.find(a=>a.id==ips);
                for(let i=0;i<ranking.length;i++){
                    let j=0;
                    for(j=0;rank_val[j]>=ranking[i].val*1;j++){}
                    rank_val.splice(j,0,ranking[i].val*1);
                    rank_name.splice(j,0,ranking[i].id);
                }
                rank=rank_name.indexOf(my.id)+1;
                for(let i=0;i<rank_name.length;i++){
                    if(rank_name[i]!=ips){
                        ranked+=`<div id="ranks">
                        <div style="height:20px;"></div>
                        <div style="display: inline-block;width:20px;"></div>
                        <text style="color:#1277EC;font-size:50px;">#${i+1}</text>
                        <div style="display: inline-block;width:20px;"></div>
                        <text style="color:#3A3A3A;font-size:50px;">${rank_name[i].strcut(0,4)+"..."}</text>
                        <div style="display: inline-block;background-color: rgb(233, 233, 233);border-radius: 10px;">
                            <div style="display: inline-block;width:10px;"></div>
                            <text style="color:#b8b8b8;font-size:25px;">${rank_val[i]}</text>
                            <text style="color:#b8b8b8;font-size:10px;">score</text>
                            <div style="display: inline-block;width:10px;"></div>
                        </div>
                    </div>`;
                    }else{
                        ranked+=`<div id="ranks">
                        <div style="height:20px;"></div>
                        <div style="display: inline-block;width:20px;"></div>
                        <text style="color:#1277EC;font-size:50px;">#${i+1}</text>
                        <div style="display: inline-block;width:20px;"></div>
                        <text style="color:#79FFA5;font-size:50px;">YOU</text>
                        <div style="display: inline-block;background-color: rgb(233, 233, 233);border-radius: 10px;">
                            <div style="display: inline-block;width:10px;"></div>
                            <text style="color:#b8b8b8;font-size:25px;">${rank_val[i]}</text>
                            <text style="color:#b8b8b8;font-size:10px;">score</text>
                            <div style="display: inline-block;width:10px;"></div>
                        </div>
                    </div>`;
                    }
                }
                
            },
            error : function(xhr){
                console.log("wa");
            }
        });
        $.ajax({
            url : `https://ex-link.herokuapp.com/wall/post/${ips}/${score}`, //wa
            dataType : "jsonp",
            jsonp : "callback",
        });
    }
},200);
let bolld=[];
let lastbollplus=-1;
let addbolls=[];
let blocksX=[];
let offset=0;
let blocksY=[];
let oop=15;
let opop=40
let mx=100,my=100;
let fds=1;
let ooioio=0;
let popo=0;
let zz=1;
let bollNum=1;
let patys=[];
let score=-100;
let bolls=[];
let pp=0
let border=[];
let fd=0;
let stage=1;
let boll_start_x=280;
function checkRectCircleCollision(circle, rect) {
    let collised = null;
    const distX = Math.abs(circle.x - rect.x - rect.w / 2);
    const distY = Math.abs(circle.y - rect.y - rect.h / 2);

    if ((distX > (rect.w / 2 + circle.r) || distY > (rect.h / 2 + circle.r)) && collised == null) collised = false;
    if ((distX <= (rect.w / 2) || distY <= (rect.h / 2)) && collised == null) collised = true;

    const dx = distX - rect.w / 2;
    const dy = distY - rect.h / 2;

    if(collised == null) collised = dx * dx + dy * dy <= ( circle.r * circle.r );

    const circle_bottom = circle.y + (circle.r * 2);
    const rect_bottom = rect.y + rect.h;
    const circle_right = circle.x + (circle.r * 2);
    const rect_right = rect.x + rect.w;

    const b_collision = rect_bottom - circle.y;
    const t_collision = circle_bottom - rect.y;
    const l_collision = circle_right - rect.x;
    const r_collision = rect_right - circle.x;

    const directions = {
        top: collised ? t_collision < b_collision && t_collision < l_collision && t_collision < r_collision : false,
        bottom: collised ? b_collision < t_collision && b_collision < l_collision && b_collision < r_collision : false,
        left: collised ? l_collision < r_collision && l_collision < t_collision && l_collision < b_collision : false,
        right: collised ? r_collision < l_collision && r_collision < t_collision && r_collision < b_collision : false
    }

    return { collised, directions };
}
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
            ctx.fillStyle = `#${a.color}`;
            ctx.globalAlpha = a.op;
            ctx.fillRect(a.x,a.y,a.size,a.size);
        }
    });
    if(popo==1){
        offset+=0.3;
        ctx.beginPath();
        ctx.strokeStyle="#EAEAE3";
        ctx.lineWidth=4;
        ctx.lineDashOffset = -offset;
        ctx.setLineDash([20,3]);
        ctx.moveTo(boll_start_x, 650);
        let p=(-100/((my-650)/(mx-boll_start_x))),o=(1*100);
        let opsd=0;
        while(opsd==0){
            p*=1.01;
            o*=1.01;
            for(let i=0;i<blocksX.length;i++){
                if(blocksX[i]-10<boll_start_x+p && blocksX[i]+60>boll_start_x+p && blocksY[i]+60>650-o && blocksY[i]-10<650-o){
                    opsd=1;
                    break;
                }
            }
            if(boll_start_x+p<10){
                opsd=1;
            }
            if(boll_start_x+p>590){
                opsd=1;
            }
            if(650-o<10){
                opsd=1;
            }if(650-o>650){
                opsd=1;
            }

        }
        p/=1.02;
        o/=1.02;
        ctx.lineTo(boll_start_x+(p/1.04),650-(o/1.04));
        ctx.stroke();
        ctx.strokeStyle="#EAEAE3";
        ctx.beginPath();
        ctx.arc(boll_start_x+p, 650-o, 15, 0,(Math.PI/180) *360,false);
        //ctx.arc(x,y, 반지름, 시작각도, 종료각도, 그리는 방향);
        //그리는 방향 : true 이면 시계 반대방향 / false 이면 시계 방향
        ctx.lineWidth=5;
        ctx.fillStyle = "#F8F8F4";  //채울 색상
        //ctx.fill(); //채우기
        ctx.stroke(); //테두리
        ctx.strokeStyle="#333333";
    }
    ctx.setLineDash([]);
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
    if(ooioio==0){
        oop+=(12-oop)/50;
    }else{
        oop+=(15-oop)/50;
    }
    addbolls.map(a=>{
        if(a.deeeel==0){
            ctx.beginPath();
            ctx.arc(a.x, a.y, oop, 0,(Math.PI/180) *360,false);
            if(Math.round(oop)==12){
                ooioio=1;
            }
            if(Math.round(oop)==15){
                ooioio=0;
            }
            //ctx.arc(x,y, 반지름, 시작각도, 종료각도, 그리는 방향);
            //그리는 방향 : true 이면 시계 반대방향 / false 이면 시계 방향
            ctx.lineWidth=5;
            ctx.fillStyle = "#FFFEF8";  //채울 색상
            ctx.fill(); //채우기
            ctx.strokeStyle="#6FFAC0";
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(a.x, a.y, 8, 0,(Math.PI/180) *360,false);
            //ctx.arc(x,y, 반지름, 시작각도, 종료각도, 그리는 방향);
            //그리는 방향 : true 이면 시계 반대방향 / false 이면 시계 방향
            ctx.lineWidth=5;
            ctx.fillStyle = "#6FFAC0";  //채울 색상
            ctx.fill(); //채우기
        }
    });
    ctx.strokeStyle = "#333333";
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
        if(a.de==0){
            eval(drawS(a.x,a.y,a.size,a.size,10,"333333","FF5451",a.num,a.op,a.br));
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
const next=(a)=>{
    score+=100;
    const count=random(6,3);
    let ps=[];
        for(let i=0;i<blocksY.length;i++){
            if(blocksY[i]==-50){
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
    let xyyy,yyyy;
    while(true){
        yyyy=random(0,4);
        xyyy=random(0,11);
        let ok=1;
        for(let i=0;i<blocks.length;i++){
            if(blocks[i].x==((xyyy*50)) && blocks[i].y+50==((yyyy*50))){
                ok=0;
            }
        }
        if(ok==1){
            break;
        }
    }
    addbolls.push(new add_boll((xyyy*50)+25,(yyyy*50)-25));
    blocks.map(a=>{
        a.next();
    });
    addbolls.map(a=>{
        a.next();
    })
    if(stage<11){
        stage++;
    }else{
        if(random(0,3)==0){
            stage+=2;
        }else{
            stage+=1;
        }
    }
    if(stage>25 && a!="wa"){
        setTimeout(()=>{
            next("wa");
        },450);
    }
}
function dopn(){
    mu=0;
}
function uopn(){
    mu=1;
}
function g(){
    if(bolld.indexOf(0)==-1){
        popo=1;
        pp=1;
        const h=setInterval(()=>{
            if(mu==1){
                popo=0;
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
const drawS=(x,y,w,h,r,c1,c2,num,op,br)=>{
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
    br=100;
    x=0;
    de=0;
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
            this.delete=1;
            score+=10;
            this.num="";
            for(let i=0;i<10;i++){
                patys.push(new paty(this.x+25,this.y+25));
            }
            let pp=0;
            const ui=setInterval(()=>{
                if(pp>9){
                    this.de=1;
                    clearInterval(ui);
                }
                this.op-=0.1;
                this.size/=1.01;
                this.x+=0.1;
                this.y+=0.1;
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
    nowwww=0;
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
            if(this.x<10 && this.nowwww!=1){
                lastyyy=-1;
                this.xl*=-1;
                this.nowwww=1;
            }
            if(this.x>590&& this.nowwww!=2){
                lastyyy=-1;
                this.xl*=-1;
                this.nowwww=2;
            }
            if(this.y<10&& this.nowwww!=3){
                lastyyy=-1;
                this.yl*=-1;
                this.nowwww=3;
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
                const pp=checkRectCircleCollision({x:this.x,y:this.y,r:15},{x:blocksX[i],y:blocksY[i],w:50,h:50});
                if(pp.collised){
                    this.nowwww=0;
                    if(lastyyy!=i){
                        lastyyy=i;
                        let blockops=blocks.filter(a=>a.delete==0);
                        blockops[i].numM();
                        if(pp.directions.top || pp.directions.bottom){
                            this.yl*=-1;
                            break;
                        }if(pp.directions.left || pp.directions.right){
                            this.xl*=-1;
                            break;
                        }
                    }
                }
            }
            
            for(let i=0;i<addbolls.length;i++){
                const pp=checkRectCircleCollision({x:this.x,y:this.y,r:15},{x:addbolls[i].x,y:addbolls[i].y,w:50,h:50});
                if(pp.collised && addbolls[i].deeeel==0){
                    score+=30;
                    addbolls[i].del();
                    break;
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
    color="FF5451";
    constructor(x,y,color){
        if(color!=undefined){
            this.color=color;
        }
        let xo=Math.random() * (5 - -5)-5;
        let yo=Math.random() * (5 - -5)-5;
        this.x=x;
        this.y=y;
        this.size=random(5,15);
        const psddsad=setInterval(()=>{
            this.op-=0.01;
            yo+=0.1;
            this.x+=xo;
            this.y+=yo;
            xo/=1.1;
            yo/=1.1;
            if(this.op<=0){
                this.op=0;
                clearInterval(psddsad);
            }
        },10);
    }
}
class add_boll{
    x=0;
    y=0;
    deeeel=0;
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    next(){
        let pp=0;
        let fy=this.y;
        const i=setInterval(()=>{
            if(pp==40){
                this.y=fy+50;
                clearInterval(i);
            }
            pp++;
            this.y+=((fy+50)-this.y)/10;
        },10)
    }
    del(){
        this.deeeel=1;
        bollNum++;
        for(let i=0;i<6;i++){
            patys.push(new paty(this.x,this.y,"6FF48A"));
        }
    }
}
next();