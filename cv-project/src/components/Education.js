import React from 'react';

function Education (props) {

  const {cv, onChange} = props;

  return (
         <div className="Education">
          <label>College: </label>
          <input type="text" name="college" value={cv.college} onChange={onChange}/>
          <br/>
          <br/>
          <label>Degree: </label>
          <input type="text" name="degree" value={cv.degree} onChange={onChange}/>
          <br/>
          <br/>
          <label>Subject: </label>
          <input type="text" name="subject" value={cv.subject} onChange={onChange}/>
          <br/>
          <br/>
          <label>Graduated: </label>
          <input type="date" name="graduated" value={cv.graduated} onChange={onChange}/>
          <br/>
          <br/>
         </div>
  );
}
 
export default Education;