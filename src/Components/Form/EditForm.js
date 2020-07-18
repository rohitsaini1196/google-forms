import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PaletteIcon from '@material-ui/icons/Palette';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send';

import StarBorderIcon from '@material-ui/icons/StarBorder';

import ViewListIcon from '@material-ui/icons/ViewList';

import QuestionsTab from './QuestionsTab';
import ResponseTab from './ResponseTab';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolbar: {
      minHeight: 128,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      //paddingBottom: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      alignSelf: 'flex-end',
      justifySelf: 'center'
    },
  }));



function EditForm(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


    React.useEffect(() => {
        var formId = props.match.params.formId
        console.log(formId);
         
    },[props.match.params.formId]);


    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static" style={{backgroundColor: 'white'}} elevation={2}>
                    <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        aria-label="Rohit Saini's form"
                        style={{color: '#140078'}}
                        
                    >
                        <ViewListIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap style={{marginTop: '8.5px', color:'black'}}>
                        Untitled Form
                    </Typography>
                    {/* <IconButton
                        aria-label="Rohit Saini's form"
                        style={{marginLeft:'5px'}} 
                    >
                        <FolderOpenIcon />
                    </IconButton> */}

                    <IconButton
                        aria-label="Rohit Saini's form" 
                    >
                        <StarBorderIcon />
                    </IconButton>
                    

                    <Tabs
                    className={classes.title}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Questions" />
                    <Tab label="Responses" />
                </Tabs>
                    <IconButton aria-label="search">
                        <SendIcon />
                    </IconButton>
                
                    <IconButton aria-label="search">
                        <PaletteIcon />
                    </IconButton>
                    <IconButton aria-label="search">
                        <VisibilityIcon />
                    </IconButton>
                    <IconButton aria-label="search">
                        <SettingsIcon />
                    </IconButton>
                    
                    <IconButton aria-label="display more actions" edge="end">
                        <MoreIcon />
                    </IconButton>
                    <IconButton aria-label="display more actions" edge="end">
                        <AccountCircleIcon />
                    </IconButton>
                    </Toolbar>
                </AppBar>
            </div>

        <div>
            <TabPanel value={value} index={0}>
                <QuestionsTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ResponseTab />
            </TabPanel>
        </div>
        </div>
    );
}

export default EditForm;

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };


  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
