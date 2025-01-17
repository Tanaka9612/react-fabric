import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Componets/Navbar";
import App from "./App";
import { Navigate } from "react-router-dom";
import './CSS/About.css';
import FAQs from "./Componets/FAQs";
import Footer from "./Componets/Footer";

function MainPage() {
    return (
        <div className="About">
            <h1 id="companyName" className="btn-shine">Obselite</h1>
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
            <h3>
                What we are hoping to achieve
            </h3>
            <p>
                Veniam proident reprehenderit aliquip aliqua dolore veniam deserunt sunt. Elit sit nostrud duis est ad. Ad deserunt cillum fugiat nostrud amet labore aliquip mollit dolore adipisicing non amet duis aliqua.
                Culpa ipsum sint dolor aliqua. Consequat occaecat nisi elit culpa Lorem Lorem pariatur. Fugiat excepteur laborum nulla in. Officia tempor in incididunt anim nisi est laborum veniam sit ipsum Lorem. Officia officia aliquip dolore aute. Mollit quis laboris occaecat anim consectetur.

Aliquip ipsum velit sint fugiat incididunt irure id dolor excepteur aute id. Occaecat aliquip ea fugiat ea cillum fugiat pariatur ad nulla Lorem mollit. Eiusmod enim cupidatat aliquip non mollit labore ullamco. Amet occaecat ipsum ex nisi officia cillum eu magna est duis enim aute.

Excepteur et dolore Lorem exercitation eiusmod voluptate ea nulla qui voluptate nostrud consequat duis occaecat. Qui irure nostrud irure eiusmod labore culpa voluptate tempor commodo esse. Sit ipsum tempor duis qui laboris commodo cupidatat id deserunt ut ipsum magna.

Elit ut Lorem cupidatat nostrud duis ex commodo occaecat proident dolor consequat tempor. Culpa esse commodo laborum sint ex aliquip quis velit. Qui Lorem veniam velit ad deserunt sunt amet exercitation esse culpa amet ullamco duis incididunt. Excepteur reprehenderit excepteur eiusmod exercitation consectetur eiusmod eu mollit elit ea eu labore ipsum.
            </p>
            <h3>
                Our Projects
            </h3>
            <p>
                Cillum magna exercitation sit voluptate laboris sint labore aliqua eu est quis. Amet dolor cillum nostrud exercitation ad. Incididunt ea ea et cillum aliquip id.

Consequat consectetur amet consectetur in non pariatur pariatur incididunt cupidatat amet ex deserunt eiusmod. Esse nisi est Lorem elit culpa commodo est sunt. Incididunt ea excepteur proident nulla reprehenderit laborum et eiusmod cillum enim adipisicing. Ut elit id est minim dolor et ipsum mollit pariatur proident ut. Eu consequat in adipisicing nisi exercitation adipisicing ex qui dolor est aute. Cupidatat quis velit laboris eu do officia exercitation ea.

In ut incididunt eiusmod qui duis laboris pariatur consequat proident anim exercitation cillum nostrud cupidatat. Ad ad eiusmod enim amet tempor velit ullamco non sunt pariatur. Culpa deserunt ipsum sint est esse nulla culpa enim qui laboris ullamco.

Laborum duis laborum aliqua veniam aliqua. Enim irure elit enim et eu magna reprehenderit est sunt proident consectetur amet. Qui pariatur minim ex ex aute aute anim tempor. Exercitation occaecat sit eiusmod magna tempor elit sit sint officia ex eu ad. Duis elit dolor pariatur tempor cupidatat cupidatat anim proident. Irure excepteur sint nisi fugiat deserunt exercitation laborum duis aute voluptate magna duis dolore incididunt. Nisi ipsum veniam fugiat aliquip nulla sit amet aliqua in.
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
                <Route path="/faqs" element={<FAQs/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default Home;
