import { Button } from "../../../../components/ui/button";
import React, { useEffect, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useCreateStudentMutation } from "../../../../app/api/studentsApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Loader, Loader2 } from "lucide-react";
import { useGetAllClassesQuery } from "../../../../app/api/classApi";
import DatePicker from "react-datepicker";

// Example states and LGAs data (can be replaced with an API call)
const statesWithLgas = {
  Abia: [
    "Aba North",
    "Aba South",
    "Arochukwu",
    "Bende",
    "Ikwuano",
    "Isiala-Ngwa North",
    "Isiala-Ngwa South",
    "Isuikwato",
    "Obi Nwa",
    "Ohafia",
    "Osisioma",
    "Ngwa",
    "Ugwunagbo",
    "Ukwa East",
    "Ukwa West",
    "Umuahia North",
    "Umuahia South",
    "Umu-Neochi",
  ],
  Adamawa: [
    "Demsa",
    "Fufore",
    "Ganaye",
    "Gireri",
    "Gombi",
    "Guyuk",
    "Hong",
    "Jada",
    "Lamurde",
    "Madagali",
    "Maiha",
    "Mayo-Belwa",
    "Michika",
    "Mubi North",
    "Mubi South",
    "Numan",
    "Shelleng",
    "Song",
    "Toungo",
    "Yola North",
    "Yola South",
  ],
  Anambra: [
    "Aguata",
    "Anambra East",
    "Anambra West",
    "Anaocha",
    "Awka North",
    "Awka South",
    "Ayamelum",
    "Dunukofia",
    "Ekwusigo",
    "Idemili North",
    "Idemili south",
    "Ihiala",
    "Njikoka",
    "Nnewi North",
    "Nnewi South",
    "Ogbaru",
    "Onitsha North",
    "Onitsha South",
    "Orumba North",
    "Orumba South",
    "Oyi",
  ],
  "Akwa Ibom": [
    "Abak",
    "Eastern Obolo",
    "Eket",
    "Esit Eket",
    "Essien Udim",
    "Etim Ekpo",
    "Etinan",
    "Ibeno",
    "Ibesikpo Asutan",
    "Ibiono Ibom",
    "Ika",
    "Ikono",
    "Ikot Abasi",
    "Ikot Ekpene",
    "Ini",
    "Itu",
    "Mbo",
    "Mkpat Enin",
    "Nsit Atai",
    "Nsit Ibom",
    "Nsit Ubium",
    "Obot Akara",
    "Okobo",
    "Onna",
    "Oron",
    "Oruk Anam",
    "Udung Uko",
    "Ukanafun",
    "Uruan",
    "Urue-Offong/Oruko ",
    "Uyo",
  ],
  Bauchi: [
    "Alkaleri",
    "Bauchi",
    "Bogoro",
    "Damban",
    "Darazo",
    "Dass",
    "Ganjuwa",
    "Giade",
    "Itas/Gadau",
    "Jama'are",
    "Katagum",
    "Kirfi",
    "Misau",
    "Ningi",
    "Shira",
    "Tafawa-Balewa",
    "Toro",
    "Warji",
    "Zaki",
  ],
  Bayelsa: [
    "Brass",
    "Ekeremor",
    "Kolokuma/Opokuma",
    "Nembe",
    "Ogbia",
    "Sagbama",
    "Southern Jaw",
    "Yenegoa",
  ],
  Benue: [
    "Ado",
    "Agatu",
    "Apa",
    "Buruku",
    "Gboko",
    "Guma",
    "Gwer East",
    "Gwer West",
    "Katsina-Ala",
    "Konshisha",
    "Kwande",
    "Logo",
    "Makurdi",
    "Obi",
    "Ogbadibo",
    "Oju",
    "Okpokwu",
    "Ohimini",
    "Oturkpo",
    "Tarka",
    "Ukum",
    "Ushongo",
    "Vandeikya",
  ],
  Borno: [
    "Abadam",
    "Askira/Uba",
    "Bama",
    "Bayo",
    "Biu",
    "Chibok",
    "Damboa",
    "Dikwa",
    "Gubio",
    "Guzamala",
    "Gwoza",
    "Hawul",
    "Jere",
    "Kaga",
    "Kala/Balge",
    "Konduga",
    "Kukawa",
    "Kwaya Kusar",
    "Mafa",
    "Magumeri",
    "Maiduguri",
    "Marte",
    "Mobbar",
    "Monguno",
    "Ngala",
    "Nganzai",
    "Shani",
  ],
  "Cross River": [
    "Akpabuyo",
    "Odukpani",
    "Akamkpa",
    "Biase",
    "Abi",
    "Ikom",
    "Yarkur",
    "Odubra",
    "Boki",
    "Ogoja",
    "Yala",
    "Obanliku",
    "Obudu",
    "Calabar South",
    "Etung",
    "Bekwara",
    "Bakassi",
    "Calabar Municipality",
  ],
  Delta: [
    "Oshimili",
    "Aniocha",
    "Aniocha South",
    "Ika South",
    "Ika North-East",
    "Ndokwa West",
    "Ndokwa East",
    "Isoko south",
    "Isoko North",
    "Bomadi",
    "Burutu",
    "Ughelli South",
    "Ughelli North",
    "Ethiope West",
    "Ethiope East",
    "Sapele",
    "Okpe",
    "Warri North",
    "Warri South",
    "Uvwie",
    "Udu",
    "Warri Central",
    "Ukwani",
    "Oshimili North",
    "Patani",
  ],
  Ebonyi: [
    "Edda",
    "Afikpo",
    "Onicha",
    "Ohaozara",
    "Abakaliki",
    "Ishielu",
    "lkwo",
    "Ezza",
    "Ezza South",
    "Ohaukwu",
    "Ebonyi",
    "Ivo",
  ],
  Enugu: [
    "Enugu South,",
    "Igbo-Eze South",
    "Enugu North",
    "Nkanu",
    "Udi Agwu",
    "Oji-River",
    "Ezeagu",
    "IgboEze North",
    "Isi-Uzo",
    "Nsukka",
    "Igbo-Ekiti",
    "Uzo-Uwani",
    "Enugu Eas",
    "Aninri",
    "Nkanu East",
    "Udenu.",
  ],
  Edo: [
    "Esan North-East",
    "Esan Central",
    "Esan West",
    "Egor",
    "Ukpoba",
    "Central",
    "Etsako Central",
    "Igueben",
    "Oredo",
    "Ovia SouthWest",
    "Ovia South-East",
    "Orhionwon",
    "Uhunmwonde",
    "Etsako East",
    "Esan South-East",
  ],
  Ekiti: [
    "Ado",
    "Ekiti-East",
    "Ekiti-West",
    "Emure/Ise/Orun",
    "Ekiti South-West",
    "Ikere",
    "Irepodun",
    "Ijero,",
    "Ido/Osi",
    "Oye",
    "Ikole",
    "Moba",
    "Gbonyin",
    "Efon",
    "Ise/Orun",
    "Ilejemeje.",
  ],
  FCT: ["Abaji", "Abuja Municipal", "Bwari", "Gwagwalada", "Kuje", "Kwali"],
  Gombe: [
    "Akko",
    "Balanga",
    "Billiri",
    "Dukku",
    "Kaltungo",
    "Kwami",
    "Shomgom",
    "Funakaye",
    "Gombe",
    "Nafada/Bajoga",
    "Yamaltu/Delta.",
  ],
  Imo: [
    "Aboh-Mbaise",
    "Ahiazu-Mbaise",
    "Ehime-Mbano",
    "Ezinihitte",
    "Ideato North",
    "Ideato South",
    "Ihitte/Uboma",
    "Ikeduru",
    "Isiala Mbano",
    "Isu",
    "Mbaitoli",
    "Mbaitoli",
    "Ngor-Okpala",
    "Njaba",
    "Nwangele",
    "Nkwerre",
    "Obowo",
    "Oguta",
    "Ohaji/Egbema",
    "Okigwe",
    "Orlu",
    "Orsu",
    "Oru East",
    "Oru West",
    "Owerri-Municipal",
    "Owerri North",
    "Owerri West",
  ],
  Jigawa: [
    "Auyo",
    "Babura",
    "Birni Kudu",
    "Biriniwa",
    "Buji",
    "Dutse",
    "Gagarawa",
    "Garki",
    "Gumel",
    "Guri",
    "Gwaram",
    "Gwiwa",
    "Hadejia",
    "Jahun",
    "Kafin Hausa",
    "Kaugama Kazaure",
    "Kiri Kasamma",
    "Kiyawa",
    "Maigatari",
    "Malam Madori",
    "Miga",
    "Ringim",
    "Roni",
    "Sule-Tankarkar",
    "Taura",
    "Yankwashi",
  ],
  Kaduna: [
    "Birni-Gwari",
    "Chikun",
    "Giwa",
    "Igabi",
    "Ikara",
    "jaba",
    "Jema'a",
    "Kachia",
    "Kaduna North",
    "Kaduna South",
    "Kagarko",
    "Kajuru",
    "Kaura",
    "Kauru",
    "Kubau",
    "Kudan",
    "Lere",
    "Makarfi",
    "Sabon-Gari",
    "Sanga",
    "Soba",
    "Zango-Kataf",
    "Zaria",
  ],
  Kano: [
    "Ajingi",
    "Albasu",
    "Bagwai",
    "Bebeji",
    "Bichi",
    "Bunkure",
    "Dala",
    "Dambatta",
    "Dawakin Kudu",
    "Dawakin Tofa",
    "Doguwa",
    "Fagge",
    "Gabasawa",
    "Garko",
    "Garum",
    "Mallam",
    "Gaya",
    "Gezawa",
    "Gwale",
    "Gwarzo",
    "Kabo",
    "Kano Municipal",
    "Karaye",
    "Kibiya",
    "Kiru",
    "kumbotso",
    "Ghari",
    "Kura",
    "Madobi",
    "Makoda",
    "Minjibir",
    "Nasarawa",
    "Rano",
    "Rimin Gado",
    "Rogo",
    "Shanono",
    "Sumaila",
    "Takali",
    "Tarauni",
    "Tofa",
    "Tsanyawa",
    "Tudun Wada",
    "Ungogo",
    "Warawa",
    "Wudil",
  ],
  Katsina: [
    "Bakori",
    "Batagarawa",
    "Batsari",
    "Baure",
    "Bindawa",
    "Charanchi",
    "Dandume",
    "Danja",
    "Dan Musa",
    "Daura",
    "Dutsi",
    "Dutsin-Ma",
    "Faskari",
    "Funtua",
    "Ingawa",
    "Jibia",
    "Kafur",
    "Kaita",
    "Kankara",
    "Kankia",
    "Katsina",
    "Kurfi",
    "Kusada",
    "Mai'Adua",
    "Malumfashi",
    "Mani",
    "Mashi",
    "Matazuu",
    "Musawa",
    "Rimi",
    "Sabuwa",
    "Safana",
    "Sandamu",
    "Zango",
  ],
  Kebbi: [
    "Aleiro",
    "Arewa-Dandi",
    "Argungu",
    "Augie",
    "Bagudo",
    "Birnin Kebbi",
    "Bunza",
    "Dandi",
    "Fakai",
    "Gwandu",
    "Jega",
    "Kalgo",
    "Koko/Besse",
    "Maiyama",
    "Ngaski",
    "Sakaba",
    "Shanga",
    "Suru",
    "Wasagu/Danko",
    "Yauri",
    "Zuru",
  ],
  Kogi: [
    "Adavi",
    "Ajaokuta",
    "Ankpa",
    "Bassa",
    "Dekina",
    "Ibaji",
    "Idah",
    "Igalamela-Odolu",
    "Ijumu",
    "Kabba/Bunu",
    "Kogi",
    "Lokoja",
    "Mopa-Muro",
    "Ofu",
    "Ogori/Mangongo",
    "Okehi",
    "Okene",
    "Olamabolo",
    "Omala",
    "Yagba East",
    "Yagba West",
  ],
  Kwara: [
    "Asa",
    "Baruten",
    "Edu",
    "Ekiti",
    "Ifelodun",
    "Ilorin East",
    "Ilorin West",
    "Irepodun",
    "Isin",
    "Kaiama",
    "Moro",
    "Offa",
    "Oke-Ero",
    "Oyun",
    "Pategi",
  ],
  Lagos: [
    "Agege",
    "Ajeromi-Ifelodun",
    "Alimosho",
    "Amuwo-Odofin",
    "Apapa",
    "Badagry",
    "Epe",
    "Eti-Osa",
    "Ibeju/Lekki",
    "Ifako-Ijaye",
    "Ikeja",
    "Ikorodu",
    "Kosofe",
    "Lagos Island",
    "Lagos Mainland",
    "Mushin",
    "Ojo",
    "Oshodi-Isolo",
    "Shomolu",
    "Surulere",
  ],
  Nasarawa: [
    "Akwanga",
    "Awe",
    "Doma",
    "Karu",
    "Keana",
    "Keffi",
    "Kokona",
    "Lafia",
    "Nasarawa",
    "Nasarawa-Eggon",
    "Obi",
    "Toto",
    "Wamba",
  ],
  Niger: [
    "Agaie",
    "Agwara",
    "Bida",
    "Borgu",
    "Bosso",
    "Chanchaga",
    "Edati",
    "Gbako",
    "Gurara",
    "Katcha",
    "Kontagora",
    "Lapai",
    "Lavun",
    "Magama",
    "Mariga",
    "Mashegu",
    "Mokwa",
    "Muya",
    "Pailoro",
    "Rafi",
    "Rijau",
    "Shiroro",
    "Suleja",
    "Tafa",
    "Wushishi",
  ],
  Ogun: [
    "Abeokuta North",
    "Abeokuta South",
    "Ado-Odo/Ota",
    "Yewa North",
    "Yewa South",
    "Ewekoro",
    "Ifo",
    "Ijebu East",
    "Ijebu North",
    "Ijebu North East",
    "Ijebu Ode",
    "Ikenne",
    "Imeko-Afon",
    "Ipokia",
    "Obafemi-Owode",
    "Ogun Waterside",
    "Odeda",
    "Odogbolu",
    "Remo North",
    "Shagamu",
  ],
  Ondo: [
    "Akoko North East",
    "Akoko North West",
    "Akoko South Akure East",
    "Akoko South West",
    "Akure North",
    "Akure South",
    "Ese-Odo",
    "Idanre",
    "Ifedore",
    "Ilaje",
    "Ile-Oluji",
    "Okeigbo",
    "Irele",
    "Odigbo",
    "Okitipupa",
    "Ondo East",
    "Ondo West",
    "Ose",
    "Owo",
  ],
  Osun: [
    "Aiyedade",
    "Aiyedire",
    "Atakumosa East",
    "Atakumosa West",
    "Boluwaduro",
    "Boripe",
    "Ede North",
    "Ede South",
    "Egbedore",
    "Ejigbo",
    "Ife Central",
    "Ife East",
    "Ife North",
    "Ife South",
    "Ifedayo",
    "Ifelodun",
    "Ila",
    "Ilesha East",
    "Ilesha West",
    "Irepodun",
    "Irewole",
    "Isokan",
    "Iwo",
    "Obokun",
    "Odo-Otin",
    "Ola-Oluwa",
    "Olorunda",
    "Oriade",
    "Orolu",
    "Osogbo",
  ],
  Oyo: [
    "Afijio",
    "Akinyele",
    "Atiba",
    "Atisbo",
    "Egbeda",
    "Ibadan Central",
    "Ibadan North",
    "Ibadan North West",
    "Ibadan South East",
    "Ibadan South West",
    "Ibarapa Central",
    "Ibarapa East",
    "Ibarapa North",
    "Ido",
    "Irepo",
    "Iseyin",
    "Itesiwaju",
    "Iwajowa",
    "Kajola",
    "Lagelu Ogbomosho North",
    "Ogbomosho South",
    "Ogo Oluwa",
    "Olorunsogo",
    "Oluyole",
    "Ona-Ara",
    "Orelope",
    "Ori Ire",
    "Oyo East",
    "Oyo West",
    "Saki East",
    "Saki West",
    "Surulere",
  ],
  Plateau: [
    "Barikin Ladi",
    "Bassa",
    "Bokkos",
    "Jos East",
    "Jos North",
    "Jos South",
    "Kanam",
    "Kanke",
    "Langtang North",
    "Langtang South",
    "Mangu",
    "Mikang",
    "Pankshin",
    "Qua'an Pan",
    "Riyom",
    "Shendam",
    "Wase",
  ],
  Rivers: [
    "Abua/Odual",
    "Ahoada East",
    "Ahoada West",
    "Akuku Toru",
    "Andoni",
    "Asari-Toru",
    "Bonny",
    "Degema",
    "Emohua",
    "Eleme",
    "Etche",
    "Gokana",
    "Ikwerre",
    "Khana",
    "Obio/Akpor",
    "Ogba/Egbema/Ndoni",
    "Ogu/Bolo",
    "Okrika",
    "Omumma",
    "Opobo/Nkoro",
    "Oyigbo",
    "Port-Harcourt",
    "Tai",
  ],
  Sokoto: [
    "Binji",
    "Bodinga",
    "Dange-shnsi",
    "Gada",
    "Goronyo",
    "Gudu",
    "Gawabawa",
    "Illela",
    "Isa",
    "Kware",
    "kebbe",
    "Rabah",
    "Sabon birni",
    "Shagari",
    "Silame",
    "Sokoto North",
    "Sokoto South",
    "Tambuwal",
    "Tqngaza",
    "Tureta",
    "Wamako",
    "Wurno",
    "Yabo",
  ],
  Taraba: [
    "Ardo-kola",
    "Bali",
    "Donga",
    "Gashaka",
    "Cassol",
    "Ibi",
    "Jalingo",
    "Karin-Lamido",
    "Kurmi",
    "Lau",
    "Sardauna",
    "Takum",
    "Ussa",
    "Wukari",
    "Yorro",
    "Zing",
  ],
  Yobe: [
    "Bade",
    "Bursari",
    "Damaturu",
    "Fika",
    "Fune",
    "Geidam",
    "Gujba",
    "Gulani",
    "Jakusko",
    "Karasuwa",
    "Karawa",
    "Machina",
    "Nangere",
    "Nguru Potiskum",
    "Tarmua",
    "Yunusari",
    "Yusufari",
  ],
  Zamfara: [
    "Anka",
    "Bakura",
    "Birnin Magaji",
    "Bukkuyum",
    "Bungudu",
    "Gummi",
    "Gusau",
    "Kaura",
    "Namoda",
    "Maradun",
    "Maru",
    "Shinkafi",
    "Talata Mafara",
    "Tsafe",
    "Zurmi",
  ],
};

