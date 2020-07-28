import React from 'react'

import {Grid} from '@material-ui/core';

import { Paper, Typography } from '@material-ui/core';

import formService from '../../services/formService';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';



function UserView(props) {
    const [formData, setFormData] = React.useState({});

    React.useEffect(() => {
        var formId = props.match.params.formId
        console.log(formId);

        formService.getForm(formId)
        .then((data) => { 
            console.log(data);
            
            setFormData(data)       
           },
           error => {
           const resMessage =
               (error.response &&
               error.response.data &&
               error.response.data.message) ||
               error.message ||
               error.toString();
               console.log(resMessage);
           }
       );
        
    },[props.match.params.formId]);
    return (
        <div style={{backgroundColor: 'lightblue', height: '100vh'}}>
             <div style={{marginTop:'15px', marginBottom: '7px', paddingBottom:"30px"}}>
           <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
              {/* {loadingFormData ? (<CircularProgress />):""} */}
              
                <Grid item xs={12} sm={5} style={{width: '100%'}}>         
                  <Grid style={{borderTop: '10px solid teal', borderRadius: 10}}>
                        <div>
                          <div>
                            <Paper elevation={2} style={{width:'100%'}}>
                              <div style={{display: 'flex',flexDirection:'column', alignItems:'flex-start', marginLeft: '15px', paddingTop: '20px', paddingBottom: '20px'}}>
                                <Typography variant="h4" style={{fontFamily:'sans-serif Roboto', marginBottom:"15px"}}>
                                  {formData.name}
                                </Typography>
                                <Typography variant="subtitle1">{formData.description}</Typography>
                              </div>
                            </Paper>
                          </div> 
                      </div>       
                  </Grid>     

                  <Grid>
                  <Paper style={{display: 'flex',flexDirection:'column', alignItems:'flex-start', marginLeft: '3px', paddingTop: '15px', paddingBottom: '15px'}}>
                {/* <TextField id="standard-basic" label=" " value="Question" InputProps={{ disableUnderline: true }} />  */}
                
                <Typography variant="subtitle1" style={{marginLeft: '0px'}}>1. Question Text</Typography>


                {/* {ques.questionImage !==""?(
                  <div>
                    <img src={ques.questionImage} width="400px" height="auto" /><br></br><br></br>
                  </div>
                ): "" } */}
                
                {["", "", "", ""].map((op, j)=>(
                 
                 <div key={j}>
                   <div style={{display: 'flex'}}>
                    <FormControlLabel disabled control={<Radio style={{marginRight: '3px', }} />} label={
                        <Typography style={{color: '#555555'}}>
                          Option Text
                        </Typography>
                      } />
                   </div>

                  {/* <div>
                    {op.optionImage !==""?(
                      <img src={op.optionImage} width="160px" height="auto" />
                    ): "" }
                  </div> */}
                 </div>
                ))}  
              </Paper>   
                  </Grid>      
                </Grid>           
           </Grid>
       </div>
        </div>
    )
}

export default UserView
