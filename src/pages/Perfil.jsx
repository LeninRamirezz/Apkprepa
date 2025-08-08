import React, { useState, useEffect } from "react";
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
} from "@ionic/react";

export default function Perfil() {
  const [isLight, setIsLight] = useState(false);

  // Al cargar la página, lee preferencia guardada
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme_light");
    if (storedTheme === "1") {
      document.body.classList.add("light");
      setIsLight(true);
    }
  }, []);

  // Alternar tema y guardar en localStorage
  const toggleTheme = () => {
    if (isLight) {
      document.body.classList.remove("light");
      localStorage.setItem("theme_light", "0");
    } else {
      document.body.classList.add("light");
      localStorage.setItem("theme_light", "1");
    }
    setIsLight(!isLight);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Mi Perfil</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Bienvenido a tu perfil de la <strong>Prepa App</strong>.  
              Aquí puedes personalizar tu experiencia, incluyendo el tema de la interfaz.
            </p>
            <IonButton expand="block" onClick={toggleTheme}>
              Cambiar a {isLight ? "Tema Oscuro" : "Tema Claro"}
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
