import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonText,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";

export default function Inicio() {
  const anuncios = [
    {
      titulo: "Aviso Importante",
      contenido: "Entrega de boletas el próximo viernes 15 de septiembre.",
      color: "primary",
    },
    {
      titulo: "Evento Cultural",
      contenido: "Fiesta de la primavera el 30 de septiembre en el auditorio.",
      color: "tertiary",
    },
    {
      titulo: "Clases en Línea",
      contenido: "Recuerda revisar el calendario para tus clases virtuales.",
      color: "success",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % anuncios.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + anuncios.length) % anuncios.length);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard color={anuncios[index].color} className="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>
              <IonText color="light">{anuncios[index].titulo}</IonText>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText color="light">{anuncios[index].contenido}</IonText>
          </IonCardContent>
        </IonCard>

        <IonGrid>
          <IonRow className="ion-justify-content-center ion-margin-top">
            <IonCol size="auto">
              <IonButton onClick={prev}>Anterior</IonButton>
            </IonCol>
            <IonCol size="auto">
              <IonButton onClick={next}>Siguiente</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Bienvenido a la Prepa App</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Aquí encontrarás toda la información sobre tu preparatoria: noticias,
            eventos, materias y más.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
