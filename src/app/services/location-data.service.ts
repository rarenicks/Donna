import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Location, Campus } from '../models/app.models';

import { BaseAPIDataService } from './base-api-data.service';

@Injectable()
export class LocationDataService extends BaseAPIDataService {

  constructor(http: Http) {
    super(http);
  }
  getAllLocations(params) {
    return super.getData('locations', params);
  }
  downloadAllLocations() {
    return super.getBlobData('locations/download', 'locations.json');
  }
  addLocation(location: Location) {
    return super.postData('locations', location);
  }
  deleteLocation(location: Location) {
    return super.deleteData('locations/' + location.id, {});
  }
  uploadLocations(file: File, reset:boolean = false) {
    var suffix='?reset='+reset;
    return super.postFile('locations/upload'+suffix, 'locations', file);
  }
  getAllCampus() {
    return super.getData('campus', {});
  }
  downloadAllCampus() {
    return super.getBlobData('campus/download', 'campus.json');
  }
  addCampus(campus: Campus) {
    return super.postData('campus', campus);
  }
  deleteCampus(campus: Campus) {
    return super.deleteData('campus/' + campus.id, {});
  }
  uploadCampus(file: File, reset:boolean = false) {
    var suffix='?reset='+reset;
    return super.postFile('campus/upload'+suffix, 'campus', file);
  }
}
