function calculateFarmProfit(cost: number, revenue: number): number {
    let profit: number = revenue - cost;
    return profit;
}



function machineStatus(machineName: string, isWorking: boolean) {
    if(isWorking = true) {
        console.log(`${machineName} is working`)
    } else {
        console.log(`${machineName} needs repair`)
    }
}

const calculateSeedAmount = (farmSize: number, seedRate: number): number => {
    return farmSize * seedRate;
}   

function weatherAlert(temperature: number, humidity: number) {
    if(temperature > 35) {
        console.log("Heat warning");
    } else if(humidity < 20) {
        console.log("Dry condition");
    } else console.log("Normal");
}


function irrigationControl(moisture: number): string {
  if (moisture < 30) {
     return "Start irrigation";
  } else {
    return "Stop irrigation";
  }
}