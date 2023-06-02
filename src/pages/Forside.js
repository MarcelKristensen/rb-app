import { Box, Typography, Grid, Link, styled, Button, Stack, Item } from "@mui/material";
import HeroBanner from '../components/hero'
import SenesteNyheder from '../components/senesteNyheder'
import OpslagCard from '../components/opslagCard'
import Hero from '../images/rb-hero.png'
import React from "react";
import Nyhed1 from '../images/nyhed-1.png';
import Nyhed2 from '../images/nyhed-2.png';
import Nyhed3 from '../images/nyhed-3.png';
import Nyhed4 from '../images/nyhed-4.png';
import cardOpslag1 from '../images/cardOpslag-1.png'
import cardOpslag2 from '../images/cardOpslag-2.png'
import cardOpslag3 from '../images/cardOpslag-3.png'
import cardOpslag4 from '../images/cardOpslag-4.png'
import cardOpslag5 from '../images/cardOpslag-5.png'

// Button er herfra: https://mui.com/system/styles/basics/#:~:text=to%20start%20editing-,Styled%20components%20API,-Note%3A%20this%20only
const MyButton = styled(Button)({
  background: '#2669A4',
  border: 0,
  borderRadius: 5,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 50,
  padding: '0 30px',
  "&:hover": {
    backgroundColor: '#F3B820'
  }
});

