import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'


const Message = ({ variant, children }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <h1>Please Refresh Page in a moment.</h1>;
}



export default Message
  //   return (
  //     <Alert variant={variant}>
  //       {/* {children} */}
  //       <h1>Different stuffs
  //       </h1>
  //     </Alert>
  //   )
  // }