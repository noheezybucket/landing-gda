import React from "react";
import Header from "./Header";

import ordinateur from "../assets/ordinateur.png";
import homme from "../assets/homme.png";
import femme from "../assets/femme.png";

import wave from "../assets/wave.svg";
import dotted from "../assets/dotted-line.svg";
import dotted2 from "../assets/dotted-line-2.svg";
import waveband from "../assets/wave-band.png";

import megaphone from "../assets/megaphone.png";
import hourglass from "../assets/hourglass.png";
import brush from "../assets/paint-brush.png";
import archery from "../assets/archery.png";
import hat from "../assets/degree-hat.png";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";

const Accueil = () => {
  return (
    <div>
      <Header />
      <main className="">
        <section
          className="flex h-auto bg-no-repeat pl-10"
          style={{ backgroundImage: `url(${wave})` }}
        >
          <div className="uppercase  w-7/12">
            <h1 className="font-bold text-4xl w-11/12 leading-normal -mt-14 mb-6">
              Soigner l'image des <br />
              entreprises sénégalaises sur
              <br /> le web
            </h1>
            <p className="text-2xl mb-12">
              NOUS AIDONS votre ENTREPRISE À ACQUÉRIR UNE MEILLEURE VISIBILITÉ
              ET À SOIGNER SA COMMUNICATION SUR interNET
              <br /> grace à un site web moderne adapté à votre cible.
            </p>
            <div className="flex items-center">
              <button className="bg-primary text-white font-bold px-6 py-3 rounded-xl text-2xl hover:bg-secondary duration-200">
                CONTACTEZ-NOUS
              </button>
            </div>
          </div>
          <div className="relative bottom-8 left-10">
            <img src={ordinateur} alt="ordinateur" />
          </div>
        </section>

        <section className="bg-gradient-to-b from-gradient1 to-gradient2 h-auto px-10 pt-20">
          <div className="flex justify-between">
            <div className="flex">
              <span className="h-20 bg-barre p-0.5 mr-4"></span>
              <h2 className="font-second font-bold text-4xl text-white">
                GALSEN DIGITAL
                <br /> AGENCY
              </h2>
            </div>
            <div className="flex flex-col">
              <h2 className="font-first text-6xl text-right text-white leading-tight">
                L’ AGENCE DIGITALE CRÉATIVE
                <br /> ET CENTRÉE CLIENT
              </h2>
              <span className="w-48 h-1 bg-barre mt-2 p-0.5 self-end"></span>
            </div>
          </div>

          <div className="flex mt-10 justify-between mt-20">
            <div className="max-w-xl relative">
              <img src={homme} alt="old man struggling with his computer" />
              <p className="w-full text-4xl font-bold absolute bottom-0 text-white text-center mb-10">
                Vous souhaitez gagner <br /> en{" "}
                <span className="text-barre">visibilité</span> sur le web ?
              </p>
            </div>
            <div className="max-w-xl relative">
              <img src={femme} alt="happy business woman" />
              <p className="w-full text-4xl font-bold absolute bottom-0 text-white text-center mb-10">
                Bénéficiez d’un <span className="text-secondary">site web</span>{" "}
                <br />
                adapté à vos besoins !
              </p>
            </div>
          </div>
        </section>

        <section className="pt-20 flex items-center justify-center">
          <img src={dotted} alt="dotted-line" className="relative top-14" />
          <h2 className="font-second text-5xl text-center px-5">
            IL VOUS PERMETTRA EGALEMENT
          </h2>
          <img src={dotted2} alt="dotted line" className="relative bottom-16" />
        </section>

        <section className="flex justify-between px-10 mt-16  pb-20">
          <div className="bg-primary text-white max-w-maxwidth p-4 rounded-xl drop-shadow-2xl">
            <div className="flex items-center">
              <h3 className="text-lg uppercase pb-7">
                D’avoir un <span className="text-tertiary">support</span> de{" "}
                <span className="text-tertiary">communication</span> 24h/24 !
              </h3>
              <img src={megaphone} alt="megaphone" className="self-start" />
            </div>
            <p>
              Contrairement à vous, votre site internet sera disponible tout le{" "}
              <br />
              temps pour vos clients.
            </p>
          </div>

          <div className="bg-primary text-white max-w-maxwidth p-4 rounded-xl">
            <div className="flex items-center">
              <h3 className="text-lg uppercase pb-7">
                DE GAGNER ÉNORMÉMENT DE{" "}
                <span className="text-tertiary">TEMPS</span> !
              </h3>
              <img src={hourglass} alt="hourglass" className="self-start" />
            </div>
            <p>
              Votre site internet vous permettra d’informatiser vos tâches
              manuelles en les automatisant !
            </p>
          </div>

          <div className="bg-primary text-white max-w-maxwidth p-4 rounded-xl">
            <div className="flex items-center">
              <h3 className="text-lg uppercase pb-7">
                DE VOUS OUVRIR À DE NOUVELLES{" "}
                <span className="text-tertiary">PERSPECTIVES</span> !
              </h3>
              <img src={megaphone} alt="megaphone" className="self-start" />
            </div>
            <p>
              Quoi de mieux qu’internet et l’infinité du web pour s’ouvrir à de
              nouveaux marchés ?
            </p>
          </div>
        </section>

        <section
          className="bg-no-repeat bg-cover flex items-center flex-col py-20 mb-24"
          style={{ backgroundImage: `url(${waveband})` }}
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-second">
            NOUS SOMMES LÀ POUR VOUS ALORS N’HÉSITEZ PLUS !
          </h2>
          <div className="flex items-center">
            <button className="bg-primary text-white font-bold px-6 py-3 rounded-xl text-2xl hover:scale-105 duration-200">
              CONTACTEZ-NOUS
            </button>
          </div>
        </section>

        <section className="px-10 mb-20">
          <div className="flex">
            <span className="h-24 bg-barre p-0.5 mr-4"></span>
            <h2 className="font-second font-bold text-5xl text-gradient3 mb-10">
              ILS NOUS ONT FAIT CONFIANCE
              <br />
              ET NE L’ONT PAS REGRETTÉ !
            </h2>
          </div>
          <p className="text-3xl bg-primary p-10 mb-7 rounded-xl text-white text-center font-third">
            “ Rapport qualité-prix très positif et facile de travailler avec
            vous car vous savez vous adapter et répondre aux besoins clients. “
          </p>
          <div className="text-right text-3xl flex flex-col">
            <p className="font-bold">Mr Fall, CEO de Mossane GROUP.</p>
            <span className="w-28 h-1 bg-barre mt-1 p-0.5 self-end"></span>
          </div>
        </section>

        <section className="flex flex-col items-center bg-gradient3 text-white py-14">
          <h2 className="font-bold text-4xl text-center font-second pb-10">
            EN PLUS DE LA CRÉATION DE SITES / APPLICATIONS WEB,
            <br /> L’AGENCE PROPOSE ÉGALEMENT DES SERVICES DE :
          </h2>
          <div className="flex justify-evenly w-full">
            <div className="">
              <div className="flex flex-col items-center">
                <div className="mb-5 bg-primary rounded-md p-1">
                  <img src={brush} alt="paint brush" className="w-14" />
                </div>
                <h3 className="underline text-xl font-bold decoration-tertiary decoration-4 mb-8">
                  GRAPHISME
                </h3>
                <p className="text-base font-third text-center">
                  (LOGO, CARTES DE VISITE, AFFICHE ETC.)
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col items-center">
                <div className="mb-5 bg-primary rounded-md p-1">
                  <img src={archery} alt="archery" className="w-14" />
                </div>
                <h3 className="underline text-xl font-bold decoration-tertiary decoration-4 mb-8">
                  COMMUNITY MANAGEMENT
                </h3>
                <p className="text-base font-third uppercase text-center max-w-xs">
                  Mise en place de stratégies adaptées à votre cible.
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col items-center">
                <div className="mb-5 bg-primary rounded-md p-1">
                  <img src={hat} alt="degree hat" className="w-14" />
                </div>
                <h3 className="underline text-xl font-bold decoration-tertiary decoration-4 mb-8">
                  FORMATION
                </h3>
                <p className="text-base font-third text-center uppercase max-w-xs">
                  Nous aidons nos clients à prendre en mains les outils qu’il
                  leur faut.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white flex justify-between px-10 py-8">
          <h2 className="text-3xl uppercase font-bold">
            Rejoignez nous sur nos réseaux sociaux
          </h2>
          <div className="flex space-x-3">
            <a href="">
              <img src={facebook} alt="facebook" className="w-9" />
            </a>
            <a href="">
              <img src={instagram} alt="instagram" className="w-9" />
            </a>
            <a href="">
              <img src={twitter} alt="twitter" className="w-9" />
            </a>
            <a href="">
              <img src={linkedin} alt="linkedin" className="w-9" />
            </a>
            <a href="">
              <img src={youtube} alt="youtube" className="w-9" />
            </a>
          </div>
        </section>
        <section className="flex justify-between bg-tertiary text-white text-xl px-10 py-8">
          <p>© 2020 - 2022 Galsen Digital Agency. Tous Droits Réservés.</p>
          <p>Site Développé Et Déployé Par La GDA</p>
        </section>
      </main>
    </div>
  );
};

export default Accueil;
