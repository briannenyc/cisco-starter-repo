import React, { useEffect, useState } from 'react';
import Exhibit from './Exhibit';

const url = 'https://api.ipify.org';



function UserAddress(props) {
    const [addresses, setAddresses] = useState ([]);
    const { fourApi , sixApi } = props;

    useEffect(() => {
        async function grabApis() {
            const response = await fetch(url);
            const json = await response.json();
        
            return json.data;
            
            
        }
        grabApis();
        setAddresses(addresses);
    }, [addresses]);

    console.log(addresses)

return (
    <div>
        {addresses.map((address) => {
            return (
                <Exhibit
                key = {address}
                />
            )
        })
        
        
        }
        
    

    </div>
)




};

export default UserAddress;
