/**
 * Created by luigi on 13/07/16.
 */

/**Function drawSmile(cx,cy,svgEl,i)
 Given position(cx,cy) and a SVG element with id=i, draws a single smile
 and defines the animation.
 */

function drawSmile(cx,cy,svgEl,i){

    var smiling = true;

    var g = svgEl.append("g").attr("id",i).attr("s",1).on("click",
        function click(){
            // happy/sad animation on click
            if(smiling){
                d3.select(this.lastChild)
                    .transition()
                    .duration(1000)
                    .attr("d", "M"+(cx-20)+" "+(cy+20)+ " "+
                        "C " +(cx-10)+ " "+(cy-20)+", "+
                        (cx+10)+ " "+(cy-20)+ ", "+
                        (cx+20)+ " "+(cy+20));
                smiling = false;
            }
            else{
                d3.select(this.lastChild)
                    .transition()
                    .duration(1000)
                    .attr("d", "M"+(cx-20)+" "+(cy+20)+ " "+
                        "C " +(cx-10)+ " "+(cy+30)+", "+
                        (cx+10)+ " "+(cy+30)+ ", "+
                        (cx+20)+ " "+(cy+20));
                smiling = true;
            }
        });

    // Drawing the smile
    var smile = g.append("circle")
        .attr("id","smile_"+i)
        .attr("cx",cx)
        .attr("cy",cy)
        .attr("r",50)
        .attr("stroke","black")
        .attr("fill","yellow");
    var leftEye= g.append("circle")
        .attr("id","leftEye_"+i)
        .attr("cx",cx-20)  //cx-20
        .attr("cy",cy-20)  //cy-20
        .attr("r",10)   //radius fixed to 10
        .attr("fill","black");
    var rightEye= g.append("circle")
        .attr("id","rightEye_"+i)
        .attr("cx",cx+20)  //cx+20
        .attr("cy",cy-20)  //cy-20
        .attr("r",10)   //radius fixed to 10
        .attr("fill","black");

    var mouth = g.append("path")
        .attr("id","mouth_"+i)
        .attr("d", "M"+(cx-20)+" "+(cy+20)+ " "+
            "C " +(cx-10)+ " "+(cy+30)+", "+
            (cx+10)+ " "+(cy+30)+ ", "+
            (cx+20)+ " "+(cy+20))
        .attr("stroke","black")
        .attr("fill","transparent");
}

/**
 Function drawSmiles() draws 30 smiles in random position
 */
function drawSmiles(){
    var bodySel = d3.select("body");
    var svgEl = bodySel.append("svg")
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .attr("width",1280)
        .attr("height",600)
        .attr("viewBox", "0 0 1280 600")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .classed("svg-container", true)
        .classed("svg-content-responsive", true);
    for(i=0; i<30; i++){
        drawSmile(Math.floor(Math.random()*1280),Math.floor(Math.random()*600),svgEl,i);
    }
}