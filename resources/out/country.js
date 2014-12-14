
var dic_country=[];
var dic_country_mediterranean = ["Akrotiri", "mediterranean", "Cyprus", "mediterranean", "Czech Republic"];
var dic_country_caribbean = ["Cuba", "caribbean", "Dominica", "caribbean", "Dominican Republic", "Ecuador", "Jamaica", "caribbean", "Jan Mayen"];
var dic_country_oceania = ["Australia", "oceania", "Guam", "oceania", "Indonesia", "asia oceania", "New Zealand", "oceania", "Papua New Guinea", "oceania", "Paracel Islands", "Paraguay", "Philippines", "oceania", "Pitcairn Islands", "Samoa", "oceania", "San Marino", "Sao Tome and Principe", "Solomon Islands", "oceania"];
var dic_country_eurasia = ["Russia", "europe asia eurasia"];
var dic_country_africa = ["Democratic Republic of the Congo", "africa", "Republic of the Congo", "africa", "Cook Islands", "Coral Sea Islands", "Egypt", "africa", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands", "Faroe Islands", "Fiji", "Ghana", "africa", "Gibraltar", "Glorioso Islands", "Kenya", "africa", "Kiribati", "Libya", "africa", "Liechtenstein", "Madagascar", "africa", "Malawi", "Morocco", "africa", "Mozambique", "Namibia", "Nauru", "Navassa Island", "Niger", "africa", "Nigeria", "africa", "Niue", "Norfolk Island", "Northern Mariana Islands", "Rwanda", "africa", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Somalia", "africa", "South Africa", "africa", "South Georgia and the South Sandwich Islands", "Sudan", "africa", "Suriname", "Svalbard", "Swaziland"];
var dic_country_middleeast = ["Afghanistan", "asia middleeast", "Iran", "middleeast", "Iraq", "middleeast", "Israel", "middleeast", "Pakistan", "middleeast", "Palau", "Saudi Arabia", "middleeast", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Syria", "middleeast", "United Arab Emirates", "middleeast"];
var dic_country_southamerica = ["Argentina", "southamerica", "Armenia", "Aruba", "Ashmore and Cartier Islands", "Brazil", "southamerica", "British Indian Ocean Territory", "British Virgin Islands", "Brunei", "Chile", "southamerica", "Colombia", "southamerica", "Comoros", "Peru", "southamerica"];
var dic_country_asia = ["Afghanistan", "asia middleeast", "Cambodia", "asia", "Cameroon", "China", "asia", "Christmas Island", "Clipperton Island", "Cocos Islands", "Hong Kong", "asia", "India", "asia", "Indonesia", "asia oceania", "Japan", "asia", "Jersey", "Jordan", "Juan de Nova Island", "Kazakhstan", "North Korea", "asia", "South Korea", "asia", "Kuwait", "Kyrgyzstan", "asia", "Laos", "Malaysia", "asia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mongolia", "asia", "Montserrat", "Nepal", "asia", "Russia", "europe asia eurasia", "Singapore", "asia", "Taiwan", "asia", "Tajikistan", "Tanzania", "Thailand", "asia", "TimorLeste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tromelin Island", "Tunisia"];
var dic_country_europe = ["Albania", "europe", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Austria", "europe", "Azerbaijan", "The Bahamas", "Bahrain", "Bangladesh", "Barbados", "Bassas da India", "Belarus", "Belgium", "europe", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Bulgaria", "europe", "Burkina Faso", "Burma", "Burundi", "Denmark", "europe", "Dhekelia", "Djibouti", "Finland", "europe", "France", "europe", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon", "The Gambia", "Gaza Strip", "Georgia", "Germany", "europe", "Greece", "europe", "Greenland", "Grenada", "Guadeloupe", "Hungary", "europe", "Iceland", "Ireland", "europe", "Isle of Man", "Italy", "europe", "Latvia", "europe", "Lebanon", "Lesotho", "Liberia", "Lithuania", "europe", "Luxembourg", "europe", "Macau", "Macedonia", "Netherlands", "europe", "Netherlands Antilles", "New Caledonia", "Norway", "europe", "Oman", "Poland", "europe", "Portugal", "europe", "Puerto Rico", "Qatar", "Reunion", "Romania", "europe", "Russia", "europe asia eurasia", "Slovakia", "europe", "Slovenia", "europe", "Spain", "europe", "Spratly Islands", "Sri Lanka", "Sweden", "europe", "Switzerland", "europe", "Turkey", "europe", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Kingdom", "europe"];
var dic_country_northamerica = ["Canada", "northamerica", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Mexico", "northamerica", "Federated States of Micronesia", "Moldova", "Monaco", "United States", "northamerica", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wake Island", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Zambia"];
var dic_country_centralamerica = ["Costa Rica", "centralamerica", "Cote d'Ivoire", "Croatia", "Guatemala", "centralamerica", "Guernsey", "Guinea", "GuineaBissau", "Guyana", "Haiti", "centralamerica", "Heard Island and McDonald Islands", "Holy See", "Honduras", "centralamerica", "Nicaragua", "centralamerica", "Panama", "centralamerica"];
dic_country = dic_country.concat(dic_country_mediterranean,dic_country_caribbean,dic_country_oceania,dic_country_eurasia,dic_country_africa,dic_country_middleeast,dic_country_southamerica,dic_country_asia,dic_country_europe,dic_country_northamerica,dic_country_centralamerica);