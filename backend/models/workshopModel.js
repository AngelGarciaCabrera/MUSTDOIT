class Workshop {
    constructor({
      workshopID,
      name,
      address,
      madeAt,
      sitePhone,
      siteEmail,
      siteLandlineNumber,
      ownerName,
      ownerPhone,
      ownerEmail,
      generalNumber,
      extension,
      startTime,
      endTime,
      state,
    }) {
      this.workshopID = workshopID;
      this.name = name;
      this.address = address;
      this.madeAt = madeAt;
      this.sitePhone = sitePhone;
      this.siteEmail = siteEmail;
      this.siteLandlineNumber = siteLandlineNumber;
      this.ownerName = ownerName;
      this.ownerPhone = ownerPhone;
      this.ownerEmail = ownerEmail;
      this.generalNumber = generalNumber;
      this.extension = extension;
      this.startTime = startTime;
      this.endTime = endTime;
      this.state = state
    }
  }
  
  module.exports = Workshop;
  