import React, { useState } from 'react';

const PageContext = React.createContext({});

const PageContextProvider = (props) => {
  const [state, setState] = useState({});

  return (
    <PageContext.Provider value={[state, setState]}>
      {props.children}
    </PageContext.Provider>
  );
};

export { PageContext, PageContextProvider };