import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import App from "./App";
import { Navigate } from "react-router-dom";
import './App.css';

function MainPage() {
    return (
        <div className="About">
            <h1>Obselite</h1>
            <h3>Who are we?</h3>
            <p>
               Dolore commodo ut ad sint sit. Culpa magna quis ad velit consequat ut qui ex id pariatur incididunt excepteur. Qui sunt amet non est non officia proident.

               Id sunt aliqua occaecat minim labore ea dolor et. Culpa officia id est non incididunt. Ipsum cupidatat minim fugiat amet laboris nisi occaecat eiusmod id. Officia aute proident voluptate elit. Reprehenderit cillum mollit voluptate sunt minim. Nostrud minim commodo cupidatat aliquip do commodo proident do sint deserunt velit. Irure commodo Lorem labore cillum minim duis officia amet veniam fugiat deserunt aute.

                Voluptate dolor cupidatat nulla esse consectetur cupidatat ad qui ex commodo elit cillum do. Eiusmod exercitation aute ea et ex nostrud quis pariatur nulla veniam consectetur. Do ut ut anim irure consequat cillum minim sunt consectetur ipsum aliqua. Irure sunt qui nulla officia elit proident esse reprehenderit sint sunt est aute dolor. Eu Lorem consectetur eiusmod commodo exercitation nostrud qui consectetur veniam. Pariatur minim exercitation aute aliqua velit commodo minim ipsum.
                <br/>
                Sunt labore proident ullamco sunt velit amet minim. Aliqua quis pariatur fugiat ad nisi laboris veniam laboris nostrud elit minim magna mollit laborum. Ad dolor fugiat amet cillum consequat consectetur dolore mollit cillum sit. Qui voluptate aliqua excepteur ullamco ea ullamco culpa ad ullamco laboris duis. Sunt non sunt ullamco duis. Do irure dolore anim nostrud cupidatat.
            </p>
            <h3>Why are we doing this?</h3>
            <p>
               Aute adipisicing excepteur laborum aliqua sit aliquip do Lorem magna dolore eiusmod commodo. Enim dolor fugiat esse culpa laborum culpa. Lorem adipisicing eu velit elit irure id consectetur.
               Cillum reprehenderit incididunt dolor elit non adipisicing irure consectetur consectetur aute adipisicing sit. Cillum ipsum non id exercitation aute dolor id. Ea sit esse culpa consequat eiusmod. Commodo anim minim id in consectetur adipisicing duis duis non enim. Nulla cupidatat voluptate consectetur nisi. Culpa consequat eu dolor nulla esse est consectetur id. Dolore quis cupidatat irure officia in irure et dolore tempor.
                <br/>
                Laboris Lorem fugiat dolor consectetur. Officia est aute eiusmod cupidatat voluptate ad. Irure enim nulla velit esse nulla. Non minim fugiat incididunt aliquip eu cillum elit eiusmod et consequat. Do elit eu enim magna mollit occaecat incididunt incididunt deserunt consequat occaecat veniam. Esse sit consectetur magna irure eiusmod esse laborum adipisicing laborum voluptate.
                <br/>
                Nostrud qui dolor dolor consectetur excepteur do ut sunt in. Nisi amet mollit nulla sit magna consequat eiusmod sint labore duis velit. Id tempor dolore esse ullamco quis reprehenderit voluptate. Consectetur cillum sunt nostrud ex cupidatat minim aliquip. Et consequat enim deserunt minim eu laborum nisi velit tempor velit amet esse amet. Dolore dolor adipisicing nulla dolor non cillum cillum dolor.
            </p>
        </div>
    );
}

function Home() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/app" element={<App />} />
                <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
        </div>
    );
}

export default Home;
