
import React from "react";
import ImageUploading from "react-images-uploading";

export default function Drop() {
    const uploadCanvas = document.querySelector('#myCanvas')
   
  const [images, setImages] = React.useState([]);
  
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App" map="uploadCanvas">
      <ImageUploading
        
        value={images}
        onChange={onChange}
        // maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <img
              id="img-first"
              src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-0/p526x296/194831030_2276556445809080_7739555777274001235_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=t2m-L0L1nqAAX_wWraw&tn=LwcWzizvS1oBz1Yg&_nc_ht=scontent-hkt1-1.xx&tp=6&oh=74e3be5137a21c3f8548f9ac727dcc03&oe=60CB7686"
              alt=""
              width="100"
            />
            {imageList.map(
              (image, index) => (
                (document.getElementById("img-first").style.display = "none"),
                (
                  <div key={index} className="image-item">
                    <img src={image.data_url} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageUpdate(index)}>Save</button>
                      <button
                        onClick={() => {
                          onImageRemove(index),
                            (document.getElementById(
                              "img-first"
                            ).style.display = "block");
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )
              )
            )}
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            {/* <button
              onClick={() => {
                onImageRemoveAll(), hideImg();
              }}
            >
              Remove all images
            </button> */}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
