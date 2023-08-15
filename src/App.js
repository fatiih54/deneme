import './App.css';
import {Course} from "./course";
import karakalem from './images/10.jpg'
import karakalem2 from './images/karakalem2.jpg'
import karakalem3 from './images/karakalem3.jpg'
import karakalem4 from './images/karakalem4.jpg'
import 'bulma/css/bulma.css';

import Navbar from './components/Navbar.js'
import {useState} from 'react'
import {findAllByDisplayValue} from "@testing-library/react";
import {renderIntoDocument} from "react-dom/test-utils";



function App() {
    return(
        <div className="App">
            <section className="hero is-warning">
                <div className="hero-body">
                    <p className="title">
                        GÖRSELLER
                    </p>
                </div>
            </section>
            <div className="Container">
                <section className="section">
                    <div className="columns">
                        <div className="colomn">
                            <Course
                                image ={karakalem3}
                                title = "TOPÇULAR" description="Gözleme dayalı olan anlatım türüdür. Yazar bolca niteleme sıfatları kullanarak okuyucuya gördüklerini ve düşündüklerini anlatmaya ve okurun kafasında canlandırmaya çalışır. Betimlemeye tasvirleme adı da verilir ve durağan bir yapı söz konusudur. Betimlemede varlıkların şekil, renk, boyut gibi ayırt edici özellikleri verilir. Betimlemede yazar gördüklerine kişisel yorumlarını katarsa öznel betimleme denir. Yazar gördüklerini aynen aktarıp ekleme yapmayıp kişisel görüşten kaçınırsa buna nesnel betimleme denir."/>

                        </div>
                        <div className="colomn">
                            <Course
                                image={karakalem3}
                                title="BASKETÇİLER" description="Gözleme dayalı olan anlatım türüdür. Yazar bolca niteleme sıfatları kullanarak okuyucuya gördüklerini ve düşündüklerini anlatmaya ve okurun kafasında canlandırmaya çalışır. Betimlemeye tasvirleme adı da verilir ve durağan bir yapı söz konusudur. Betimlemede varlıkların şekil, renk, boyut gibi ayırt edici özellikleri verilir. Betimlemede yazar gördüklerine kişisel yorumlarını katarsa öznel betimleme denir. Yazar gördüklerini aynen aktarıp ekleme yapmayıp kişisel görüşten kaçınırsa buna nesnel betimleme denir."/>

                        </div>
                        <div className="colomn">
                            <Course
                                image ={karakalem3}
                                title = "VOLEYBOLCULAR" description="Gözleme dayalı olan anlatım türüdür. Yazar bolca niteleme sıfatları kullanarak okuyucuya gördüklerini ve düşündüklerini anlatmaya ve okurun kafasında canlandırmaya çalışır. Betimlemeye tasvirleme adı da verilir ve durağan bir yapı söz konusudur. Betimlemede varlıkların şekil, renk, boyut gibi ayırt edici özellikleri verilir. Betimlemede yazar gördüklerine kişisel yorumlarını katarsa öznel betimleme denir. Yazar gördüklerini aynen aktarıp ekleme yapmayıp kişisel görüşten kaçınırsa buna nesnel betimleme denir."/>

                        </div>
                        <div className="colomn">
                            <Course
                                image ={karakalem3}
                                title = "YÜZÜCÜLER" description="Gözleme dayalı olan anlatım türüdür. Yazar bolca niteleme sıfatları kullanarak okuyucuya gördüklerini ve düşündüklerini anlatmaya ve okurun kafasında canlandırmaya çalışır. Betimlemeye tasvirleme adı da verilir ve durağan bir yapı söz konusudur. Betimlemede varlıkların şekil, renk, boyut gibi ayırt edici özellikleri verilir. Betimlemede yazar gördüklerine kişisel yorumlarını katarsa öznel betimleme denir. Yazar gördüklerini aynen aktarıp ekleme yapmayıp kişisel görüşten kaçınırsa buna nesnel betimleme denir."/>

                        </div>

                    </div>
                </section>


            </div>




        </div>
    );
}

export default App;
