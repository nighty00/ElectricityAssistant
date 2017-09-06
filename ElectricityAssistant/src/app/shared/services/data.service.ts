export class DataService {
    //home.module
    showCharts: boolean = false;
    showReport: boolean = false;
    inputUsage: number;
    averageUsage: number;
    monthSelected: string = "--please select month--";
    totalCo2Emission: number;
    barChartDataWorld: { data: number[], label: string }[] = [
        { data: [0], label: 'Your usage' },
        { data: [0, 11879, 11698, 7227, 5513, 4648, 3512, 3471, 2419, 1349, 900, 570], label: 'World Average usage' }
    ];
    barChartDataAustralia: { data: number[], label: string }[] = [
        { data: [0], label: 'Your usage' },
        { data: [0, 10056, 8550, 7639, 7626, 7227, 6873, 6790, 6198, 5000], label: 'Australia Average usage' }
    ];

    //*************** heating.component **********************
    heatDaysOfUsing: string = "160";
    heatType: string = "Gas heater";
    heatNumberOfHeaters: string = "1";
    heatPowerOfHeater: string = "1";
    heatHoursOfUsing: string = "2";
    heatKnowBrand: string = "yes";
    heatBrand: string;
    heatModel: string;
    heatBrandList: string[];
    heatModelList: string[];
    heatPower: number;
    heatRating: number;
    heatStarsOfAC: string = "2";
    heatSizeOfRoom: string = "small";
    
    heatTotalUsage: number;

    //*************** cooling.component **********************
    coolTotalUsage: number;
    coolType: string = "portable fan";
    coolKnowBrand: string = "yes";
    coolEnergyRating: string = "2";
    coolSpaceSize: string = "small";
    coolTemperature: string = "25";
    coolBrand: string;
    coolModel: string;
    coolBrandList: string[];
    coolModelList: string[];
    coolACPower: number;
    coolACRating: number;

    //*************** entertainment.component ****************
    entertainmentTotalUsage: number;
    entertainmentScreenSize: string = "26 inch";
    entertainmentStarRating: string = "2";
    entertainmentUsingTime: string = "2 hours";

    //*************** lighting.component **********************
    lightTotalUsage: number;
    lightHalogenLight: string = "Yes";
    lightNumberOfLights: number;
    lightPowerOfLights: string = "0.1";
    lightSwitchOff: string = "0.9";
    lightSleepTime: string = "yes";

    //*************** laundry.component **********************
    laundryTotalUsage: number;
    laundryWashingTotalUsage: number;
    laundryDryTotalUsage: number;

    laundryWashingKnow: string = "yes";
    laundryWashingBrand: string;
    laundryWashingModel: string;
    laundryWashingBrandList: string[];
    laundryWashingModelList: string[];
    laundryWashingRating: string = "1";
    laundryWashingCapacity: string = "5kg";
    laundryWashingLoadingType: string = "Top";
    laundryWashingFrequency: string = "1";
    laundryWashingPower: number;
    laundryWashingStarRating: number;
    laundryDryKnow: string = "yes";
    laundryDryBrand: string;
    laundryDryModel: string;
    laundryDryBrandList: string[];
    laundryDryModelList: string[];
    laundryDryType: string = "heat pump";
    laundryDryCapacity: string = "4kg";
    laundryDryFrequency: string = "1";
    laundryDryPower: number;
    laundryDryStarRating: number;

    //*************** kitchen.component **********************
    kitchenKnowFridgeBrand: string = "yes";
    kitchenFridgeBrand: string;
    kitchenFridgeModel: string;
    kitchenFridgeBrandList: string[];
    kitchenFridgeModelList: string[];
    kitchenFridgePower: number;
    kitchenFridgeRating: number;
    kitchenFridgeStars: string = "1.5";
    kitchenFridgeType: string = "2-door";
    kitchenFridgeVolume: string = "small";
    kitchenFridgeTemperature: string = "3";
    kitchenIsUsingDish: string = "no";
    kitchenDishCapacity: string = "7";
    kitchenDishFrequency: string = "1";
    kitchenDishRating: string = "2";
  
    kitchenFridgeTotalUsage: number;
    kitchenDishTotalUsage: number;
    kitchenTotalUsage: number;

    //*************** ReportPieChart **********************
    reportPieChartData: any[] = [1, 1, 1, 1, 1, 1];
    reportBarChartData: any[] = [
        { data: [1, 0, 0, 0, 0, 0, 0, 0, 0], label: "annual usage" }
    ]
    totalSaving: number = 0;

    public setShowCharts(flag: boolean) {
        this.showCharts = flag;
    }

    public setInputUsage(inputUsage: number) {
        this.inputUsage = inputUsage;
    }

    public setAverageUsage(averageUsage: number) {
        this.averageUsage = averageUsage;
    }

    public setMonthSelected(monthSelected: string) {
        this.monthSelected = monthSelected;
    }

    public setTotalCo2Emission(totalCo2Emission: number) {
        this.totalCo2Emission = totalCo2Emission;
    }

    public setBarChartDataWorld(barChartDataWorld: { data: number[], label: string }[]) {
        this.barChartDataWorld = barChartDataWorld;
    }

    public setBarChartDataAustralia(barChartDataAustralia: { data: number[], label: string }[]) {
        this.barChartDataAustralia = barChartDataAustralia;
    }
}