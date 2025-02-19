class Device {
    constructor({
    deviceID,
    deviceName,
    deviceDescription,
    device_references,
    fixedAssets,
    siteID,
    workshopID,
    madeAt,
    state,
    category,
    deparment,
    section
    }) {
    this.deviceID = deviceID;
    this.deviceName = deviceName;
    this.deviceDescription = deviceDescription;
    this.device_references = device_references;
    this.fixedAssets = fixedAssets;
    this.siteID = siteID;
    this.workshopID = workshopID;
    this.madeAt = madeAt;
    this.state = state;
    this.category = category; 
    this.deparment = deparment;
    this.section = section; 
    }
}
module.exports = Device;
  