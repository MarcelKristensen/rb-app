import * as React from "react";
import { Box, Typography } from "@mui/material";
import Nyhed from "../components/nyheder";
import Nyhed1 from "../images/nyhed/nyhed-1.png";
import Nyhed2 from "../images/nyhed/nyhed-2.png";
import Nyhed3 from "../images/nyhed/nyhed-3.png";
import Nyhed4 from "../images/nyhed/nyhed-4.png";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

const years = [
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
];
const months = [
  "Januar",
  "Febuar",
  "Marts",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "December",
];

export default function Nyheder() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  return (
    <>
      <Box sx={{
        backgroundColor: "#2669A4",
        height: "20px"
      }}>
        <h1>Nyheder</h1>
        <Typography variant="h1">Nyheder</Typography>>
      </Box>

      <Box
        sx={{
          mx: "35%",
        }}
      >
        {/* <h1>Nyheder</h1> */}
        <Nyhed
          image={Nyhed1}
          title="Doner din gamle fodbold uanset stand"
          text="Din gamel fodbold har stadig værdi. Doner dim gamle fodbold til et velgørenhedsmål og spred fodboldsglæse ud i andre lande. Roskilde Boldklub betaler fragten og tager imod din gamel bold med en kyshånd..."
          alt="Nyhed 1"
        ></Nyhed>
        <Nyhed
          image={Nyhed2}
          title="Ny kunststgræs på banen er spilleklar næste uge"
          text="Så bliver der rullet nyt kunstgræs på den store plæne! Det skal jo fejres med en ordentlig omgang fodbold i alle aldre. Kom med ud og spil med klubben. Der vil være en kaffestand og noget hyggeligt spise muligheder..."
          alt="Nyhed 2"
        ></Nyhed>
        <Nyhed
          image={Nyhed3}
          title="Elitehold giver ikke op på hjemmebanen!"
          text="Roskildes Elitehold giver modstanderen sved på banen. Hjemmeholdet løb og sprkede til bolden, som de aldrig løb tør for luft. Med en velfortjent sejr 3-1 gik alle tilskuterne glade hjem fra hjemmebanen..."
          alt="Nyhed 3"
        ></Nyhed>
        <Nyhed
          image={Nyhed4}
          title="U9 drenge vinder over Svinninge"
          text="De friske drenge mødte op på modstanderens bane, hvor alle de lokale tilskuere mødte talstærk op for at heppe. Roskildes U9 drenge hold kæmpede til streggen og scorede nøjagtig et mål før kampen slutede..."
          alt="Nyhed 4"
        ></Nyhed>

        {/*
            Pagination er brugt
            Den her> https://mui.com/material-ui/react-pagination/#:~:text=Router%20integration,5
            Der er mere nede i bunden efter return()
          */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mb: "10%",
          }}
        >
          <Pagination
            page={page}
            count={10}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/nyheder${item.page === 1 ? "" : `?page=${item.page}`
                  }`}
                {...item}
              />
            )}
          />
        </Box>
      </Box>
    </>
  );
}