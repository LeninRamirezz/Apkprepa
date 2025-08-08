import React, { useState, useEffect } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

const LOCAL_KEY = "preinscripciones_prepa";

export default function Materias() {
  const [inscripciones, setInscripciones] = useState([]);
  const materias = ["Matemáticas", "Física", "Historia", "Biología", "Inglés"];

  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (raw) setInscripciones(JSON.parse(raw));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Materias</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          {materias.map((m, i) => {
            const alumnos = inscripciones.filter(ins => ins.materia === m);
            return (
              <IonItem key={i}>
                <IonLabel>
                  <strong>{m}</strong>
                  <br />
                  {alumnos.length > 0
                    ? alumnos.map(a => (
                        <p key={a.id}>Alumno inscrito: "{a.nombre}"</p>
                      ))
                    : <p>Sin alumnos</p>}
                </IonLabel>
              </IonItem>
            );
          })}
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton routerLink="/preinscripcion">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
}
