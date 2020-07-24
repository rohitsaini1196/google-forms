import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import uploadService from '../../services/uploadService';

function ImageUplaodModel(props){

  const [image, setImage] = React.useState(undefined);
  const [imageWarning, setImageWarning]= React.useState("");

  // const selectImage = (e)=>{
  //   setImage({ image:e.target.files[0]})
  // }



  const uploadImage = ()=>{
    console.log(props.contextData);  
    console.log(image);
    console.log(image.size);


    if(image.size > 3110670){
      setImageWarning("File Size is too big");
    } else if (0){
      //only images.
    } else{

      const formData = new FormData()
      formData.append('myfile', image)
      uploadService.uploadImage(formData)
      .then((data) => {
       // console.log(data);
        var imageLink = data.host + "/" + data.image
        props.handleImagePopClose();
        props.updateImageLink(imageLink, props.contextData);
         },
         error => {
           const resMessage =
             (error.response &&
               error.response.data &&
               error.response.data.message) ||
             error.message ||
             error.toString();
             setImageWarning(resMessage);
         }      
         );
    }


    
    
  }

    return(
        <div>
            <Dialog open={props.handleImagePopOpen} onClose={props.handleImagePopClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Upload Image Here</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Hey, Creating a Community is fun and easy, just fill these easy fields and get your personlized gang ready within seconds.
                      for question 
                    </DialogContentText>
                    <TextField
                      type="file"
                      onChange={e => setImage(e.target.files[0])}
                    />
                    { imageWarning !== "" ? (
                      <p>{imageWarning}</p>
                    ): ""}
                  </DialogContent>

                  <DialogActions>
                    <Button onClick={props.handleImagePopClose} color="primary">
                      Cancel
                    </Button>
                    <Button color="primary" onClick={uploadImage}>
                      Upload 
                    </Button>
                  </DialogActions>
                </Dialog>
        </div>
    )
} 

export default ImageUplaodModel;