import React from 'react'
import QuestionHeader from './QuestionHeader';
import {Grid} from '@material-ui/core';
import { Paper, Typography } from '@material-ui/core';

function QuestionsTab() {

  const [formTitle, setFormTitle] = React.useState("");
  const [formDescription, setFormDescription] = React.useState("");



  return (
       <div style={{marginTop:'15px', marginBottom: '7px'}}>
           <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
              
             <Grid item xs={12} sm={5} style={{width: '100%'}}>
                 
                  <Grid style={{borderTop: '10px solid teal', borderRadius: 10}}>
                      <div>
                          <div>
                            <Paper elevation={2} style={{width:'100%'}}>
                              <div style={{display: 'flex',flexDirection:'column', alignItems:'flex-start', marginLeft: '15px', paddingTop: '20px', paddingBottom: '20px'}}>
                              <Typography variant="h4" style={{fontFamily:'sans-serif Roboto', marginBottom:"15px"}}>Good form</Typography>
                              <Typography variant="subtitle1">Form description</Typography>
                              </div>
                            </Paper>
                          </div> 
                      </div>       
                  </Grid>  

                  <Grid style={{paddingTop: '10px'}}>
                    <div>
                      <QuestionHeader />
                    </div>
                  </Grid>  
                      
            </Grid>           
           </Grid>
       </div>
  );
}
export default QuestionsTab