const AddStudent = () => {
  const navigate = useNavigate();
  const { data, isLoading: isClassLoading } = useGetAllClassesQuery();
  const [createStudent, { isLoading, isSuccess, error }] =
    useCreateStudentMutation();
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [classId, setClassId] = useState();
  const [age, setAge] = useState();
  const [lgas, setLgas] = useState([]); // Local Governments based on selected state

  // Handle state selection to update LGAs
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setStudentDetails((prevValue) => ({
      ...prevValue,
      stateOfOrigin: selectedState,
      lgaOfOrigin: "", // Reset LGA when state changes
    }));
    setLgas(statesWithLgas[selectedState] || []);
  };

  useEffect(() => {
    if (error) {
      toast.error(error.data.message);
    }

    if (isSuccess) {
      toast.success("Student Created Successfully");
      navigate("/admin/students");
    }
  }, [isSuccess]);

  const [studentDetails, setStudentDetails] = useState({
    studentId: "",
    firstName: "",
    middleName: "",
    otherNames: "",
    studentClass: "",
    parentsNumber: "",
    gender: "",
    stateOfOrigin: "",
    lgaOfOrigin: "",
    parentsAddress: "",
    medicalReport: "string",
    birthCertificate: "string",
    picture: "string",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudentDetails((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const formatDateOfBirth = dateOfBirth.toISOString().split("T")[0];
  const numAge = Number(age);
  const numClassId = Number(classId);

  const handleSubmit = (e) => {
    e.preventDefault();
    createStudent({
      ...studentDetails,
      dateOfBirth: formatDateOfBirth,
      classId: numClassId,
      age: numAge,
    });
  };

  // console.log(studentDetails)

  return (
    <section className=" max-w-7xl mx-auto">
      <div className="bg-white  min-h-screen px-4 sm:px-10 py-6 flex flex-col gap-6">
        {/* heading */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACUCAMAAADMOLmaAAAAMFBMVEXk5ueutLeqsbTP09Xn6erh4+THy83Bxsi6v8LV2NqyuLu2u77c3+DY29zLz9GorrLvMsi2AAADuUlEQVR4nO2b2Y7rIAxAWUxYk/z/3w7JbaetOm3AJDbS5Wg029ORCcbBrhCDwWAwGAwGg8FgMBgM/m8AhDHb1/Zbd2SnWU/WbVg7+dSdpLdBSqWU3L/nH8Em0Y0kpCWsm9sLag2L6cIRjJVvejfJMPEvNojpPXxPjkozrzXM8Yvf7uhYlxr0gd++1J5R0R4LZtaFyw/KBHMYJ54oGlcomBUthyKUC24LTa9YvMQ3NLViyS5+ZSZWNJV++aCmFYRYbUi7W2CpXeONmdAwBYSgjHRBhAkTQrkSHn8rRlBKR+WHDKGkS4oG9RTKbTvTCIJGCmZFQ6NYed49G9IUOfXHyQOahDMjd/IexEQgiN/JGxS7GbA7eY8hxYMILSEkSdqpyTBen2/ANxmG67dKfXH9yvUlGCxNgspfb9iUbHIFRmDYfQzxpzKVYf+r3P9OwVeHOwTZpvuM3f+pJ0Rb5UBg2FZ9UVyN9F/BCt/7W0DTm1SgeaXv/m20oUJcSRa55VaE6moJX96QXbcb5G6ORH7oICrCpgrulpgo1eygzhWC0vAZhCDR9eaduT6IRLebd6o7Koq8D17VGuVpMcPRhMOLIEuD2ZQrKsfSpAdRqki9jR8UzhHwLPGNkuNPsY2KbIAPRxNBMTEPLRn7rdBR68Q/nQbJfZxMk7wjVXcAvFV/OK7BUk9ffATE2wSiUk6bfkYkxT5l6ifnYgwxOmcnD/yTh2/APqlrTDKiO72bkHmQ/9j+24NntjDJ68VaF0PYp3SVDGFf6UXPhtkSIGn7EHvNNP8miqNbZp7x7PzIzYuT32Zgf5P2GiZPPfoMIsdO/pUEP1iqHEtDFsqcV1yF3V0yn9AkGRLEPIVqvV9L5y92BJjjp0O40DFcOaANRoeG+9e7pJouqscAdN3r3WfHcE1J5mve7Q45/UMNkNpaom+s8dxbHFiOin0E7rwtAym2b5B3ts9dnCSomxLMN0d7ThhPfgJfFE94EYSK6X+MYvOVWH4ErxTcaOsPNLa7i1hb7kxgvtxPNrUIwFMINtx+AuKuGseKUwRc0wSFQm2XiivWdjAD+ZU36c1Uny64z3fgqW/sJlI/WZ9zqNdY1k7kg76i3DqgqqOBnhNooSblUG+TGxWbhSWEOSkWB5EphBVN/La5+gZKy1mKovADhaUiOC7B0gnPVP+Jy7Moez9lXOTSLmrbwHUjRTHkewxzSiw6nDlDWDTyjh07O4WilyrGjSKLMiIsq2Kk4OCDWbNS8BzuHUM2SgQHg8HgCn4AIlEx+zn49rYAAAAASUVORK5CYII="
              alt="img"
              className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] rounded-full"
            />

            <div className="flex flex-col gap-1">
              <h2 className="text-sm sm:text-[16px]">Profile Picture</h2>
              <p className="text-gray-500 text-sm">PNG, JPEG, e.t.c</p>
            </div>
          </div>

          <div>
            <Button variant="outline">Upload Image</Button>
          </div>
        </div>

        {/* body */}

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <h2 className="text-[18px]">Add Student Information</h2>

          <div className="w-full border border-gray-200 p-4 flex flex-col gap-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={studentDetails.firstName}
                  onChange={handleChange}
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="middleName" className="text-sm">
                  Middle Name
                </label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={studentDetails.middleName}
                  onChange={handleChange}
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="otherName" className="text-sm">
                  Other Name
                </label>
                <input
                  type="text"
                  id="otherName"
                  name="otherNames"
                  value={studentDetails.otherNames}
                  onChange={handleChange}
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              <div className="flex flex-col gap-2">
                <label htmlFor="age" className="text-sm">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="studentClass" className="text-sm">
                  Class
                </label>

                <select
                  name="classId"
                  onChange={(e) => setClassId(e.target.value)}
                  className="text-sm text-gray-600 px-4 py-2 outline-none border border-gray-300 rounded-lg"
                >
                  {isClassLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <option>Select Class</option>
                      {data.map((classes) => (
                        <option value={classes.id} key={classes.id}>
                          {classes.name}
                        </option>
                      ))}
                    </>
                  )}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="parentsNumber" className="text-sm">
                  Parents Number
                </label>
                <input
                  type="text"
                  id="parentsNumber"
                  name="parentsNumber"
                  value={studentDetails.parentsNumber}
                  onChange={handleChange}
                  placeholder="+234"
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* second row */}
            <div className="grid   gap-6 grid-cols-12 ">
              <div className="flex flex-col gap-2 col-span-6">
                <label htmlFor="dateOfBirth" className="text-sm">
                  Date of Birth
                </label>
                <DatePicker
                  selected={dateOfBirth}
                  onChange={(date) => setDateOfBirth(date)}
                  dateFormat={"MM/dd/yyyy"}
                  timeInputLabel="Time"
                  wrapperClassName="date-picker"
                  placeholderText="Start Date"
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-6">
                <label htmlFor="gender" className="text-sm">
                  Gender
                </label>
                <select
                  name="gender"
                  value={studentDetails.gender}
                  onChange={handleChange}
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                >
                  <option></option>
                  <option value={"male"}>male</option>
                  <option value={"female"}>female</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 col-span-6">
                <label htmlFor="stateOfOrigin" className="text-sm">
                  State of Origin
                </label>
                <select
                  name="stateOfOrigin"
                  value={studentDetails.stateOfOrigin}
                  onChange={handleStateChange}
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                >
                  <option value="">Select State</option>
                  {Object.keys(statesWithLgas).map((state) => (
                    <option value={state} key={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2 col-span-6">
                <label htmlFor="lgaOfOrigin" className="text-sm">
                  Local Government
                </label>
                <select
                  name="lgaOfOrigin"
                  value={studentDetails.lgaOfOrigin}
                  onChange={handleChange}
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                  disabled={!lgas.length}
                >
                  <option value="">Select LGA</option>
                  {lgas.map((lga) => (
                    <option value={lga} key={lga}>
                      {lga}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2 col-span-6">
                <label htmlFor="parentsAddress" className="text-sm">
                  Parents Address
                </label>
                <input
                  type="text"
                  id="parentsAddress"
                  name="parentsAddress"
                  value={studentDetails.parentsAddress}
                  onChange={handleChange}
                  placeholder=""
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-6">
                <label htmlFor="password" className="text-sm">
                  Default Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={studentDetails.password}
                  onChange={handleChange}
                  placeholder=""
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="flex  gap-6 justify-between items-center mt-6">
            <div className=" w-[400px] border border-gray-300 p-6 rounded-lg flex justify-center items-center flex-col gap-2">
              <input type="file" className="hidden" />

              <AiOutlineCloudUpload size={30} className="cursor-pointer" />
              <p className="text-sm">Upload Birth Certificate</p>
            </div>

            <div className=" w-[400px] border border-gray-300 p-6 rounded-lg flex justify-center items-center flex-col gap-2">
              <input type="file" className="hidden" />

              <AiOutlineCloudUpload size={30} className="cursor-pointer" />
              <p className="text-sm">Upload Medical Report</p>
            </div>
          </div>

          <Button className="mt-4 bg-[#4a3aff] hover:bg-[#5144e3]">
            {isLoading ? <Loader className="animate-spin" /> : "Add Student"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default AddStudent;
