import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';



function QuestionsHeader() {

  const [questions, setQuestions]= React.useState([{questionText: "Question", open: false}]);

  function addMoreQuestionField(){
      expandCloseAll(); //I AM GOD
      setQuestions(questions=> [...questions, {questionText: "Question", open: true}]);
  }

  function expandCloseAll(){
    let qs = [...questions]; 
     for (let j = 0; j < qs.length; j++) {  
      qs[j].open = false;
     }
     setQuestions(qs);
  }

  function handleExpand(i){
    let qs = [...questions]; 
    for (let j = 0; j < qs.length; j++) {
      if(i ==j ){
        qs[j].open = true;
      } else{
        qs[j].open = false;
       }
    }
     setQuestions(qs);
  }

  function questionsUI(){
    return  questions.map((ques, i)=> (
      <div key={i}>
          <div style={{marginBottom: "9px"}}>
          {/* onChange={(e)=>{handleInputAddMember(e.target.value, i)}} */}
            <ExpansionPanel onChange={()=>{handleExpand(i)}} expanded={questions[i].open}>
              <ExpansionPanelSummary
              
                aria-controls="panel1a-content"
                id="panel1a-header"
                elevation={1} style={{width:'100%'}}
              >
                { !questions[i].open ? (
              <div style={{display: 'flex',flexDirection:'column', alignItems:'flex-start', marginLeft: '0px', paddingTop: '20px', paddingBottom: '20px'}}>
                {/* <TextField id="standard-basic" label=" " value="Question" InputProps={{ disableUnderline: true }} />  */}
                <Typography variant="subtitle1">Form description {i+1}</Typography>
                
                  <FormControlLabel disabled control={<Radio />} label="Option 1" />                                        
              </div>            
              ): ""}   
              </ExpansionPanelSummary>


              <ExpansionPanelDetails>

              <div style={{display: 'flex',flexDirection:'column', alignItems:'flex-start', marginLeft: '15px', marginTop:'-15px'}}>
                
                <Typography variant="subtitle1">Form description {i+1}</Typography>
                
                <FormControlLabel disabled control={<Radio />} label={<TextField defaultValue="Default Value" />} />     
                
                <FormControlLabel disabled control={<Radio />} label="Option 2" />     

                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
              </div>
              
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
    </div>
     )
    )
  }


  return (
       
          <div>
            {questionsUI()}
            <div>
              <button onClick={addMoreQuestionField}>Add question</button>
            </div>
            
          </div>
       
  );
}
export default QuestionsHeader
