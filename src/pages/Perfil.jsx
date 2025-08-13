import React, { useState, useEffect, useRef } from "react";
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton, IonImg, IonInput, IonItem, IonLabel
} from "@ionic/react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Capacitor } from "@capacitor/core";

export default function Perfil() {
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const fileInputRef = useRef(null);

  // Cargar datos guardados
  useEffect(() => {
    const savedPhoto = localStorage.getItem("fotoPerfil");
    const savedNombre = localStorage.getItem("nombrePerfil");
    const savedCorreo = localStorage.getItem("correoPerfil");
    if (savedPhoto) setFotoPerfil(savedPhoto);
    if (savedNombre) setNombre(savedNombre);
    if (savedCorreo) setCorreo(savedCorreo);
  }, []);

  const savePhoto = (dataUrl) => {
    setFotoPerfil(dataUrl);
    localStorage.setItem("fotoPerfil", dataUrl);
  };

  const cambiarFoto = async () => {
    if (Capacitor.isNativePlatform()) {
      try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Prompt
        });
        savePhoto(image.dataUrl);
      } catch (err) {
        console.log("Error al tomar foto:", err);
      }
    } else {
      fileInputRef.current.click();
    }
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => savePhoto(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const guardarPerfil = () => {
    localStorage.setItem("nombrePerfil", nombre);
    localStorage.setItem("correoPerfil", correo);
    alert("Perfil guardado correctamente ✅");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-text-center ion-padding">
        {fotoPerfil ? (
          <IonImg src={fotoPerfil} style={{ width: "200px", margin: "0 auto", borderRadius: "50%" }} />
        ) : (
          <p>No hay foto de perfil</p>
        )}

        <IonButton onClick={cambiarFoto}>Cambiar Foto</IonButton>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={onFileChange}
        />

        <IonItem>
          <IonLabel position="floating">Nombre</IonLabel>
          <IonInput value={nombre} onIonChange={(e) => setNombre(e.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Correo</IonLabel>
          <IonInput type="email" value={correo} onIonChange={(e) => setCorreo(e.detail.value)} />
        </IonItem>

        <IonButton expand="block" onClick={guardarPerfil}>Guardar Perfil</IonButton>
      </IonContent>
    </IonPage>
  );
}
