async function loadModel() {
    const model = await tf.loadGraphModel('./Tensorflow_JS/model.json')
    console.log(model);
}

function predictImage(){
    let image = cv.imread(canvas);
    cv.cvtColor(image, image, cv.COLOR_RGBA2GRAY, 0);
    cv.threshold(image, image, 175, 255, cv.THRESH_BINARY);

    let contours = new cv.MatVector();
    let heirarchy = new cv.Mat();

    cv.findContours(image, contours, heirarchy, cv.RETR_COMP, cv.CHAIN_APPROX_SIMPLE);

    let cnt= contours.get(0);
    let rect = cv.boundingRect(cnt);
    image = image.roi(rect);

    var height = image.rows;
    var width = image.cols;

    if(height> width){
        height = 20;
        const scale = image.rows/ height;
        width = Math.round(image.cols / scale);
    } else{
        width = 20;
        const scale = image.cols / width;
        height = Math.round(image.rows/scale)
    }

    let newSize = new cv.Size(width, height);
    cv.resize(image, image, newSize, 0 , 0, cv.INTER_AREA)

    const LEFT = Math.ceil((4 + (20 -width)/2));
    const RIGHT = Math.floor((4 + (20 -width)/2));
    const TOP = Math.ceil((4 + (20 - height)/2));
    const BOTTOM = Math.floor((4 + (20 - height)/2));


    const BLACK = new cv.Scalar(0 ,0 ,0 ,0);

    cv.copyMakeBorder(image, image, TOP, BOTTOM, LEFT, RIGHT, cv.BORDER_CONSTANT, BLACK);

    //cleanup
    image.delete();
    contours.delete();
    cnt.delete();
    heirarchy.delete();
}

