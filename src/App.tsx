import { Heading } from './components/Heading';

import './styles/theme.css'
import './styles/global.css'


export function App (){

    return (
        <>
            <div>
                <Heading attr={123}>Olá mundo!</Heading>
                <p>
                    lorem ipsum dolor sit...
                </p>
            </div>
        </>
    );
}