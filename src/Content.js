import React from 'react'
//import { useState } from 'react';

import ItemsList from './ItemsList';

const Content = ({items,handleCheck,handleDelete}) => {
    
    

  return (
    <main>
        {(items.length) ? (
            <ItemsList 
                items = {items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        ) : (
            <p style={{color: "red", margin: "5rem",fontStyle:"bold"}}>Your List is empty</p>
        )}
    </main>
  )
}

export default Content