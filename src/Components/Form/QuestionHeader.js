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
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import CloseIcon from '@material-ui/icons/Close';


function QuestionsHeader() {

  const [questions, setQuestions]= React.useState([{questionText: "Question", options : [{optionText: "option 1"}], open: false}]);
  

  function addMoreQuestionField(){
      expandCloseAll(); //I AM GOD
      setQuestions(questions=> [...questions, {questionText: "Question", options : [{optionText: "option 1"}], open: true}]);
  }

  function addOption(i){
    var optionsOfQuestion = [...questions];
    if(optionsOfQuestion[i].options.length < 5){
      optionsOfQuestion[i].options.push({optionText: "option gg"})
    } else{
      console.log("Max  5 options ");  
    }
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
                      <Draggable key={i} draggableId={i} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                             <div style={{marginBottom: "9px"}}>
          
          <Accordion onChange={()=>{handleExpand(i)}} expanded={questions[i].open}>
            <AccordionSummary            
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
            </AccordionSummary>


            <AccordionDetails>

            <div style={{display: 'flex',flexDirection:'column', alignItems:'flex-start', marginLeft: '15px', marginTop:'-15px'}}>
              
              <Typography variant="subtitle1">Form description {i+1}</Typography>
              
              <div style={{width: '100%'}}>
              {ques.options.map((op, j)=>(
               <div key={j} style={{display:'flex', flexDirection:'row', marginLeft:'-13px'}}>

                  <Radio disabled /> 
                  <TextField fullWidth={true} placeholder="Option text" style={{marginTop: '5px'}} />  
                  
                  <IconButton aria-label="delete">
                    <CropOriginalIcon />
                  </IconButton>

                  <IconButton aria-label="delete" onClick={()=>{removeOption(i, j)}}>
                    <CloseIcon />
                  </IconButton>

               </div>
                
              ))}  
              </div>  
              
              
              <FormControlLabel disabled control={<Radio />} label={
                <Button size="small" onClick={()=>{addOption(i)}} style={{textTransform: 'none', marginLeft:"-5px"}}>
                  Add Option
                </Button>
              } /> 

             

                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
            </div>
            
            </AccordionDetails>
          </Accordion>
        </div>
                           
                          </div>
                        )}
                      </Draggable>
         
      </div>
     )
    )
  }


  return (
       
          <div>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {/* {items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}

                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))} */}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            {questionsUI()}
            <div>
              <button onClick={addMoreQuestionField}>Add question</button>
            </div>
            
          </div>
       
  );
}
export default QuestionsHeader
