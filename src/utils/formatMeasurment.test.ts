import formatMeasurment from "./formatMeasurment";

describe("formatMeasurement", () => {
    expect(formatMeasurment(23.456,"°C")).toBe("23.5°C")
    expect(formatMeasurment(0,"°C")).toBe("0.0°C")
    expect(formatMeasurment(-5,"°C" )).toBe("-5.0°C")

    
});
it("formats value with specified unit", () => {
    expect(formatMeasurment(75.678, "°F")).toBe("75.7°F");
    expect(formatMeasurment(300.123, "K")).toBe("300.1K");
    expect(formatMeasurment(10.5, " km/h")).toBe("10.5 km/h");
  });