import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Grid, Paper, Typography } from "@mui/material";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

let totalMeses = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
totalMeses = totalMeses.map((i) => moment().subtract(i, "M").format("MMMM"));
// const hoy= moment()
/* tras pasar aca los datos del backend a estos arreglos */
function test() {
  return console.log(totalMeses);
}

function Chartbar() {
  const clientName = "Kiosco De Don Pato";

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} mx={2} mt={2}>
        <Paper
          elevation={3}
          sx={{
            height: "100%",
          }}
        >
          <h1 className="TituloHomeUser">Resultados Mensuales </h1>
          <Typography
            variant="h7"
            noWrap
            component="div"
            paddingLeft={"2px"}
            align="center"
          >
            {clientName}
          </Typography>

          <Chart
            type="line"
            width={"100%"}
            height={"200%"}
            series={[
              {
                name: "Stock",
                color: "#0B0ED3",
                data: [
                  540, 605, 514, 671, 327, 513, 301, 452, 752, 520, 657, 260,
                  513,
                ],
              },
              {
                name: "Unidades Vendidas",
                color: "#C7D30B",
                data: [
                  340, 405, 314, 371, 127, 313, 101, 352, 552, 220, 157, 60,
                  313,
                ],
              },
              {
                name: "Mermas",
                color: "#F44336",
                data: [
                  440, 505, 414, 571, 227, 413, 201, 352, 652, 320, 257, 160,
                  413,
                ],
              },
              {
                name: "Ganancias",
                color: "#32CD32",
                data: [23, 42, 35, 27, 43, 22, 17, 31, 42, 22, 12, 16],
              },
            ]}
            options={{
              xaxis: {
                tickPlacement: "on",
                categories: totalMeses,
                labels: {
                  events: {
                    click: function () {
                      alert(this.xAxis[0].tickPositions.length);
                      // alert(this.x)
                    },
                  },
                },
              },
              chart: {
                events: {
                  // Agrega el evento de clic de los datos del histograma
                  dataPointSelection: function (event, chartContext, config) {
                    /* console.log(event);
                    console.log(chartContext);
                    console.log(config); */
                    alert(
                      config.w.config.labels[config.seriesIndex] +
                        " " +
                        config.w.config.series[config.seriesIndex].name +
                        " " +
                        config.w.config.series[config.seriesIndex].data[
                          config.dataPointIndex
                        ]
                    );
                  },
                },
              },
              plotOptions: {
                bar: {
                  dataLabels: {
                    hideOverflowingLabels: false,
                  },
                },
              },
              yaxis: {
                title: {
                  text: "Resultados mensuales",
                },
              },
            }}
          ></Chart>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Chartbar;
