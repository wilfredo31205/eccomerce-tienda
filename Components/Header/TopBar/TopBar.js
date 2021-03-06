
import React from 'react';


import { Container,  Grid, Image , Input } from 'semantic-ui-react'

import Link  from 'next/link'


 export default function TopBar() {
    return (
        
        <div className="top-bar" >

        <Container> 

        <Grid className="top-bar">


        <Grid.Column width={8} className="top-bar__left">


    

        <Logo />


        </Grid.Column>

        <Grid.Column width={8} className="top-bar__right">


        <Seach />



        </Grid.Column>


        </Grid>



        </Container>



        </div>




    );
}


function Logo(){

    return(

        <Link href="/">

        <a> 

        <Image  src="/logo.png" alt="logo" />

        </a>

        </Link>


    );

 }
 

function Seach(){


    return(

        <Input 

            id="seach-game"
            icon={{name:"search" }} 




        />


    )


}