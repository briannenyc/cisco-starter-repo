//Create a banner component at the top of the page which displays the site’s title.

import React from 'react';

const Banner = () => {

return (<header style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", width:"100%", height:"5vw" }}>
<p>Sextant</p>

<p style={{ color:"grey"}}>Cisco</p>
</header>


)}






export default Banner;