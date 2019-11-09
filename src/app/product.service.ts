import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class ProductService {
  _albumUrl: any;
  constructor(private _http: Http) {
    this._albumUrl = "../assets/album.json";
  }

  getAlbum(id: number, _albumUrl: any) {}
}
