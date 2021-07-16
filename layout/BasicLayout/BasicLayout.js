import React from 'react';


import {Container} from "semantic-ui-react"  
  
import Header from '../../Components/Header/Header';


  const BasicLayout = (props) => {


    const {children} = props;


    return ( 

        <Container fluid className="basic-layout"> {/* ESTAS SON CLASES DE UI-SEMANTIC */}


            <Header />

            <Container className="content">


            {children} {/* TODO LO QUE PONGAMOS EN INDEX.JS SE VA A RENDERIZAR AQUI... */}



            </Container>

          


        </Container>



     );
}
 
export default BasicLayout;