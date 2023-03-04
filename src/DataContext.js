import uniqid from "uniqid";

export default function DataContext({ children }) {}

let initialData = {
  personalDetails: {
    name: "John doe",
    email: "gaegaeg@gmail.com",
    phoneNumber: "+11111111",
    personalStatement: "this is a personal statement and it is good",
  },
  education: [
    {
      key: uniqid(),
      educationTitle: "University of somethong",
      startDate: "2021-02-01",
      finishDate: "2023-02-01",
      additionalInfo: "Got an attendance award",
    },
  ],

  workExperience: [
    {
      key: uniqid(),
      workTitle: "Chef at something something",
      startDate: "2021-01-12",
      finishDate: "2021-12-12",
      bulletPoint: [
        { key: uniqid(), bullet: "did this for this amount of time" },
      ],
    },
  ],
};
