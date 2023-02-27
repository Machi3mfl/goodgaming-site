import { Stack } from "@mui/material";
import Image from "next/image";
import playstationBackground from "@/public/videos/psn-store-loop.gif";

const redirectToStorePlaystation = () => {
  window.open(
    "https://listado.mercadolibre.com.ar/consolas-videojuegos/accesorios-consolas/playstation/_CustId_733724225",
    "_blank"
  );
};

export default function PlaystationSlide() {
  return (
    <>
      <Image
        alt="Playstation store background"
        src={playstationBackground}
        width={65}
        height={80}
        className="backgroundSlide"
      />

      {/* Playstation slide */}
      <Stack justifyContent="center" alignItems="center">
        <span className="playstationFont" onClick={redirectToStorePlaystation}>
          {"Comprar aquí"}
        </span>
      </Stack>
    </>
  );
}
