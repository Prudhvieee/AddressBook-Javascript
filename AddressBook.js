class Contact {
  // Constructor for the different fields of contact
  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
  }
  // Getter & Setter method
  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (firstNameRegex.test(firstName)) this._firstName = firstName;
    else throw "Invalid First name";
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (lastNameRegex.test(lastName)) this._lastName = lastName;
    else throw "Invalid last Name";
  }
  get address() {
    return this._address;
  }
  set address(address) {
    let addressRegex = RegExp("^[A-Za-z]{4,}$");
    if (addressRegex.test(address)) this._address = address;
    else throw "Invalid Address";
  }
  get city() {
    return this._city;
  }
  set city(city) {
    let cityRegex = RegExp("^[A-Za-z]{4,}$");
    if (cityRegex.test(city)) this._city = city;
    else throw "Invalid City name";
  }
  get state() {
    return this._state;
  }
  set state(state) {
    let stateRegex = RegExp("^[A-Za-z]{4,}$");
    if (stateRegex.test(state)) this._state = state;
    else throw "Invalid State name";
  }
  get zip() {
    return this._zip;
  }
  set zip(zip) {
    let zipRegex = RegExp("^[0-9]{3}[ ]?[0-9]{3}$");
    if (zipRegex.test(zip)) this._zip = this.zip;
    else throw "Invalid Zipcode";
  }
  get phoneNumber() {
    return this._phoneNumber;
  }
  set phoneNumber(phoneNumber) {
    let phoneNumberRegex = RegExp("^([0-9]{2}[ ])?[6-9]{1}[0-9]{9}$");
    if (phoneNumberRegex.test(phoneNumber)) this._phoneNumber = phoneNumber;
    else throw "Invalid Phone Number";
  }
  get email() {
    return this._email;
  }
  set email(email) {
    let emailRegex = RegExp(
      "^[a-z]{1}[a-z0-9]{2,}([._+-]?[a-z0-9]+)?[@]{1}[a-z1-9]+[.]{1}(co|net|com|gov)([.]{1}[a-z]{2,3})?$"
    );
    if (emailRegex.test(email)) this._email = email;
    else throw "Invalid Email";
  }
  //To string method for displaying contacts
  toString() {
    return (
      "First Name: " +
      this.firstName +
      " Last Name: " +
      this.lastName +
      " Address: " +
      this.address +
      " City: " +
      this.city +
      " State: " +
      this.state +
      " Zipcode: " +
      this.zip +
      " Phone Number: " +
      this.phoneNumber +
      " Email: " +
      this.email
    );
  }
}
// Created Address Book Array to store contacts.
let AddressBook = new Array();
//UC3 Add new contact.
function AddContact(
  firstName,
  lastName,
  address,
  city,
  state,
  zip,
  phoneNumber,
  email
) {
  try {
    let newcontact = new Contact(
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      phoneNumber,
      email
    );
    // UC7 Checks for Duplicate contacts.
    if (
      AddressBook.find(
        (person) =>
          person.firstName == newcontact.firstName &&
          person.email == newcontact.email
      )
    ) {
      throw "Contact Already Exists.";
    } else {
      AddressBook.push(newcontact);
      console.log("Contact Added Successfully.");
    }
  } catch (e) {
    console.error(e);
  }
}
// UC5 Delete Contact
function DeleteContact(firstName, mobileNumber) {
  for (let index = 0; index < AddressBook.length; index++) {
    if (
      AddressBook[index].firstName == firstName &&
      AddressBook[index].phoneNumber == mobileNumber
    ) {
      AddressBook.splice(index, 1);
    }
  }
}
// UC6 Gets Count of Contact in Address Book.
function CountContact() {
  let addressBookCount = AddressBook.reduce((count) => (count = count + 1), 0);
  console.log("Contact Count is: " + addressBookCount);
}
// UC8 Search by city and state
function SearchByCity(city) {
  let sortByCity = AddressBook.filter((contact) => contact.city == city);
  return sortByCity;
}
function SearchByState(state) {
  let sortByState = AddressBook.filter((contact) => contact.state == state);
  return sortByState;
}
// UC9 Displays Contact By City.
function ViewContactByCity() {
  AddressBook.filter((contact) =>
    contactsCityMap.set(contact.city, SearchByCity(contact.city))
  );
  return contactsCityMap;
}
// UC9 Displays Contact By State.
function ViewContactByState() {
  AddressBook.filter((contact) =>
    contactsStateMap.set(contact.state, SearchByState(contact.state))
  );
  return contactsStateMap;
}
// UC10 Get Contact Count by city.
function ContactCountByCity() {
  AddressBook.filter((contact) =>
    countCityMap.set(contact.city, SearchByCity(contact.city).length)
  );
  return countCityMap;
}
// UC10 Get Contact Count by state.
function ContactCountByState() {
  AddressBook.filter((contact) =>
    countStateMap.set(contact.state, SearchByState(contact.state).length)
  );
  return countStateMap;
}
// UC11 Sort Contacts by name.
function SortContactsByName() {
  AddressBook.sort((person1, person2) =>
    person1.firstName.localeCompare(person2.firstName)
  );
  console.log(AddressBook);
}
// UC12 Sort Contact by City, State and Zipcode.
function SortContact(property) {
  switch (property) {
    case "city":
      AddressBook.sort((person1, person2) =>
        person1.city.localeCompare(person2.city)
      );
      console.log(AddressBook);
      break;
    case "state":
      AddressBook.sort((person1, person2) =>
        person1.state.localeCompare(person2.state)
      );
      console.log(AddressBook);
      break;
    case "zip":
      AddressBook.sort((person1, person2) =>
        person1.zip.localeCompare(person2.zip)
      );
      console.log(AddressBook);
      break;
    default:
      console.log("Enter Valid Property.");
  }
}
function Main() {
  console.log("Welcome to address book");
  AddContact(
    "Prudhvi",
    "Reddy",
    "Tirupati",
    "Chittoor",
    "AndhraPradesh",
    "517 502",
    "91 7654321034",
    "prudhvi@gmail.com"
  );
  AddContact(
    "Joe",
    "Biden",
    "RedFort",
    "Delhi",
    "Delhi",
    "432 765",
    "91 7654321098",
    "bieden@gmail.com"
  );
  AddContact(
    "Sukhla",
    "Singh",
    "GhatRoad",
    "Kolkatta",
    "Kolkatta",
    "517 644",
    "91 8976532214",
    "sukhla@gmail.com"
  );
  //printing array
  AddressBook.forEach((contact) => console.log(contact.toString()));
  // UC4 Edit Contact by name.
  AddressBook.filter(
    (contact) =>
      contact.firstName == "Prudhvi" && contact.phoneNumber == "91 7654321034"
  ).forEach((contact) => {
    contact.address = "RajajiNagar";
    contact.city = "Banagalore";
    contact.state = "Karnataka";
  });
  AddressBook.forEach((contact) => console.log(contact.toString()));
  // UC5 Deletes the contact from AddressBook Array.
  DeleteContact("Prudhvi", "91 7654321034");
  AddressBook.forEach((contact) => console.log(contact.toString()));
  // UC8 Prints Contact by city.
  console.log(SearchByCity("Chittoor"));
  // UC8 Prints Contact by state.
  console.log(SearchByState("Delhi"));
  console.log("---- UC9 ViewsContacts By City----");
  console.log(ViewContactByCity());
  console.log("---- UC9 ViewsContacts By State----");
  console.log(ViewContactByState());
  console.log("----UC10 Contact count by City----");
  console.log(ContactCountByCity());
  console.log("----UC10 Contact count by State----");
  console.log(ContactCountByState());
}
// Map to Contacts in a city.
let contactsCityMap = new Map();
// Map to Contacts in a state.
let contactsStateMap = new Map();
// Map to get contacts count by city.
let countCityMap = new Map();
// Map to get contacts count by state.
let countStateMap = new Map();
Main();
CountContact();
SortContactsByName();
console.log("Contacts Sorted by City");
SortContact("city");
console.log("Contacts Sorted by State");
SortContact("state");