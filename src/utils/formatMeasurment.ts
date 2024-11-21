

const formatMeasurment = (value:number, unit:string = "°C"): string  =>{

    return `${value.toFixed(1)}${unit}`;
};
export default formatMeasurment