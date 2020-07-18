import React from 'react'
import QuestionHeader from './QuestionHeader';
import {Grid} from '@material-ui/core';
import { Paper, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import CloseIcon from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AccordionActions from '@material-ui/core/AccordionActions';
import Divider from '@material-ui/core/Divider';
import VisibilityIcon from '@material-ui/icons/Visibility';

function QuestionsTab() {

  const [formTitle, setFormTitle] = React.useState("");
  const [formDescription, setFormDescription] = React.useState("");
  const [questions, setQuestions]= React.useState([{questionText: "Question", options : [{optionText: "Option 1"}], open: false}]);
  

  function addMoreQuestionField(){
      expandCloseAll(); //I AM GOD

      setQuestions(questions=> [...questions, {questionText: "Question", options : [{optionText: "Option 1"}], open: true}]);
  }

  function handleOptionValue(text,i, j){
    var optionsOfQuestion = [...questions];
    optionsOfQuestion[i].options[j].optionText = text;
    //newMembersEmail[i]= email;
      setQuestions(optionsOfQuestion);
  }

  function handleQuestionValue(text, i){
    var optionsOfQuestion = [...questions];
    optionsOfQuestion[i].questionText = text;
      setQuestions(optionsOfQuestion);
  }

  


  function showAsQuestion(i){
    let qs = [...questions];  
     qs[i].open = false;
     setQuestions(qs);
  }

  function addOption(i){
    var optionsOfQuestion = [...questions];
    if(optionsOfQuestion[i].options.length < 5){
      optionsOfQuestion[i].options.push({optionText: "Option " + (optionsOfQuestion[i].options.length + 1)})
    } else{
      console.log("Max  5 options ");  
    }
    console.log(optionsOfQuestion);
    setQuestions(optionsOfQuestion)
  }

  function removeOption(i, j){
    var optionsOfQuestion = [...questions];
    if(optionsOfQuestion[i].options.length > 1){
      optionsOfQuestion[i].options.splice(j, 1);
      setQuestions(optionsOfQuestion)
      console.log(i + "__" + j);
    }   
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
          
            <Accordion onChange={()=>{handleExpand(i)}} expanded={questions[i].open}>
              <AccordionSummary            
                aria-controls="panel1a-content"
                id="panel1a-header"
                elevation={1} style={{width:'100%'}}
              >
                { !questions[i].open ? (
              <div style={{display: 'flex',flexDirection:'column', alignItems:'flex-start', marginLeft: '3px', paddingTop: '15px', paddingBottom: '15px'}}>
                {/* <TextField id="standard-basic" label=" " value="Question" InputProps={{ disableUnderline: true }} />  */}
                
                <Typography variant="subtitle1" style={{marginLeft: '0px'}}>{i+1}.  {ques.questionText}</Typography>
                             
                {ques.options.map((op, j)=>(
                 
                 <div key={j}>
                    <FormControlLabel disabled control={<Radio style={{marginRight: '3px'}} />} label={
                      <Typography style={{color: '#555555'}}>
                        {ques.options[j].optionText}
                      </Typography>
                    } />
                 </div>

                ))}  

              </div>            
              ): ""}   
              </AccordionSummary>


              <AccordionDetails>

              <div style={{display: 'flex',flexDirection:'column', alignItems:'flex-start', marginLeft: '15px', marginTop:'-15px'}}>
                
                {/* <Typography variant="subtitle1" style={{marginBottom: '15px'}}>Form description {i+1}</Typography> */}
                <div style={{display:'flex', width: '100%', justifyContent: 'space-between'}}>
                  <TextField 
                        fullWidth={true} 
                        placeholder="Question Text" 
                        style={{marginBottom: '15px'}}  
                        rows={2}
                        rowsMax={20}
                        multiline={true}
                        fullWidth 
                        value={ques.questionText}
                        variant="filled"
                      onChange={(e)=>{handleQuestionValue(e.target.value, i)}}
                  />
                  <IconButton aria-label="upload image">
                        <CropOriginalIcon />
                  </IconButton>
                </div>
                
                <div style={{width: '100%'}}>
                {ques.options.map((op, j)=>(
                 
                 <div key={j} style={{display:'flex', flexDirection:'row', marginLeft:'-12.5px', justifyContent: 'space-between', paddingTop: '5px', paddingBottom: '5px'}}>

                    <Radio disabled /> 
                    <TextField 
                      fullWidth={true} 
                      placeholder="Option text" 
                      style={{marginTop: '5px'}} 
                      value={ques.options[j].optionText}
                      onChange={(e)=>{handleOptionValue(e.target.value, i, j)}}
                    />
                    
                    
                    <IconButton aria-label="upload image">
                      <CropOriginalIcon />
                    </IconButton>

                    <IconButton aria-label="delete" onClick={()=>{removeOption(i, j)}}>
                      <CloseIcon />
                    </IconButton>

                 </div>
                  
                ))}  
                </div>  
                
                
                {ques.options.length < 5 ? (
                  <div>
                  <FormControlLabel disabled control={<Radio />} label={
                    <Button size="small" onClick={()=>{addOption(i)}} style={{textTransform: 'none', marginLeft:"-5px"}}>
                      Add Option
                    </Button>
                  } /> 
                  </div>
                ): ""}

                <br></br>
                <br></br>

                <Typography variant="body2" style={{color: 'grey'}}>You can add maximum 5 options. If you want to add more then change in settings. Multiple choice single option is availible</Typography>
              </div>
              
              </AccordionDetails>
              <Divider />
              


              <AccordionActions>

              
                  
                    <IconButton aria-label="delete" onClick={()=>{showAsQuestion(i)}}>
                      <VisibilityIcon />
                    </IconButton>

                    <IconButton aria-label="delete">
                      <CropOriginalIcon />
                    </IconButton>
                    <Divider orientation="vertical" flexItem/>

                    <IconButton aria-label="delete">
                      <CropOriginalIcon />
                    </IconButton>

                    <IconButton aria-label="Image">
                      <CropOriginalIcon />
                    </IconButton>
              </AccordionActions>
            </Accordion>
          </div>
    </div>
     )
    )
  }




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
                      {questionsUI()}

                      <div>
                        <button onClick={addMoreQuestionField}>Add question</button>
                      </div>
                    </div>
                  </Grid>  
                      
            </Grid>           
           </Grid>
       </div>
  );
}
export default QuestionsTab
