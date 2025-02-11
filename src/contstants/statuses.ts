const statuses = {
  Complete: "Complete",
  Good: "Good",
  OnTrack: "OnTrack",
  Warning: "Warning",
  Blocked: "Blocked",
  Critical: "Critical",
  ReadyForReview: "ReadyForReview",
  UnderControl: "UnderControl",
  MonitorClosely: "MonitorClosely",
  ExceededResources: "ExceededResources",
  PlentyResources: "PlentyResources",
};

export default statuses;

export type Status = keyof typeof statuses;
