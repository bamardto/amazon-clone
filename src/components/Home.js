import React from 'react'
import { Product } from './Product'

export const Home = () => {
  return (
    <div
        className="home__main">
            <div 
                className="home__container">
                <img className="img__home-bg" src="bg-home.png" alt="" />
                <div className="home__row">
                    <Product 
                        id="2343253"
                        title="title"
                        price="40.000"
                        image="producttest.png"
                        rating={3}/>
                    <Product 
                        id="2867856"
                        title="loremksldmfdlksafnlsdnflksdanfl sdfasdl fsdklafmlañsdf sadñlfkmsda fsñdaknflsda fsldf lsd fsakd "
                        price="40.000"
                        image="producttest.png"
                        rating={4}/>
                    
                </div>
                <div className="home__row">
                    <Product 
                        id="2867856"
                        title="loremksldmfdlksafnlsdnflksdanfl sdfasdl fsdklafmlañsdf sadñlfkmsda fsñdaknflsda fsldf lsd fsakd "
                        price="40.000"
                        image="producttest.png"
                        rating={4}/>
                    <Product 
                        id="2867856"
                        title="loremksldmfdlksafnlsdnflksdanfl sdfasdl fsdklafmlañsdf sadñlfkmsda fsñdaknflsda fsldf lsd fsakd "
                        price="40.000"
                        image="producttest.png"
                        rating={1}/>
                    <Product 
                        id="2867856"
                        title="loremksldmfdlksafnlsdnflksdanfl sdfasdl fsdklafmlañsdf sadñlfkmsda fsñdaknflsda fsldf lsd fsakd "
                        price="40.000"
                        image="producttest.png"
                        rating={5}/>
                    
                </div>
                <div className="home__row">
                <Product 
                        id="2867856"
                        title="loremksldmfdlksafnlsdnflksdanfl sdfasdl fsdklafmlañsdf sadñlfkmsda fsñdaknflsda fsldf lsd fsakd "
                        price="40.000"
                        image="producttest.png"
                        rating={3}/>
                </div>
            </div>
    </div>
  )
}
