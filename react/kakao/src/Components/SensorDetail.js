import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import { grey, green, amber, red } from "@material-ui/core/colors"

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

const SensorDetail = ({ sensorInfo }) => {
  const classes = useStyles()
  const backgroundColor = sensorInfo.curCount / sensorInfo.maxCount > 0.7 ? red[700] : sensorInfo.curCount / sensorInfo.maxCount > 0.3 ? amber[700] : green[700];

  return (
    <div>
      <Card 
        className={classes.normal}
        style={{ backgroundColor: backgroundColor, color: grey[100] 
      }}>
        <Typography className={classes.title} component="p">{sensorInfo.name}</Typography>
      </Card>
    </div>
  )
}

export default SensorDetail;
