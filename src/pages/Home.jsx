import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react";

export default function Home() {
  const noticias = [
    { titulo: "Inicio de clases", texto: "El semestre comienza el 15 de agosto." },
    { titulo: "Semana cultural", texto: "Del 1 al 5 de septiembre habrá actividades artísticas y deportivas." }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {noticias.map((n, i) => (
          <IonCard key={i}>
            <IonCardHeader>
              <IonCardTitle>{n.titulo}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{n.texto}</IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
}
