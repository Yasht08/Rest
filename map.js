<script>
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://unpkg.com/leaflet@1.7.1/dist/leaflet.js', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id:'mapbox/streets-v11',
            }).addTo(map);
            L.marker([20.0, -0.09],6).addTo(map)
            </script>
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
        
            
            
            
            
            