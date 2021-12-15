import React from 'react';

class Info extends React.Component {

 render() { 

  // const {myProp} = this.props;
  const {cv, onChange} = this.props;

  return <div className="Info">
     {/* <div>{myProp}</div> */}
     <label>Name: </label>
     <input type="text" name="name" value={cv.name} onChange={onChange}/>
     <br/>
     <br/>
     <label>E-mail: </label>
     <input type="email" name="email" value={cv.email} onChange={onChange}/>
     <br/>
     <br/>
     <label>Phone Number: </label>
     <input type="tel" name="phone" value={cv.phone} onChange={onChange}/>
     <br/>
     <br/>
  </div>;
 }
}
 
export default Info;