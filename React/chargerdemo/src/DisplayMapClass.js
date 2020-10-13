import * as React from 'react';
import './DisplayMapClass.css';

export class DisplayMapClass extends React.Component {
  mapRef = React.createRef();

  state = {
    // The map instance to use during cleanup
    map: null
  };

 

 componentDidMount() {

  const data = this.props.data;
  const H = window.H;
  const platform = new H.service.Platform({
      apikey: "3T_TsTy1GgvCZ94-jrdsKIiaBWwXiEWntmBePaSjjb8"
  });

  const defaultLayers = platform.createDefaultLayers();

    // Create an instance of the map
  const map = new H.Map(
    this.mapRef.current,
    defaultLayers.vector.normal.map,
      {
        // centering the map
        center: { lat: 65, lng: 25 },
        zoom: 5,
        pixelRatio: window.devicePixelRatio || 1
      }
  );

  const addMarkerToGroup = (group, coordinate, html) => {
    var marker = new H.map.Marker(coordinate);
      // add custom data to the marker
      marker.setData(html);
      group.addObject(marker);
  }

  const addInfoBubble = (map) => {
    var group = new H.map.Group();
    
    map.addObject(group);
    
    group.addEventListener('tap', function (evt) {
    
       var bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
          // read custom data
          content: evt.target.getData()
       });
        // show info bubble
        ui.addBubble(bubble);
    }, false);

    var data1 = fetch("http://localhost:9000/locations")
      .then(response => response.json())
      .then(response => 
        response.forEach((r) => {
          addMarkerToGroup(group, {lat:r.lat, lng:r.long},
            '<p>' + r.location + '</p><p>' + r.code + '</p><p>' + r.status + '</p><p>' + r.speed + '</p><p>'
            + r.price + '</p>');
        }
      
    ))
    
  }

window.addEventListener('resize', () => map.getViewPort().resize());
    
const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components to allow the user to interact with them
    // This variable is unused
    const ui = H.ui.UI.createDefault(map, defaultLayers);
    var mapSettings = ui.getControl('mapsettings');
    var zoom = ui.getControl('zoom');
    var scalebar = ui.getControl('scalebar');

    mapSettings.setVisibility(false);
    zoom.setAlignment('bottom-right');
    scalebar.setAlignment('top-left');
    
    addInfoBubble(map);
    this.setState({ map });
}


  componentWillUnmount() {
    // Cleanup after the map to avoid memory leaks when this component exits the page
    this.state.map.dispose();
  }

  render() {
    return (
      // Set a height on the map so it will display
      <div ref={this.mapRef} style={{ height: "600px", width: "500px"}} />
      
    );
  }
}