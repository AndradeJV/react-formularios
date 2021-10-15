import React from 'react';
import { useField } from 'formik';


const Campo = props => {
  
  const [field, meta] = useField(props);
  
  return (
    <>
      <input
        {...field}
        {...props}      
      />
      {meta.error && meta.touched ? ( '' ) : null}
    </>
  );
}


export default Campo;