function sunIsTouching(object){
    if(sun.x - object.x < sun.radiusX + object.radiusX
        && object.x - sun.x < sun.radiusX + object.radiusX
        && sun.y - object.y < sun.radiusY + object.radiusY
        && object.y - sun.y < sun.radiusY + object.radiusY){

            return true;
        }
    else{
        return false;
    }    
}