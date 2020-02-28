import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BreadcrumbsNav() {
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{padding:"0 30px", fontSize:"18px", color:"#000000"}}>
      <Link color="inherit" href="/" onClick={handleClick}>
        Teams
      </Link>
      {/* <Link color="inherit" href="/Favourited" onClick={handleClick}>
        Core
      </Link> */}
    </Breadcrumbs>
  );
}