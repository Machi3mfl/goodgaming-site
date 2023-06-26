import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import Image from "next/image";
// logos
import mercadolibreLogo from "../../public/images/logos/mercadolibre-icon.png";
import instagramLogo from "../../public/images/logos/instagram-icon-2.png";
import facebookLogo from "../../public/images/logos/fb-icon.png";
import { motion } from "framer-motion";
import Link from "next/link";

const ScaleComponent = ({ children }: React.ComponentProps<any>) => (
  <motion.div
    whileHover={{ scale: 2.5 }}
    whileTap={{ scale: 2.5 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const SocialButtons = () => {
  return (
    <Stack spacing={2} justifyContent="center" direction="row">
      <ScaleComponent>
        <Link
          href="https://listado.mercadolibre.com.ar/_CustId_733724225"
          target="_blank"
        >
          <Image
            src={mercadolibreLogo}
            alt="mercadolibre"
            width={35}
            height={25}
          />
        </Link>
      </ScaleComponent>
      <ScaleComponent>
        <Link
          href="https://instagram.com/goodgaming.digitalstore?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          <Image src={instagramLogo} alt="instagram" width={25} height={25} />
        </Link>
      </ScaleComponent>
      <ScaleComponent>
        <Link
          href="https://www.facebook.com/goodgaming.digitalstore?mibextid=LQQJ4d"
          target="_blank"
        >
          <Image src={facebookLogo} alt="facebook" width={25} height={25} />
        </Link>
      </ScaleComponent>
    </Stack>
  );
};

export default SocialButtons;
