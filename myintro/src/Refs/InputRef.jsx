import React from 'react'

export const InputRef = React.forwardRef((props, ref) => {
        return (
            <>
                <input type="text" onBlur={props.onBlurHandle} name="" id="" ref={ref}/>
            </>
          );
});

