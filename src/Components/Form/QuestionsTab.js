import React from 'react'
import QuestionHeader from './QuestionHeader';
import {Grid} from '@material-ui/core';

function QuestionsTab() {
  return (
       <div style={{marginTop:'20px'}}>
           <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
              
             <Grid  xs={12} sm={5}>
                 <QuestionHeader />
                 <p>Create or edit qurstions from here Create or edit qurstions from here  Create or edit qurstions from here Create or edit qurstions from here Create or edit qurstions from here Create or edit qurstions from here Create or edit qurstions from here Create or edit qurstions from here</p>
        
            </Grid>           
           </Grid>
       </div>
  );
}
export default QuestionsTab
