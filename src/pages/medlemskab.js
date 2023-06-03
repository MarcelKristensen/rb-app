import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HeroBanner from '../components/hero';
import { Grid } from '@mui/material';
import Banner from '../images/medlemskabBanner.jpg'

export default function artikel() {
  return (
    <>
      <HeroBanner header="Sommerland" subtitle="Børnepris" image={Banner}/>

      <Box
        sx={{
          mx: '20%',
        }}>
        <h1>Medlemskab</h1>
      </Box>
    </>
  )
}
