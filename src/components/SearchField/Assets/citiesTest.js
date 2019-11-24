const cities = [
  {
    Version: 1,
    Key: "182536",
    Type: "City",
    Rank: 10,
    LocalizedName: "Athens",
    Country: {
      ID: "GR",
      LocalizedName: "Greece"
    },
    AdministrativeArea: {
      ID: "I",
      LocalizedName: "Attica"
    }
  },
  {
    Version: 1,
    Key: "316938",
    Type: "City",
    Rank: 10,
    LocalizedName: "Ankara",
    Country: {
      ID: "TR",
      LocalizedName: "Turkey"
    },
    AdministrativeArea: {
      ID: "06",
      LocalizedName: "Ankara"
    }
  },
  {
    Version: 1,
    Key: "126995",
    Type: "City",
    Rank: 11,
    LocalizedName: "Alexandria",
    Country: {
      ID: "EG",
      LocalizedName: "Egypt"
    },
    AdministrativeArea: {
      ID: "ALX",
      LocalizedName: "Alexandria"
    }
  },
  {
    Version: 1,
    Key: "56912",
    Type: "City",
    Rank: 13,
    LocalizedName: "Anqing",
    Country: {
      ID: "CN",
      LocalizedName: "China"
    },
    AdministrativeArea: {
      ID: "AH",
      LocalizedName: "Anhui"
    }
  },
  {
    Version: 1,
    Key: "59083",
    Type: "City",
    Rank: 15,
    LocalizedName: "Anyang",
    Country: {
      ID: "CN",
      LocalizedName: "China"
    },
    AdministrativeArea: {
      ID: "HA",
      LocalizedName: "Henan"
    }
  },
  {
    Version: 1,
    Key: "102138",
    Type: "City",
    Rank: 15,
    LocalizedName: "Anshan",
    Country: {
      ID: "CN",
      LocalizedName: "China"
    },
    AdministrativeArea: {
      ID: "LN",
      LocalizedName: "Liaoning"
    }
  },
  {
    Version: 1,
    Key: "202438",
    Type: "City",
    Rank: 15,
    LocalizedName: "Ahmedabad",
    Country: {
      ID: "IN",
      LocalizedName: "India"
    },
    AdministrativeArea: {
      ID: "GJ",
      LocalizedName: "Gujarat"
    }
  },
  {
    Version: 1,
    Key: "2093",
    Type: "City",
    Rank: 20,
    LocalizedName: "Algiers",
    Country: {
      ID: "DZ",
      LocalizedName: "Algeria"
    },
    AdministrativeArea: {
      ID: "16",
      LocalizedName: "Alger"
    }
  },
  {
    Version: 1,
    Key: "126831",
    Type: "City",
    Rank: 20,
    LocalizedName: "Addis Ababa",
    Country: {
      ID: "ET",
      LocalizedName: "Ethiopia"
    },
    AdministrativeArea: {
      ID: "AA",
      LocalizedName: "Addis Ababa"
    }
  },
  {
    Version: 1,
    Key: "178551",
    Type: "City",
    Rank: 20,
    LocalizedName: "Accra",
    Country: {
      ID: "GH",
      LocalizedName: "Ghana"
    },
    AdministrativeArea: {
      ID: "AA",
      LocalizedName: "Greater Accra"
    }
  },
  {
    Version: 1,
    Key: "101924",
    Type: "City",
    Rank: 10,
    LocalizedName: "Beijing",
    Country: {
      ID: "CN",
      LocalizedName: "China"
    },
    AdministrativeArea: {
      ID: "BJ",
      LocalizedName: "Beijing"
    }
  },
  {
    Version: 1,
    Key: "107487",
    Type: "City",
    Rank: 10,
    LocalizedName: "Bogota",
    Country: {
      ID: "CO",
      LocalizedName: "Colombia"
    },
    AdministrativeArea: {
      ID: "DC",
      LocalizedName: "Distrito Capital de Bogotá"
    }
  },
  {
    Version: 1,
    Key: "178087",
    Type: "City",
    Rank: 10,
    LocalizedName: "Berlin",
    Country: {
      ID: "DE",
      LocalizedName: "Germany"
    },
    AdministrativeArea: {
      ID: "BE",
      LocalizedName: "Berlin"
    }
  },
  {
    Version: 1,
    Key: "207375",
    Type: "City",
    Rank: 10,
    LocalizedName: "Baghdad",
    Country: {
      ID: "IQ",
      LocalizedName: "Iraq"
    },
    AdministrativeArea: {
      ID: "BG",
      LocalizedName: "Baghdad"
    }
  },
  {
    Version: 1,
    Key: "318849",
    Type: "City",
    Rank: 10,
    LocalizedName: "Bangkok",
    Country: {
      ID: "TH",
      LocalizedName: "Thailand"
    },
    AdministrativeArea: {
      ID: "10",
      LocalizedName: "Bangkok"
    }
  },
  {
    Version: 1,
    Key: "204108",
    Type: "City",
    Rank: 11,
    LocalizedName: "Bengaluru",
    Country: {
      ID: "IN",
      LocalizedName: "India"
    },
    AdministrativeArea: {
      ID: "KA",
      LocalizedName: "Karnataka"
    }
  },
  {
    Version: 1,
    Key: "222888",
    Type: "City",
    Rank: 11,
    LocalizedName: "Busan",
    Country: {
      ID: "KR",
      LocalizedName: "South Korea"
    },
    AdministrativeArea: {
      ID: "26",
      LocalizedName: "Busan"
    }
  },
  {
    Version: 1,
    Key: "56913",
    Type: "City",
    Rank: 13,
    LocalizedName: "Bengbu",
    Country: {
      ID: "CN",
      LocalizedName: "China"
    },
    AdministrativeArea: {
      ID: "AH",
      LocalizedName: "Anhui"
    }
  },
  {
    Version: 1,
    Key: "58493",
    Type: "City",
    Rank: 13,
    LocalizedName: "Bijie",
    Country: {
      ID: "CN",
      LocalizedName: "China"
    },
    AdministrativeArea: {
      ID: "GZ",
      LocalizedName: "Guizhou"
    }
  },
  {
    Version: 1,
    Key: "61041",
    Type: "City",
    Rank: 13,
    LocalizedName: "Bazhong",
    Country: {
      ID: "CN",
      LocalizedName: "China"
    },
    AdministrativeArea: {
      ID: "SC",
      LocalizedName: "Sichuan"
    }
  },
  {
    Version: 1,
    Key: "113725",
    Type: "City",
    Rank: 21,
    LocalizedName: "Abidjan",
    Country: {
      ID: "CI",
      LocalizedName: "Cote D'Ivoire"
    },
    AdministrativeArea: {
      ID: "AB",
      LocalizedName: "Abidjan"
    }
  },
  {
    Version: 1,
    Key: "321626",
    Type: "City",
    Rank: 30,
    LocalizedName: "Abu Dhabi",
    Country: {
      ID: "AE",
      LocalizedName: "United Arab Emirates"
    },
    AdministrativeArea: {
      ID: "AZ",
      LocalizedName: "Abu Dhabi"
    }
  },
  {
    Version: 1,
    Key: "254698",
    Type: "City",
    Rank: 31,
    LocalizedName: "Abeokuta",
    Country: {
      ID: "NG",
      LocalizedName: "Nigeria"
    },
    AdministrativeArea: {
      ID: "OG",
      LocalizedName: "Ogun"
    }
  },
  {
    Version: 1,
    Key: "27070",
    Type: "City",
    Rank: 35,
    LocalizedName: "Abomey-Calavi",
    Country: {
      ID: "BJ",
      LocalizedName: "Benin"
    },
    AdministrativeArea: {
      ID: "AQ",
      LocalizedName: "Atlantique"
    }
  },
  {
    Version: 1,
    Key: "221960",
    Type: "City",
    Rank: 35,
    LocalizedName: "Abu Halifa",
    Country: {
      ID: "KW",
      LocalizedName: "Kuwait"
    },
    AdministrativeArea: {
      ID: "AH",
      LocalizedName: "Ahmadi"
    }
  },
  {
    Version: 1,
    Key: "251689",
    Type: "City",
    Rank: 35,
    LocalizedName: "Aba",
    Country: {
      ID: "NG",
      LocalizedName: "Nigeria"
    },
    AdministrativeArea: {
      ID: "AB",
      LocalizedName: "Abia"
    }
  },
  {
    Version: 1,
    Key: "254085",
    Type: "City",
    Rank: 40,
    LocalizedName: "Abuja",
    Country: {
      ID: "NG",
      LocalizedName: "Nigeria"
    },
    AdministrativeArea: {
      ID: "FC",
      LocalizedName: "Abuja Federal Capital Territory"
    }
  },
  {
    Version: 1,
    Key: "252672",
    Type: "City",
    Rank: 41,
    LocalizedName: "Abakaliki",
    Country: {
      ID: "NG",
      LocalizedName: "Nigeria"
    },
    AdministrativeArea: {
      ID: "EB",
      LocalizedName: "Ebonyi"
    }
  },
  {
    Version: 1,
    Key: "288447",
    Type: "City",
    Rank: 41,
    LocalizedName: "Abakan",
    Country: {
      ID: "RU",
      LocalizedName: "Russia"
    },
    AdministrativeArea: {
      ID: "KK",
      LocalizedName: "Khakasiya"
    }
  },
  {
    Version: 1,
    Key: "55491",
    Type: "City",
    Rank: 41,
    LocalizedName: "Abeche",
    Country: {
      ID: "TD",
      LocalizedName: "Chad"
    },
    AdministrativeArea: {
      ID: "OD",
      LocalizedName: "Ouaddaï"
    }
  }
];

export default cities;
