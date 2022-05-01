import React from 'react';
import {Checkbox} from './components/checkbox'
import './index.css';

export const DDD = () => {
    return (
        <>
        <div>
            <h1 className='esbuild'>zjw aaeaqlloaa, Esasdbuild!</h1>
            <h1 className='react'>Heldsalo, React!</h1>
        </div>
        <div>
        <Checkbox></Checkbox>
        <Checkbox checked={true}></Checkbox>
        <Checkbox indeterminate={true}></Checkbox>
      </div>
        </>
    );
};
