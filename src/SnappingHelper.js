
import {Line} from "fabric";

const snappingDistance = 10;

export const handleMovingObject = (canvas, obj, guidelines, setGuidelines) =>{
    const canvasWidth= canvas.width;
    const canvasHeight=  canvas.height;

    const left = obj.left;
    const top = obj.top;
    const right = left + obj.width * obj.scaleX;
    const bottom = top + obj.height* obj.scaleY;

    const centerX = left +( obj.width * obj.scaleX) /2;
    const centerY = top + (obj.height*obj.scaleY)/2;

    let newGuidelines = [];
    clearGuides(canvas);

    let snapped = false;

    if(Math.abs(left)< snappingDistance){
        obj.set({left: 0});
        if(!guidelinesExists(canvas, "vertical-left")){
            const line = createVerticalGuideLine(canvas, 0, "vertical-left");
            newGuidelines.push(line);
            canvas.add(line);
        }
        snapped=true;
    }
    if(Math.abs(top)< snappingDistance){
        obj.set({top: 0});
        if(!guidelinesExists(canvas, "horizontal-top")){
            const line = createHorizontalGuideLine(canvas, 0, "horizontal-top");
            newGuidelines.push(line);
            canvas.add(line);
        }
        snapped=true;
    }
    if(Math.abs(right - canvasWidth)< snappingDistance){
        obj.set({left: canvasWidth - obj.width*obj.scaleX});
        if(!guidelinesExists(canvas, "vertical-right")){
            const line = createVerticalGuideLine(canvas, canvasWidth, "vertical-right");
            newGuidelines.push(line);
            canvas.add(line);
        }
        snapped=true;
    }
    if(Math.abs(bottom - canvasHeight)< snappingDistance){
        obj.set({top: canvasHeight - obj.height * obj.scaleY});
        if(!guidelinesExists(canvas, "horizontal-bottom")){
            const line = createHorizontalGuideLine(canvas, canvasHeight, "horizontal-bottom");
            newGuidelines.push(line);
            canvas.add(line);
        }
        snapped = true;
    }
    if(Math.abs(centerX - canvasWidth)< snappingDistance){
        obj.set({left: canvasWidth / 2 - (obj.width*obj.scaleX)/2});
        if(!guidelinesExists(canvas, "vertical-center")){
            const line = createVerticalGuideLine(canvas, canvasWidth /2,"verticl-center");
            newGuidelines.push(line);
            canvas.add(line);
        }
        snapped=true;
    }
    if(Math.abs(centerY - canvasHeight)< snappingDistance){
        obj.set({left: canvasHeight / 2 - (obj.height*obj.scaleY)/2});
        if(!guidelinesExists(canvas, "vertical-center")){
            const line = createVerticalGuideLine(canvas, canvasHeight/2,"verticl-center");
            newGuidelines.push(line);
            canvas.add(line);
        }
        snapped=true;
    }

    if(!snapped){
        clearGuides(canvas);
    }else{
        setGuidelines(canvas);
    }
    canvas.renderAll();

}

export const createVerticalGuideLine = (canvas, x, id)=>{
    return new Line([x, 0, x, canvas.height],{
        id,
        stroke:"red",
        strokeWidth: 1,
        selectable:false,
        evented:false,
        strokeDashArray:[5,5],
        opacity:0.7,
    });
}
export const createHorizontalGuideLine = (canvas, y, id)=>{
    return new Line([0, y, canvas.width, y],{
        id,
        stroke:"red",
        strokeWidth: 1,
        selectable:false,
        evented:false,
        strokeDashArray:[5,5],
        opacity:0.7,
    });
};

export const clearGuides= (canvas, id) =>{
    const objects = canvas.getObjects("line");
    objects.forEach(element => {
        if((element.id && element.id.startsWith("vertical-")) || element.id.startsWith("horizontal-")){
            canvas.remove(element);
        }
    });
    canvas.renderAll();
}

const guidelinesExists =(canvas, id)=>{
    const objects = canvas.getObjects("line");
    return objects.some((obj)=>obj.id ===id);
}