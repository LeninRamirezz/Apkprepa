import React, { useState, useEffect } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, useIonViewWillEnter } from "@ionic/react";

const LOCAL_KEY = "preinscripciones_prepa";

export default function MisPreinscripciones() {
  const [inscripciones, setInscripciones] = useState([]);

useIonViewWillEnter(() => {
  const raw = localStorage.getItem(LOCAL_KEY);
  if (raw) setInscripciones(JSON.parse(raw));
});  
  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (raw) setInscripciones(JSON.parse(raw));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mis Preinscripciones</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {inscripciones.length === 0 && <p>No hay registros.</p>}
        {inscripciones.map((i) => (
          <div key={i.id} style={{ border: "1px solid #ccc", padding: 8, marginBottom: 8 }}>
            <strong>{i.nombre}</strong> — {i.grado} — {i.materia}
            <br />
            <small>{new Date(i.fecha).toLocaleString()}</small>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
}
