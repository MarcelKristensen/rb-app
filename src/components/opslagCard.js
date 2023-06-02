import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { CommentSharp, ReplyAllSharp, ReplySharp, ShareSharp, ThumbUpSharp } from '@mui/icons-material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 280, mb:'3%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mx: '4%'
        }}>
        <img src={require("../images/RBLogo.png")} alt="logo" width={40} height={40} marginLeft="10px"></img>
        <CardHeader
          title="RB 1906"
          subheader={props.date}
        />
      </Box>
      <CardContent
        sx={{
          p: 0,
        }}>
        <Typography mx="8%" mb="2%">{props.description}</Typography>
        <CardMedia
          component="img"
          image={props.image}
          alt={props.alt}
        />
      </CardContent>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h3>{props.contentTitle}</h3>
          <Typography paragraph>{props.contentText1}</Typography>
          <Typography paragraph>{props.contentText2}</Typography>
          <Typography paragraph>{props.contentText3}</Typography>
          <Typography paragraph>{props.contentText4}</Typography>
          <Typography paragraph>{props.contentText5}</Typography>
          <Typography paragraph>{props.contentText6}</Typography>
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ThumbUpSharp />
        </IconButton>
        <IconButton aria-label="share">
          <ReplySharp />
        </IconButton>
        <IconButton aria-label="share">
          <CommentSharp />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}