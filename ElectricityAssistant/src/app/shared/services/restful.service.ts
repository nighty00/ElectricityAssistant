import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()
export class RestfulService {

    private publicProxyUrl: string = "https://cors-anywhere.herokuapp.com/";
    private serverUrl: string = "http://13.210.28.231:8080/gc/webresources/restclient.";

    private getACBrandsUrl: string = "airconditioner/allAirConditionerBrand";
    private getACModelsUrl: string = "airconditioner/allAirConditionerModel/";
    private getACPowerRatingUrl: string = "airconditioner/AirConditionerPowerRating/";

    private getWashingBrandsUrl: string = "clothwasher/allWasherBrand";
    private getWashingModelsUrl: string = "clothwasher/allWasherModel/";
    private getWashingPowerRatingUrl: string = "clothwasher/WasherPowerRating/";

    private getDryerBrandsUrl: string = "clothdryer/allDryerBrand";
    private getDryerModelsUrl: string = "clothdryer/allADryerModel/";
    private getDryerPowerRatingUrl: string = "clothdryer/DryerPowerRating/";

    private getFridgeBrandsUrl: string = "refrigerator/allFridgeBrand";
    private getFridgeModelsUrl: string = "refrigerator/allFrigeratorModel/";
    private getFridgePowerRatingUrl: string = "refrigerator/FrigePowerRating/";

    private getTvBrandsUrl: string = "tv/allTVBrand";
    private getTvModelsUrl: string = "tv/allTvModel/";
    private getTvPowerRatingUrl: string = "tv/TvPowerRating/";


    constructor (private http: Http) {}

    /**
     * Air-conditioner
     */
    getACBrandList(): any {
        return this.http.get(this.publicProxyUrl + this.serverUrl + this.getACBrandsUrl);
    }

    getACModelList(brand: string): any {
        return this.http.get(this.publicProxyUrl + this.serverUrl + this.getACModelsUrl + brand);
    }

    getACPowerRating(model: string): any {
        return this.http.get(this.publicProxyUrl + this.serverUrl + this.getACPowerRatingUrl + model);
    }

    /**
     * Washing machine
     */
    getWashingBrandList(): any {
        return this.http.get(this.publicProxyUrl + this.serverUrl + this.getWashingBrandsUrl);
    }

    getWashingModelList(brand: string): any {
        return this.http.get(this.publicProxyUrl + this.serverUrl + this.getWashingModelsUrl + brand);
    }

    getWashingPowerRating(model: string): any {
        return this.http.get(this.publicProxyUrl + this.serverUrl + this.getWashingPowerRatingUrl + model);
    }

    /**
     * Clothes dryer
     */
    getDryerBrandList(): any {
        return this.http.get(this.publicProxyUrl + this.serverUrl + this.getDryerBrandsUrl);
    }

    getDryerModelList(brand: string): any {
        return this.http.get(this.publicProxyUrl + this.serverUrl + this.getDryerModelsUrl + brand);
    }

    getDryerPowerRating(model: string): any {
        return this.http.get(this.publicProxyUrl + this.serverUrl + this.getDryerPowerRatingUrl + model);
    }

    /**
     * Refrigerator
     */
    getFridgeBrandList(): any {
        return this.http.get(this.publicProxyUrl + this.serverUrl + this.getFridgeBrandsUrl);
    }

    getFridgeModelList(brand: string): any {
        return this.http.get(this.publicProxyUrl + this.serverUrl + this.getFridgeModelsUrl + brand);
    }

    getFridgePowerRating(model: string): any {
        return this.http.get(this.publicProxyUrl + this.serverUrl + this.getFridgePowerRatingUrl + model);
    }

    /**
     * TV
     */
    getTvBrandList(): any {
        return this.http.get(this.publicProxyUrl + this.serverUrl + this.getTvBrandsUrl);
    }

    getTvModelList(brand: string): any {
        return this.http.get(this.publicProxyUrl + this.serverUrl + this.getTvModelsUrl + brand);
    }

    getTvPowerRating(model: string): any {
        return this.http.get(this.publicProxyUrl + this.serverUrl + this.getTvPowerRatingUrl + model);
    }
}