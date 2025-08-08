import React, { useState, useEffect } from "react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonAlert
} from "@ionic/react";

const IMG_KEY = "prepa_images";

export default function Galeria() {
  const [images, setImages] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem(IMG_KEY);
    if (raw) setImages(JSON.parse(raw));
  }, []);

  async function takePhoto() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 60
    });
    const newImg = { id: Date.now(), data: photo.dataUrl };
    const updated = [newImg, ...images];
    setImages(updated);
    localStorage.setItem(IMG_KEY, JSON.stringify(updated));
  }

  function confirmDelete(id) {
    setSelectedId(id);
    setShowAlert(true);
  }

  function deletePhoto() {
    const updated = images.filter(img => img.id !== selectedId);
    setImages(updated);
    localStorage.setItem(IMG_KEY, JSON.stringify(updated));
    setShowAlert(false);
    setSelectedId(null);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Galería</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonButton expand="block" onClick={takePhoto}>
          Tomar Foto
        </IonButton>
        <IonGrid>
          <IonRow>
            {images.map(img => (
              <IonCol size="6" key={img.id} style={{ textAlign: "center" }}>
                <img
                  src={img.data}
                  alt="foto"
                  style={{
                    width: "100%",
                    borderRadius: 8,
                    height: "150px",
                    objectFit: "cover"
                  }}
                />
                <IonButton
                  color="danger"
                  size="small"
                  onClick={() => confirmDelete(img.id)}
                  style={{ marginTop: "5px" }}
                >
                  Eliminar
                </IonButton>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        {/* Alerta de confirmación */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Confirmar eliminación"
          message="¿Seguro que deseas eliminar esta foto?"
          buttons={[
            { text: "Cancelar", role: "cancel" },
            { text: "Eliminar", handler: deletePhoto }
          ]}
        />
      </IonContent>
    </IonPage>
  );
}