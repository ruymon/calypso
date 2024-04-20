import { NetworkRating } from "@/types/networks";

export const VATSIM_PILOT_RATINGS: NetworkRating[] = [
  {
    id: 0,
    slug: "NEW",
    label: "Basic Member",
  },
  {
    id: 1,
    slug: "PPL",
    label: "Private Pilot License",
  },
  {
    id: 3,
    slug: "IR",
    label: "Instrument Rating",
  },
  {
    id: 7,
    slug: "CMEL",
    label: "Commercial Multi-Engine License",
  },
  {
    id: 15,
    slug: "ATPL",
    label: "Airline Transport Pilot License",
  },
  {
    id: 31,
    slug: "FI",
    label: "Flight Instructor",
  },
  {
    id: 63,
    slug: "FE",
    label: "Flight Examiner",
  },
];

export const VATSIM_ATC_RATINGS: NetworkRating[] = [
  {
    id: -1,
    slug: "INAC",
    label: "Inactive",
  },
  {
    id: 0,
    slug: "SUS",
    label: "Suspended",
  },
  {
    id: 1,
    slug: "OBS",
    label: "Observer",
  },
  {
    id: 2,
    slug: "S1",
    label: "Tower Trainee",
  },
  {
    id: 3,
    slug: "S2",
    label: "Tower Controller",
  },
  {
    id: 4,
    slug: "S3",
    label: "Senior Student",
  },
  {
    id: 5,
    slug: "C1",
    label: "Enroute Controller",
  },
  {
    id: 6,
    slug: "C2",
    label: "Controller 2 (not in use)",
  },
  {
    id: 7,
    slug: "C3",
    label: "Senior Controller",
  },
  {
    id: 8,
    slug: "I1",
    label: "Instructor",
  },
  {
    id: 9,
    slug: "I2",
    label: "Instructor 2 (not in use)",
  },
  {
    id: 10,
    slug: "I3",
    label: "Senior Instructor",
  },
  {
    id: 11,
    slug: "SUP",
    label: "Supervisor",
  },
  {
    id: 12,
    slug: "ADM",
    label: "Administrator",
  },
];

export const IVAO_PILOT_RATINGS: NetworkRating[] = [
  {
    id: 2,
    slug: "FS1",
    label: "Basic Flight Student",
  },
  {
    id: 3,
    slug: "FS2",
    label: "Flight Student",
  },
  {
    id: 4,
    slug: "FS3",
    label: "Advanced Flight Student",
  },
  {
    id: 5,
    slug: "PP",
    label: "Private Pilot",
  },
  {
    id: 6,
    slug: "SPP",
    label: "Senior Private Pilot",
  },
  {
    id: 7,
    slug: "CP",
    label: "Commercial Pilot",
  },
  {
    id: 8,
    slug: "ATP",
    label: "Airline Transport Pilot",
  },
  {
    id: 9,
    slug: "SFI",
    label: "Senior Flight Instructor",
  },
  {
    id: 10,
    slug: "CFI",
    label: "Chief Flight Instructor",
  },
];

export const IVAO_ATC_RATINGS: NetworkRating[] = [
  {
    id: 2,
    slug: "AS1",
    label: "ATC Applicant",
  },
  {
    id: 3,
    slug: "AS2",
    label: "ATC Trainee",
  },
  {
    id: 4,
    slug: "AS3",
    label: "Advanced ATC Trainee",
  },
  {
    id: 5,
    slug: "ADC",
    label: "Aerodrome Controller",
  },
  {
    id: 6,
    slug: "APC",
    label: "Approach Controller",
  },
  {
    id: 7,
    slug: "ACC",
    label: "Center Controller",
  },
  {
    id: 8,
    slug: "SEC",
    label: "Senior Controller",
  },
  {
    id: 9,
    slug: "SAI",
    label: "Senior ATC Instructor",
  },
  {
    id: 10,
    slug: "CAI",
    label: "Chief ATC Instructor",
  },
];
