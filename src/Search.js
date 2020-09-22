import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import React from 'react';
import './Search.css';

function Search () {
    return (
        <div className='search'>
            <div className='search_input'>
                <SearchIcon className='search_inputIcon'/>
                <input />
                <MicIcon/>                
            </div>

            <div className='search_buttons'>
                <Button>Google Search</Button>
                <Button variant='outline'>I'm Feeling Lucky</Button>
            </div>

        </div>
    )
}

export default Search;