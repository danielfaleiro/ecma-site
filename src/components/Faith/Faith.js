import React from 'react';
import pdf from './DECLARAÇÃO DE FÉ ECMA.pdf';
import './Faith.css';

const Faith = () => {
    return (
        <div className='hma lato color-default'>
            <div className='max-width faith-section center flex-column section-vpa'>
                <h1 className='color-ecma-gold'>Nossa Confessionalidade</h1>
                <p className='text'>
                Temos a <strong>Teologia Reformada</strong> como base de nossas vidas, que adere à fé, a prática 
                e às definições doutrinárias exemplificadas especialmente pela Bíblia, pelos 
                críticos das eras apostólicas e pós-apostólicas. Essa teologia sempre abraçou uma 
                rica vida espiritual e intelectual, produzindo algumas das melhores mentes dos 
                tempos clássicos e modernos. Nós praticamos dessa tradição duradoura. 
                Consequentemente, somos livres para discutir e viver nossa fé frente às outras 
                tendências religiosas, culturas e políticas. Entretanto, o ECMA acolhe 
                colaboradores, parceiros, pacientes, clientes e amigos de diversas origens, 
                respeitando suas tradições religiosas.  
                </p>
            </div>
            <div className='max-width faith-section center flex-column section-vpa'>
                <h1 className='color-ecma-gold'>Nossa Confissão de Fé</h1>
                <p className='text'>
                    Ser uma família cristã é ver o ser humano como uma criação Divina, onde as 
                    enfermidades é obra do mau e do mundo em que vivemos. Em nossa abordagem, Deus 
                    toma o lugar central, respeitando as individualidades e buscando o centro das 
                    necessidades de cada um a quem se dispõe a fazer parte do nosso trabalho. 
                </p>
                <a href={pdf} className='button white'>Leia Nossa Confissão de Fé</a>
            </div>
        </div>
    );
}

export default Faith;