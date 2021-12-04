const NUM_CACHE_IMG = 20

//An array store image for undo or redo
class CanvasStack
{
    constructor(){
        this.ImageArr = [];
        this.startPosition = 0;
        this.endPosition = 0;
        this.currentPosition = 0;
        this.maxNumberElement = NUM_CACHE_IMG;
    }

    addCacheImage(canvas){
        let nextIdx = (this.currentPosition + 1) % (this.maxNumberElement);
        let newImage = {height:canvas.height, width:canvas.width, src:canvas.toDataURL("image/png")}
        this.ImageArr[nextIdx] = newImage;
        this.currentPosition = nextIdx;
        this.endPosition = nextIdx;
        if (nextIdx == this.startPosition) this.startPosition = (this.startPosition + 1) % this.maxNumberElement;
    }

    undo(){
        if (this.currentPosition != this.startPosition) {
            if (this.currentPosition > 0){
                this.currentPosition = this.currentPosition - 1;
            }
            else this.currentPosition = this.maxNumberElement - 1;
            return true;
        }
        else return false;
    }

    redo(){
        if (this.currentPosition != this.endPosition){
            if (this.currentPosition < this.maxNumberElement - 1){
                this.currentPosition = this.currentPosition + 1;
            }
            else this.currentPosition = 0;
            return true;
        }
        else return false;
    }
    getCurrDataSrc(){
        return (this.ImageArr[this.currentPosition]).src;
    }
    getCurrDataHeight(){
        return (this.ImageArr[this.currentPosition]).height;
    }
    getCurrDataWidth(){
        return (this.ImageArr[this.currentPosition]).width;
    }
}

export default CanvasStack