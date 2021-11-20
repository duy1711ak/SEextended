const NUM_CACHE_IMG = 20

class ImageQueue
{
    constructor(height, width){
        this.ImageArr = [];
        this.startPosition = 0;
        this.endPosition = 0;
        this.currentPosition = 0;
        this.maxNumberElement = NUM_CACHE_IMG;
        this.height = height;
        this.width = width;
    }

    addCacheImage(canvas){
        let nextIdx = (this.currentPosition + 1) % (this.maxNumberElement);
        this.ImageArr[nextIdx] = canvas.toDataURL('image/png');
        this.height = canvas.height;
        this.width = canvas.width;
        this.currentPosition = nextIdx;
        this.endPosition = nextIdx;
        if (nextIdx == this.startPosition) this.startPosition = (this.startPosition + 1) % this.maxNumberElement;
    }

    undo(){
        if (this.currentPosition != this.start) {
            if (this.currentPosition > 0){
                this.currentPosition = this.currentPosition - 1;
            }
            else this.currentPosition = this.maxNumberElement - 1;
            return this.ImageArr[this.currentPosition];
        }
        else return null;
    }

    redo(){
        if (this.currentPosition != this.endPosition){
            if (this.currentPosition < this.maxNumberElement - 1){
                this.currentPosition = this.currentPosition + 1;
            }
            else this.currentPosition = 0;
            return this.ImageArr[this.currentPosition];
        }
        else return null;
    }
}

export default ImageQueue