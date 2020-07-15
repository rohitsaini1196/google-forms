import React from 'react';


function EditForm(props) {

    React.useEffect(() => {
        var formId = props.match.params.formId
        console.log(formId);
         
    },[props.match.params.formId]);


    return (
        <div> 
        <p>This is from edit from section</p>
        </div>
    );
}

export default EditForm;
