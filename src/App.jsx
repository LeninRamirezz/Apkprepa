import React from "react";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonPage,
  IonSplitPane
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";

import { home, book, images, person, create, list } from "ionicons/icons";

// Importar páginas
import Inicio from "./pages/Inicio";
import Materias from "./pages/Materias";
import Galeria from "./pages/Galeria";
import Perfil from "./pages/Perfil";
import Preinscripcion from "./pages/Preinscripcion";
import MisPreinscripciones from "./pages/MisPreinscripciones";

import "./theme/variables.css";

export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
        {/* SplitPane: menú lateral + contenido */}
        <IonSplitPane contentId="main">
          <IonMenu contentId="main" type="overlay">
            <IonHeader>
              <IonToolbar color="primary">
                <IonTitle>Menú</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItem routerLink="/inicio">Inicio</IonItem>
                <IonItem routerLink="/materias">Materias</IonItem>
                <IonItem routerLink="/galeria">Galería</IonItem>
                <IonItem routerLink="/preinscripcion">Preinscripción</IonItem>
                <IonItem routerLink="/mispreinscripciones">Mis Preinscripciones</IonItem>
                <IonItem routerLink="/perfil">Perfil</IonItem>
              </IonList>
            </IonContent>
          </IonMenu>

          {/* Contenido principal con Tabs */}
          <IonPage id="main">
            <IonTabs>
              <IonRouterOutlet>
                <Route path="/inicio" component={Inicio} exact />
                <Route path="/materias" component={Materias} exact />
                <Route path="/galeria" component={Galeria} exact />
                <Route path="/preinscripcion" component={Preinscripcion} exact />
                <Route path="/mispreinscripciones" component={MisPreinscripciones} exact />
                <Route path="/perfil" component={Perfil} exact />
                <Redirect exact from="/" to="/inicio" />
              </IonRouterOutlet>

              <IonTabBar slot="bottom">
                <IonTabButton tab="inicio" href="/inicio">
                  <IonIcon icon={home} />
                  <IonLabel>Inicio</IonLabel>
                </IonTabButton>
                <IonTabButton tab="materias" href="/materias">
                  <IonIcon icon={book} />
                  <IonLabel>Materias</IonLabel>
                </IonTabButton>
                <IonTabButton tab="galeria" href="/galeria">
                  <IonIcon icon={images} />
                  <IonLabel>Galería</IonLabel>
                </IonTabButton>
                <IonTabButton tab="preinscripcion" href="/preinscripcion">
                  <IonIcon icon={create} />
                  <IonLabel>Preinscripción</IonLabel>
                </IonTabButton>
                <IonTabButton tab="mispreinscripciones" href="/mispreinscripciones">
                  <IonIcon icon={list} />
                  <IonLabel>Mis Preinscripciones</IonLabel>
                </IonTabButton>
                <IonTabButton tab="perfil" href="/perfil">
                  <IonIcon icon={person} />
                  <IonLabel>Perfil</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonPage>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
}
