import { Stack } from "@mui/material";
import Image from "next/image";
// nintendo images
import marioJump from "@/public/images/mario-super-jump-loop.gif";
import marioBrick from "@/public/images/super-mario-brick.png";
import nintendoBackground from "@/public/videos/nintendo-eshop-background.gif";

const redirectToStoreNintendo = () => {
  window.open(
    "https://listado.mercadolibre.com.ar/consolas-videojuegos/accesorios-consolas/nintendo/_CustId_733724225",
    "_blank"
  );
};

export default function NintendoSlide() {
  return (
    <>
      <Image
        alt="Nintendo eshop background"
        src={nintendoBackground}
        width={65}
        height={80}
        className="backgroundSlide"
      />
      <Stack justifyContent="center" alignItems="center">
        <Image
          alt="super mario jump"
          src={marioJump}
          width={220}
          height={263}
        />
        <Image
          alt="super mario brick"
          src={marioBrick}
          width={350}
          height={75}
          className="nintendoBrickAnimation"
          onClick={redirectToStoreNintendo}
        />
        <span
          className="nintendoFont nintendoBrickAnimation"
          onClick={redirectToStoreNintendo}
        >
          {">> Comprar aqui <<"}
        </span>
      </Stack>
    </>
  );
}
