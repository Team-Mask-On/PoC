import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import { grey, green } from "@material-ui/core/colors"

const useStyles = makeStyles(theme => ({
  normal: {
    padding: theme.spacing(0.7),
    color: "#fff",
    textAlign: "center",
    minWidth: 40
  },
  title: {
    fontSize: 13,
    fontWeight: 700
  },
  content: {
    fontSize: 11
  }
}))

const SensorOverlay = ({
  code, // 판매기관코드
  name, // 판매기관명
  addr, // 주소,
}) => {
  const classes = useStyles()

  const Tooltip = () => (
    <div>
      <Typography className={classes.title} style={{ marginBottom: 3 }}>{name}</Typography>
      <Typography className={classes.content} component="p">{addr}</Typography>
    </div>
  )

  return (
    <div
      data-tippy-content={renderToStaticMarkup(<h1>Hello!!!</h1>)}
    >
      <Card
        className={classes.normal}
        style={{ backgroundColor: green[700], color: grey[100] 
      }}>
        <Typography className={classes.title} component="p">
          {name}
        </Typography>
      </Card>
    </div>
  )
}

export default SensorOverlay
