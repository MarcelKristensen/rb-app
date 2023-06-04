import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import HeroBanner from '../components/hero';
import Banner from '../images/medlemskabBanner.jpg'
import Kampe from '../components/kampe'
import Nyhed1 from "../images/nyhed/nyhed-1.png";


export default function kampOversigt() {
  return (
    <>
      <HeroBanner header="Roskilde Boldklub" subtitle="kampoversigt" image={Banner} />

      <Box
        sx={{
          mx: "20%",
        }}
      >

        <Grid
          container
          spacing={2}
          columns={100}
          mb="6rem"
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
        >
          <Grid xs={48}>
            <h1>Kommene kampe</h1>
            <Kampe hold1={Nyhed1} hold2={Nyhed1} />

          </Grid>



          <Grid xs={1}
            sx={{
              borderLeft: 3
            }}
          >
          </Grid>

          <Grid xs={48}>
          <h1>Afsluttet kampe</h1>
          <h1>Afsluttet kampe</h1>
          <h1>Afsluttet kampe</h1>
          <h1>Afsluttet kampe</h1>
          <h1>Afsluttet kampe</h1>
          </Grid>
        </Grid>


      </Box>
    </>
  );
}
