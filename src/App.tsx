import { Heading } from './components/Heading';

import './styles/theme.css'
import './styles/global.css'
import { TimerIcon } from 'lucide-react';


export function App () {

    return (
        <>
            <div>
                <Heading>
                    Olá mundo! 
                    <button>
                        <TimerIcon/>
                    </button>
                </Heading>
                <p>
                    lorem ipsum dolor sit...
                </p>
            </div>
        </>
    );
} 