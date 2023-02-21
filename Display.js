import './Display.css';

import darkbg1 from '../Images/darkbg1.png' 
import darkbg2 from '../Images/darkbg2.png' 
import dash from '../Images/dash.png' 
import dashboard from '../Images/dashboard.png' 
import poss from '../Images/poss.png' 
import bg2 from '../Images/bg2.png' 
import pos from '../Images/pos.png' 
import bg1 from '../Images/bg1.png' 
import bg_dark from '../Images/bg_dark.png' 
import accounts from '../Images/accounts.png' 
import bg2_dark from '../Images/bg2_dark.png' 
import acc from '../Images/acc.png' 
import quo from '../Images/quo.png' 
import Reports from '../Images/Reports.png' 
import Reports1 from '../Images/Reports1.png' 
import Accounting from '../Images/Accounting.png' 
import Accounting1 from '../Images/Accounting1.png' 
import customers from '../Images/customers.png' 
import Rectangle1 from '../Images/Rectangle1.png' 
import Suppliers from '../Images/Suppliers.png'
import Suppliers1 from '../Images/Suppliers1.png' 
import Inventory from '../Images/Inventory.png'
import Inventory1 from '../Images/Inventory1.png'
import apps from '../Images/apps.png'
import apps1 from '../Images/apps1.png'
import Settings from '../Images/Settings.png'
import Settings1 from '../Images/Settings1.png'
import csPortal from '../Images/csPortal.png'
import csPortal1 from '../Images/csPortal1.png'
// import darkbg2 from '../Images/darkbg2.png'
import React, {useState, useEffect} from 'react';
 

function Display() 
{
    return (
        
    <>
        {/* <h1>7765</h1> */}
        {/* <img src={logo} alt="logo" /> */}

        {/* <li class="menu-active"><a class="navbar-brand" href="#">
            <figure>
                <img src={darkbg2}  alt="logo"/>
                <figcaption>COACHMAN'S CROSSING</figcaption>
            </figure>
        </a></li> */}

        {/* <div class="container"> */}
            {/* <div class="row"> */}
                {/* <div class="col-md-12"> */}

                    
                    <div allign="center">
                        <div class="col-md-3">
                            <img  class="image1" src={Rectangle1} />
                            <img class="image2" src={dashboard}/>
                            <img class="image3" src={darkbg1}/>
                            <img class="image4" src={dash}/>
                        </div>

                        <div class="col-md-3">
                            <img class="image5" src={bg1} />
                            <img class="image6" src={pos}/>
                            <br/><img class="image7" src={bg2} />
                            <br/><img class="image8" src={poss} />
                        </div>

                        <div class="col-md-3">
                            <img class="image9" src={bg_dark}/>
                            <img class="image10" src={Reports}/>
                            <img class="image11" src={darkbg1}/>
                            <img class="image12" src={Reports1}/> 
                        </div>

                        <div class="col-md-3">
                            <img class="image13" src={bg1}/>
                            <img class="image14" src={Accounting}/>
                            <img class="image15" src={bg2} />
                            <img class="image16" src={Accounting1}/>
                        </div>

                        <div class="col-md-3">
                            <img class="image17" src={bg_dark}/>
                            <img class="image18" src={accounts}/>
                            <img class="image19" src={darkbg1}/>
                            <img class="image20" src={customers}/>
                        </div>

                        <div class="col-md-3">
                            <img class="image21" src={bg1}/>
                            <img class="image22" src={Suppliers}/>
                            <img class="image23" src={bg2} />
                            <img class="image24" src={Suppliers1} />
                        </div>
                        
                        <div class="col-md-3">
                            <img class="image25" src={bg_dark}/>
                            <img class="image26" src={Inventory}/>
                            <img class="image27" src={darkbg1}/>
                            <img class="image28" src={Inventory1}/>
                        </div>

                        <div class="col-md-3">
                            <img class="image29" src={bg1}/>
                            <img class="image30" src={apps}/>
                            <img class="image31" src={bg2} />
                            <img class="image32" src={apps1}/>
                        </div>

                        <div class="col-md-3">
                            <img class="image33" src={bg_dark}/>
                            <img class="image34" src={Settings}/>
                            <img class="image35" src={darkbg1}/>
                            <img class="image36" src={Settings1}/>
                        </div>

                        <div class="col-md-3">
                            <img class="image37" src={bg1}/>
                            <img class="image38" src={csPortal}/>
                            <img class="image39" src={bg2} />
                            <img class="image40" src={csPortal1}/>
                        </div>
                    </div>
                    

    </>
      
      )
  }

 
export default Display;


