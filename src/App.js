import React from 'react';
import Menu from './components/Menu';
import DadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain 
        videoTitle={DadosIniciais.categorias[0].videos[0].titulo}
        url={DadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front-end?"}
      />

      <Carousel 
        ignoreFirstVideo
        category={DadosIniciais.categorias[0]}
      />

      <Carousel 
        ignoreFirstVideo
        category={DadosIniciais.categorias[1]}
      />

      <Carousel 
        ignoreFirstVideo
        category={DadosIniciais.categorias[2]}
      />

      <Carousel 
        ignoreFirstVideo
        category={DadosIniciais.categorias[3]}
      />

      <Carousel 
        ignoreFirstVideo
        category={DadosIniciais.categorias[4]}
      />

      <Carousel 
        ignoreFirstVideo
        category={DadosIniciais.categorias[5]}
      />
      
    </div>
  );
}

export default App;
