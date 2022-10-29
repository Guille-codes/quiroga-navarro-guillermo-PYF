var map = L.map('map').setView([-61.2290403,-43.100000], 8);
      L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=xinj6wTWg04tHLy3VyQd',{
        tileSize: 612,
        zoomOffset: -1,
        minZoom: 1,
        attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
        crossOrigin: true
      }).addTo(map);

      var marker = L.marker([-61.2290403,-43.100000]).addTo(map);
      marker.bindPopup("<iframe src='https://www.google.com/maps?q=40.7590403,-74.039271+&output=embed'></iframe>");