import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
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
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'white',
      },
      image: {
        marginLeft: '15px',
      },
    }));