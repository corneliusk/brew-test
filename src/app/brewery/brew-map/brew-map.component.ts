import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile';
import Overlay from 'ol/Overlay';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj.js'
import { BreweryDetail } from 'src/app/brewery-detail';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-brew-map',
  templateUrl: './brew-map.component.html',
  styleUrls: ['./brew-map.component.scss']
})
export class BrewMapComponent implements OnChanges {

  map: Map;
  source: OSM;
  layer: TileLayer;
  view: View;

   @Input() breweryDetail:BreweryDetail;

  constructor( ) { }
  ngOnChanges(){
    if(this.breweryDetail != undefined){
      let pos = fromLonLat([parseFloat(this.breweryDetail.longitude), parseFloat(this.breweryDetail.latitude)]);
      let el = document.createElement('div');
      el.innerHTML = '<img src="https://cdn.mapmarker.io/api/v1/fa/stack?size=50&color=DC4C3F&icon=fa-microchip&hoffset=1" />';

      let marker = new Overlay({
        position: pos,
        positioning: 'center-center',
        element:el,
        stopEvent:false
      });

      this.source = new OSM();
      this.layer = new TileLayer({
        source:this.source
      });

      this.view = new View({
        center: pos,
        zoom:15

      })

      this.map = new Map({
        target: 'map',
        layers:[this.layer],
        view: this.view

      })
      this.map.addOverlay(marker)
    }
  }

}
