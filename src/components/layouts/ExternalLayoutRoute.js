import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ExternalLayout from './ExternalLayout'

const ExternalLayoutRoute = ({component: Component, path, isHeaderPrincipal}) => {
  return(
    <Route exact path={path}>
      <ExternalLayout isHeaderPrincipal={isHeaderPrincipal} >
        <Component />
      </ExternalLayout>
    </Route>
  )
}

export default ExternalLayoutRoute