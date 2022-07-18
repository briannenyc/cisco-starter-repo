//Create a banner component at the top of the page which displays the site’s title.

import React from 'react';

const Banner = () => {

return (<header style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", width:"100%", height:"5vw" }}>
<p>Sextant</p>

<a style={{ color:"grey", marginBottom:"0px"}}href="https://github.com/briannenyc/cisco-starter-repo">Click here for github repo</a>
</header>


)}






export default Banner;