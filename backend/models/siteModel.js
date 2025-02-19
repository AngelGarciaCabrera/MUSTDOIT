class Site {
    constructor({
    siteID,
    name,
    address,
    madeAt,
    ownerName,
    sitePhone,
    siteEmail,
    siteLandlineNumber,
    ownerPhone,
    ownerEmail,
    generalNumber,
    extension,
    startTime,
    endTime,
    state,
    latitud,
    altitud,
    }) {
    this.siteID = siteID;
    this.name = name;
    this.address = address;
    this.madeAt = madeAt;
    this.ownerName = ownerName;
    this.sitePhone = sitePhone;
    this.siteEmail = siteEmail;
    this.siteLandlineNumber = siteLandlineNumber;
    this.ownerPhone = ownerPhone;
    this.ownerEmail = ownerEmail;
    this.generalNumber = generalNumber;
    this.extension = extension;
    this.startTime = startTime;
    this.endTime = endTime;
    this.state = state
    this.latitud = latitud ;
    this.altitud  =altitud ;

    }
  }
  
  module.exports = Site;
  