export default function Forside() {
  return (
    <>
      <HeroBanner header="Roskilde Boldklub" subtitle="af 1906" image={Hero} />

      {/* Nyheder */}
      <Box
        sx={{ mx: '20%' }}>
        <h1>Seneste nyheder</h1>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mx: '20%'
        }}>
        <SenesteNyheder image={Nyhed1} title="Doner din gamle fodbold uanset stand" date="22. Maj 2023" alt="Nyhed 1"></SenesteNyheder>
        <SenesteNyheder image={Nyhed2} title="Ny kunsgræs på banen er spilleklar næste uge" date="12. Maj 2023" alt="Nyhed 2"></SenesteNyheder>
        <SenesteNyheder image={Nyhed3} title="Elitehold giver ikke op på hjemmebanen!" date="6. Maj 2023" alt="Nyhed 3"></SenesteNyheder>
        <SenesteNyheder image={Nyhed4} title="U9 drenge vinder over Svinninge" date="5. Maj 2023" alt="Nyhed 4"></SenesteNyheder>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        my: '2%'
      }}>
        <Link href="/#" style={{ textDecoration: 'none' }}>
          <MyButton sx={{
            textTransform: 'none'
          }}>
            <Typography variant="blueBtn">Alle nyheder</Typography>
          </MyButton>
        </Link>
      </Box>

      {/* Social Medie */}
      <Box
        sx={{
          mx: '20%'
        }}>

        <Stack
          spacing={{ xl: 0, sm: 2 }}
          direction="row" useFlexGap
          flexWrap="wrap"
          justifyContent={"space-between"}
        >
          <OpslagCard
            date="5 dage siden"
            description="Igen i år afholder vi fodboldskole i uge 31. Hvis du skal sikre dig en plads så er det ved at være på tide. Så skynd dig ind for at være sikker på at få din dreng eller pige med "
            image={cardOpslag1}
            contentTitle="Bananer sidder fast i automaten"
            contentText1="1. Pisk æg, sukker og vaniljesukker til en luftig æggesnaps."
            contentText2="2. land mel og bagepulver og vend det forsigtigt i dejen skiftevis med smørret. Vend de mosede bananer i."
            contentText3="3. Hæld dejen i en smurt franskbrødsform (ca. 1 liter) og bag kagen nederst i ovnen."
            contentText4="4. Vend banankagen ud på en bagerist og lad den køle af."
            contentText5="5. Tag kagen ud af formen og placer den, med undersiden opad, på et fad."
            contentText6="6. Fordel den smeltede chokolade på kagen, pynt med evt. med valnødder og server."
          />

          <OpslagCard
            date="11 Maj 2023"
            description="U15 tager idag imod HBK i tredje turneringskamp. Kampen kan følges på Veo live."
            image={cardOpslag2}
            contentTitle="Bananer sidder fast i automaten"
            contentText1="1. Pisk æg, sukker og vaniljesukker til en luftig æggesnaps."
            contentText2="2. land mel og bagepulver og vend det forsigtigt i dejen skiftevis med smørret. Vend de mosede bananer i."
            contentText3="3. Hæld dejen i en smurt franskbrødsform (ca. 1 liter) og bag kagen nederst i ovnen."
            contentText4="4. Vend banankagen ud på en bagerist og lad den køle af."
            contentText5="5. Tag kagen ud af formen og placer den, med undersiden opad, på et fad."
            contentText6="6. Fordel den smeltede chokolade på kagen, pynt med evt. med valnødder og server."
          />

          <OpslagCard
            date="14 Maj 2023"
            description="Vi har fantastiske nyheder at dele! Vores venner hos Gobilist.dk har netop sponsoreret Keepers målmandshandsker til alle klubbens målmænd på U13 til U19, samt vores Herre og Dame senior! Vi vil gerne takke Gobilist.dk for deres generøse..."
            image={cardOpslag3}
            contentTitle="Bananer sidder fast i automaten"
            contentText1="1. Pisk æg, sukker og vaniljesukker til en luftig æggesnaps."
            contentText2="2. land mel og bagepulver og vend det forsigtigt i dejen skiftevis med smørret. Vend de mosede bananer i."
            contentText3="3. Hæld dejen i en smurt franskbrødsform (ca. 1 liter) og bag kagen nederst i ovnen."
            contentText4="4. Vend banankagen ud på en bagerist og lad den køle af."
            contentText5="5. Tag kagen ud af formen og placer den, med undersiden opad, på et fad."
            contentText6="6. Fordel den smeltede chokolade på kagen, pynt med evt. med valnødder og server."
          />

          <OpslagCard
            date="28 April 2023 dage siden"
            description="Kom til sjov og lærerig fodboldskole i uge 31. Læs mere her."
            image={cardOpslag4}
            contentTitle="Bananer sidder fast i automaten"
            contentText1="1. Pisk æg, sukker og vaniljesukker til en luftig æggesnaps."
            contentText2="2. land mel og bagepulver og vend det forsigtigt i dejen skiftevis med smørret. Vend de mosede bananer i."
            contentText3="3. Hæld dejen i en smurt franskbrødsform (ca. 1 liter) og bag kagen nederst i ovnen."
            contentText4="4. Vend banankagen ud på en bagerist og lad den køle af."
            contentText5="5. Tag kagen ud af formen og placer den, med undersiden opad, på et fad."
            contentText6="6. Fordel den smeltede chokolade på kagen, pynt med evt. med valnødder og server."
          />

          <OpslagCard
            date="9 Febuar 2023"
            description="Roskilde boldklub er stole af at annoncere et strategisk samarbejde med F.C. København Samarbejdet mellem klubberne vil have stort fokus på børne- og ungdomsfodbolden i Roskilde og have en klar ambition om at udvikle klubben som helhed..."
            image={cardOpslag5}
            contentTitle="Bananer sidder fast i automaten"
            contentText1="1. Pisk æg, sukker og vaniljesukker til en luftig æggesnaps."
            contentText2="2. land mel og bagepulver og vend det forsigtigt i dejen skiftevis med smørret. Vend de mosede bananer i."
            contentText3="3. Hæld dejen i en smurt franskbrødsform (ca. 1 liter) og bag kagen nederst i ovnen."
            contentText4="4. Vend banankagen ud på en bagerist og lad den køle af."
            contentText5="5. Tag kagen ud af formen og placer den, med undersiden opad, på et fad."
            contentText6="6. Fordel den smeltede chokolade på kagen, pynt med evt. med valnødder og server."
          />

          <OpslagCard
            date="1 Febuar 2023"
            description="U15 er taget et smut til Helsingør. Kampstart kl. 12.30 "
            image={''}
            contentTitle="Bananer sidder fast i automaten"
            contentText1="1. Pisk æg, sukker og vaniljesukker til en luftig æggesnaps."
            contentText2="2. land mel og bagepulver og vend det forsigtigt i dejen skiftevis med smørret. Vend de mosede bananer i."
            contentText3="3. Hæld dejen i en smurt franskbrødsform (ca. 1 liter) og bag kagen nederst i ovnen."
            contentText4="4. Vend banankagen ud på en bagerist og lad den køle af."
            contentText5="5. Tag kagen ud af formen og placer den, med undersiden opad, på et fad."
            contentText6="6. Fordel den smeltede chokolade på kagen, pynt med evt. med valnødder og server."
          />
        </Stack>
      </Box>
      
      {/* Sponsor */}
      <Box sx={{
        backgroundColor: '#312B2B',
        pt: '2rem',
        justifyContent: 'space-evenly'
      }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            color: '#FFFFFF',
            mx: '20%',
            justifyContent: 'space-evenly'
          }}>
          <h3>SPONSORERE OG PARTNERE</h3>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            color: '#FFFFFF',
            mx: '20%',
            mt: '3rem',
            justifyContent: 'space-evenly'
          }}>
          <Grid container spacing={2} columns={12} alignItems="center" mb="6rem">
            <Grid item xs={3}>
              <a href="/#"><img src={require('../images/sponsor-nike.png')} width={"90%"} alt='Sponsor-nike'></img></a>
            </Grid>
            <Grid item xs={3}>
              <a href="/#"><img src={require('../images/sponsor-bauhaus.png')} width={"90%"} alt='Sponsor-bauhaus'></img></a>

            </Grid><Grid item xs={3}>
              <a href="/#"><img src={require('../images/sponsor-fysio.png')} width={"90%"} alt='Sponsor-fysio'></img></a>
            </Grid>
            <Grid item xs={3}>
              <a href="/#"><img src={require('../images/sponsor-home.png')} width={"90%"} alt='Sponsor-home'></img></a>
            </Grid>
            <Grid item xs={3}>
              <a href="/#"><img src={require('../images/sponsor-ok.png')} width={"90%"} alt='Sponsor-ok'></img></a>
            </Grid>
            <Grid item xs={3}>
              <a href="/#"><img src={require('../images/sponsor-puma.png')} width={"90%"} alt='Sponsor-puma'></img></a>

            </Grid><Grid item xs={3}>
              <a href="/#"><img src={require('../images/sponsor-spar-nord.png')} width={"90%"} alt='Sponsor-spar-nord'></img></a>
            </Grid>
            <Grid item xs={3}>
              <a href="/#"><img src={require('../images/sponsor-sport24.png')} width={"90%"} alt='Sponsor-home'></img></a>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}