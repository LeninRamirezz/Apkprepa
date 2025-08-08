import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonList,
  IonSelect,
  IonSelectOption
} from "@ionic/react";

const LOCAL_KEY = "preinscripciones_prepa";

export default function Preinscripcion() {
  const [nombre, setNombre] = useState("");
  const [grado, setGrado] = useState("");
  const [materia, setMateria] = useState("");
  const [saved, setSaved] = useState([]);

  const materiasDisponibles = [
    "Matemáticas",
    "Física",
    "Historia",
    "Biología",
    "Inglés"
  ];

  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (raw) setSaved(JSON.parse(raw));
    console.log("Página Preinscripción cargada");
  }, []);

  const guardar = () => {
    const nueva = {
      id: Date.now(),
      nombre,
      grado,
      materia,
      fecha: new Date().toISOString()
    };
    const updated = [nueva, ...saved];
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
    setSaved(updated);
    setNombre("");
    setGrado("");
    setMateria("");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Preinscripción</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Nombre</IonLabel>
            <IonInput
              value={nombre}
              onIonChange={e => setNombre(e.detail.value)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Grado</IonLabel>
            <IonInput
              value={grado}
              onIonChange={e => setGrado(e.detail.value)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Materia</IonLabel>
            <IonSelect
              value={materia}
              placeholder="Selecciona una materia"
              onIonChange={e => setMateria(e.detail.value)}
            >
              {materiasDisponibles.map((m, i) => (
                <IonSelectOption key={i} value={m}>
                  {m}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
        </IonList>

        <IonButton
          expand="block"
          onClick={guardar}
          disabled={!nombre || !grado || !materia}
        >
          Guardar
        </IonButton>
      </IonContent>
    </IonPage>
  );
}
