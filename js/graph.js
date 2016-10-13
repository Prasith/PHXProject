      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = new google.visualization.DataTable();
      data.addColumn('number', 'Element');
      data.addColumn('number', 'Percentage');
      data.addRows([
        [100, 1],
        [200, 2],
        [900, 3],
        [800, 4],
        [2000, 5],
        [3000, 6],
        [1500, 7],
        [2000, 8],
        [3000, 9],
        [1000, 10],
        [1200, 11],
        [800, 12],
        [2000, 13],
        [2500, 14],
        [3000, 15],
        [3500, 16],
        [1000, 17],
        [500, 18],
        [200, 19],
        [100, 20],
        [600, 21],
        [2000, 22],
        [1500, 23],
        [500, 24],

      ]);
        var options = {
          title: 'Agence de Rennes- Graphique journalier du 22 août 2016',
          legend: { position: 'none' },
        };

        var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
   