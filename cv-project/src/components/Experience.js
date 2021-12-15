import React from 'react';

class Experience extends React.Component {

 render() {

  const {cv, onChange} = this.props;

  return <div className="Experience">
          <label>Company: </label>
          <input type="text" name="company" value={cv.company} onChange={onChange}/>
          <br/>
          <br/>
          <label>Position: </label>
          <input type="text" name="position" value={cv.position} onChange={onChange}/>
          <br/>
          <br/>
          <label>Years: </label>
          <input type="number" min="1950" max="2021" placeholder="From" name="yearFrom" value={cv.yearFrom} onChange={onChange}/>
          <input type="number" min="1950" max="2021" placeholder="Until" name="yearTill" value={cv.yearTill} onChange={onChange}/>
          <br/>
          <br/>
          <label>Duties: </label>
          <br/>
          <textarea type="text" name="duties" rows="4" cols="50" value={cv.duties} onChange={onChange}/>
          <br/> 
          <br/>
         </div>;
 }
}
 
export default Experience;