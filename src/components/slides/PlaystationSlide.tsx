import { Stack } from "@mui/material";
import Image from "next/image";
import playstationBackground from "@/public/videos/psn-store-loop.gif";

const redirectToStorePlaystation = () => {
  window.open(
    "https://goodgaming.mercadoshops.com.ar/listado/consolas-videojuegos/accesorios-consolas/playstation_OrderId_PRICE_NoIndex_True",
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
