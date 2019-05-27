import React from 'react';
import './404.css';
import links from '../../links';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {

    return (
        <div className='top-page section-vpa center flex-column hma notFound-container'>
            <h1 className='tc color-ecma-gold notFound-h1'>404</h1>
            <h2 className='tc color-ecma-gold notFound-h2'>Página não encontrada.</h2>
            <div className='center'>
                <Link to={links.home} className='button'>Ir Para Página Inicial</Link>
            </div>
            
        </div>
    );
}

export default NotFoundPage;