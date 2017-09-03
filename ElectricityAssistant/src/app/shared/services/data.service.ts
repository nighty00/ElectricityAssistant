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
    heatType: string = "Gas heater";
    heatNumberOfHeaters: number;
    heatPowerOfHeater: string = "1";
    // heatBrandOfAC: string;
    // heatModelOfAC: string;
    // heatPowerOfAC: number;
    heatStarsOfAC: string = "2";
    heatSizeOfRoom: string = "small";
    heatHoursOfUsing: string = "2";
    heatTotalUsage: number;

    //*************** cooling.component **********************
    coolTotalUsage: number;
    coolType: string = "portable fan";
    coolEnergyRating: string = "2";
    coolSpaceSize: string = "small";

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
    lightSleepTime: string = "130";

    //*************** laundry.component **********************
    laundryTotalUsage: number;
    laundryWashingRating: string = "1";
    laundryWashingCapacity: string = "5kg";
    laundryWashingFT: string = "Top";
    laundryDryType: string = "Heat pump";
    laundryDryCapacity: string = "4kg";
    laundryDryTimes: string = "1";

    //*************** kitchen.component **********************
    kitchenTotalUsage: number;
    kitchenOvenHours: string = "3";

    //*************** ReportPieChart **********************
    reportPieChartData: any[] = [1, 1, 1, 1, 1, 1];
    

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