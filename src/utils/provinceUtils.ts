export const getTelehealthLinks = (province: string) => {
  switch (province) {
    case "NS":
      return {
        maple: "https://www.getmaple.ca/nova-scotia-online-doctors/",
        felix: "https://www.felixforyou.ca/",
      };
    default:
      return {
        maple: "https://www.getmaple.ca",
        felix: "https://www.felixforyou.ca",
      };
  }
};

export const getDoctorFinderLink = (province: string) => {
  const links: Record<string, string> = {
    BC: "https://www.healthlinkbc.ca/health-services/search-services-your-area",
    ON: "https://doctors.cpso.on.ca/",
    AB: "https://search.cpsa.ca/physiciansearch",
    QC: "https://www.ramq.gouv.qc.ca/en/citizens/health-insurance/finding-doctor",
    NS: "https://findaprimarycareprovider.novascotia.ca/",
    NB: "https://www2.gnb.ca/content/gnb/en/departments/health/Hospital-Services/content/Patient_Connect_NB.html",
    MB: "https://www.gov.mb.ca/health/familydoctorfinder/",
    SK: "https://www.saskhealthauthority.ca/your-health/find-doctor",
    PE: "https://www.princeedwardisland.ca/en/information/health-pei/patient-registry-program",
    NL: "https://findadoctornl.ca/",
    YT: "https://yukon.ca/en/health-and-wellness/care-services/find-family-doctor-or-specialist",
    NT: "https://www.hss.gov.nt.ca/en/services/nwt-online-health-services",
    NU: "https://www.gov.nu.ca/health/information/health-centres"
  };
  return links[province] || "https://www.canada.ca/en/health-canada/services/health-care-system/primary-health-care.html";
};

export const provinceSpecificInfo: Record<string, { title: string; description: string }> = {
  BC: {
    title: "BC HealthLink",
    description: "Access BC's health information line and provincial health services",
  },
  ON: {
    title: "Service Ontario Health",
    description: "Find OHIP services and healthcare providers in Ontario",
  },
  AB: {
    title: "Alberta Health Services",
    description: "Connect with Alberta's healthcare system and find local resources",
  },
  QC: {
    title: "Santé Québec",
    description: "Access Quebec's healthcare services and find local clinics",
  },
  NS: {
    title: "Nova Scotia Health",
    description: "Navigate Nova Scotia's healthcare system and services",
  },
  NB: {
    title: "New Brunswick Health",
    description: "Access New Brunswick's healthcare services and programs",
  },
  MB: {
    title: "Manitoba Health",
    description: "Find Manitoba health services and local care providers",
  },
  SK: {
    title: "Saskatchewan Health Authority",
    description: "Connect with Saskatchewan's healthcare services",
  },
  PE: {
    title: "Health PEI",
    description: "Access Prince Edward Island's health services",
  },
  NL: {
    title: "Newfoundland and Labrador Health",
    description: "Find healthcare services in Newfoundland and Labrador",
  },
  YT: {
    title: "Yukon Health",
    description: "Access Yukon's healthcare services and programs",
  },
  NT: {
    title: "Northwest Territories Health",
    description: "Connect with Northwest Territories health services",
  },
  NU: {
    title: "Nunavut Health",
    description: "Find healthcare services in Nunavut",
  },
};