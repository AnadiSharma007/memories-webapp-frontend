import { makeStyles } from "@material-ui/core";
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        backgroundImage: `linear-gradient(
          155deg,
          hsl(344deg 90% 23%) 0%,
          hsl(340deg 89% 28%) 10%,
          hsl(335deg 88% 32%) 21%,
          hsl(330deg 87% 37%) 33%,
          hsl(329deg 82% 42%) 46%,
          hsl(335deg 72% 46%) 58%,
          hsl(342deg 64% 51%) 68%,
          hsl(349deg 67% 56%) 76%,
          hsl(352deg 69% 58%) 83%,
          hsl(355deg 70% 59%) 89%,
          hsl(357deg 71% 60%) 95%,
          hsl(0deg 71% 62%) 100%
        );`,
          borderRadius: 15,
          margin: '30px 0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 50px',
          [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
    },
      },
      heading: {
        color: "white",
        textDecoration: 'none',
        fontSize: '2em',
        fontWeight: 300,
      },
      image: {
        marginLeft: '10px',
        marginTop: '5px',
      },
      toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
          width: 'auto',
        },
      },
      profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
          width: 'auto',
          marginTop: 20,
          justifyContent: 'center',
        },
      },
      logout: {
        marginLeft: '20px',
      },
      userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
      },
      brandContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
      },
    }));