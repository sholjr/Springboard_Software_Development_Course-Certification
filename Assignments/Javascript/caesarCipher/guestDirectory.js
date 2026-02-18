const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  }
};

guests.BRUTUS = {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegam",
    pastGifts: ["Silver Dagger", "Marble Bust"]
  }

guests.CICERO.pastGifts.push ("Golden Lyre");

const regionOfAnthony = guests.ANTONY.region;

delete guests.CICERO;

const generalProfile = guests.ANTONY;
guests.ANTONY.region = "Egypt";

/* Question 
ANTONY will be relocated to "Egypt" and will no longer be located in "Rome" That is because the region data is saved in reference to the orignal guest lists. 
*/