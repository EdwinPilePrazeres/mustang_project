import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import Logo from '../../images/logo.png'
import Content from '../Content/Content';


const list_decades = [
    {
        id: '60',
        name: "60's",
        active: false,
    },
    {
        id: '70',
        name: "70's",
        active: false,
    },
    {
        id: '80',
        name: "80's",
        active: false,
    },
    {
        id: '90',
        name: "90's",
        active: false,
    },
    {
        id: '00',
        name: "00's",
        active: false,
    },
    {
        id: '10',
        name: "10's",
        active: false,
    },
    {
        id: '20',
        name: "20's",
        active: false,
    }
]

const Navbar = () => {
    const [decades, setDecades] = React.useState(list_decades);

    const handleGetId = (id) => {
        console.log(id);
        const newList = decades.map((item) => {
            if(item.id === id) {
                const updatedItem = {
                    ...item,
                    active: !item.active
                };

                return updatedItem;
            }
            return item;
        });

        setDecades(newList);
        return <Content list={decades} onhandleGetId={handleGetId} />
    }




    return (
            <header className="header">
                <Link className='Logo'><img src={Logo} alt='' /></Link>
                <ul>
                    {list_decades.map(item => (
                        <li key={item.id}><Link onClick={() => handleGetId(item.id)}>{item.name}</Link>
                        
                        </li>
                        
                    ))}
                    {/* <li><Link >60's</Link></li>
                    <li><Link >70's</Link></li>
                    <li><Link >80's</Link></li>
                    <li><Link >90's</Link></li>
                    <li><Link >00's</Link></li>
                    <li><Link >10's</Link></li>
                    <li><Link >20's</Link></li> */}
                </ul>
            </header>
            
    )
}

export default Navbar
