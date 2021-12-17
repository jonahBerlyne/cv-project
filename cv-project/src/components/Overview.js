import React from 'react';

const Overview = props => {

 const { cvs } = props;

 return (
  <div>
   {cvs.map((cv) => {
     return <div key={cv.id}> 
       <div>
         <p>{`Name: ${cv.name}`}</p>
       </div>
       <div>
         <p>{`Email: ${cv.email}`}</p>
       </div>
       <div>
         <p>{`Phone: ${cv.phone}`}</p>
       </div>
       <br/>
       <br/>
       <div>
         <p>{`College: ${cv.college}`}</p>
       </div>
       <div>
         <p>{`Degree: ${cv.degree}`}</p>
       </div>
       <div>
         <p>{`Subject: ${cv.subject}`}</p>
       </div>
       <div>
         <p>{`Graduated: ${cv.graduated}`}</p>
       </div>
       <br/>
       <br/>
       <div>
         <p>{`Company: ${cv.company}`}</p>
       </div>
       <div>
         <p>{`Position: ${cv.position}`}</p>
       </div>
       <div>
         <p>{`Years: ${cv.yearFrom}-${cv.yearTill}`}</p>
       </div>
       <div>
         <p>Duties:</p>
         <p>{`${cv.duties}`}</p>
       </div>
       <br/>
       <br/>
    </div>;
   })}
  </div>
 );

};

export default Overview;