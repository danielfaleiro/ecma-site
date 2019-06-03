import React from 'react';
import './404.css';
import links from '../../links';
import AnchorButton from '../AnchorButton/AnchorButton';

const NotFoundPage = () => {

    return (
        <div className='top-page section-vpa center flex-column hm-default notFound-container'>
            <h1 className='tc color-ecma-gold notFound-h1'>404</h1>
            <h2 className='tc color-ecma-gold notFound-h2'>Página não encontrada.</h2>
            <div className='center'>
                <AnchorButton className='hm-default' to={links.home} text={"Ir Para Página Inicial"} />
            </div>
            
        </div>
    );
}

export default NotFoundPage;