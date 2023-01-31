import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import Image from "next/image";
// logos
import mercadolibreLogo from "../../public/images/logos/mercadolibre-icon.png";
import instagramLogo from "../../public/images/logos/instagram-icon-2.png";
import facebookLogo from "../../public/images/logos/fb-icon.png";

const SocialButtons = () => {
    return (
      <Stack spacing={2} justifyContent="center">
        <Box>
          <Tooltip title="Mercadolibre">
            <IconButton
              size="large"
              href="https://goodgaming.mercadoshops.com.ar/"
              target="_blank"
            >
              <Image
                src={mercadolibreLogo}
                alt="mercadolibre"
                width={40}
                height={30}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram">
            <IconButton
              size="large"
              href="https://instagram.com/goodgaming.digitalstore?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <Image
                src={instagramLogo}
                alt="instagram"
                width={30}
                height={30}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Facebook">
            <IconButton
              size="large"
              href="https://www.facebook.com/goodgaming.digitalstore?mibextid=LQQJ4d"
              target="_blank"
            >
              <Image
                src={facebookLogo}
                alt="facebook"
                width={30}
                height={30}
              />
            </IconButton>
          </Tooltip>
        </Box>
      </Stack>
    );
  };

export default SocialButtons;