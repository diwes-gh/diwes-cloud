OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Mislykkedes med at rydde delingerne.",
    "Failed to delete the server configuration" : "Kunne ikke slette server konfigurationen",
    "Invalid configuration: Anonymous binding is not allowed." : "Ugyldig konfiguration: Anonym binding er ikke tilladt.",
    "Valid configuration, connection established!" : "Gyldig konfiguration, forbindelse etableret!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Gyldig konfiguration, men forbindelsen mislykkedes. Tjek venligst serverens indstillinger og brugeroplysninger.",
    "Invalid configuration. Please have a look at the logs for further details." : "Ikke gyldig konfiguration. Kig venligst på logfilerne for mere information.",
    "No action specified" : "Der er ikke angivet en handling",
    "No configuration specified" : "Der er ikke angivet en konfiguration",
    "No data specified" : "Der er ikke angivet data",
    " Could not set configuration %s" : "Kunne ikke indstille konfigurationen %s",
    "Action does not exist" : "Handlingen findes ikke",
    "Renewing …" : "Fornyer...",
    "Very weak password" : "Meget svagt password",
    "Weak password" : "Svagt password",
    "So-so password" : "Jævnt password",
    "Good password" : "Godt password",
    "Strong password" : "Stærkt password",
    "The Base DN appears to be wrong" : "Base DN'et ser ud til at være forkert",
    "Testing configuration…" : "Tester konfiguration...",
    "Configuration incorrect" : "Konfigurationen er ikke korrekt",
    "Configuration incomplete" : "Konfigurationen er ikke komplet",
    "Configuration OK" : "Konfigurationen er OK",
    "Select groups" : "Vælg grupper",
    "Select object classes" : "Vælg objektklasser",
    "Please check the credentials, they seem to be wrong." : "Tjek venligst brugeroplysningerne - de ser ud til at være forkerte.",
    "Please specify the port, it could not be auto-detected." : "Angiv venligst porten - den kunne ikke registreres automatisk.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Base DN kunne ikke registreres automatisk - gennemse venligst brugeroplysningerne, vært og port.",
    "Could not detect Base DN, please enter it manually." : "Kunne ikke registrere Base DN - angiv den venligst manuelt.",
    "{nthServer}. Server" : "{nthServer}. server",
    "No object found in the given Base DN. Please revise." : "Intet objekt fundet i den givne Base DN. Gennemse venligst.",
    "More than 1,000 directory entries available." : "Mere end 1.000 mappeposter tilgængelige",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["{objectsFound} objekter tilgængelige indenfor den angivne Base DN","{objectsFound} objekter tilgængelige indenfor den angivne Base DN"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Der opstod en fejl. Tjek venligst Base DN, såvel som forbindelsesindstillingerne og brugeroplysningerne.",
    "Do you really want to delete the current Server Configuration?" : "Ønsker du virkelig at slette den nuværende Server Konfiguration?",
    "Confirm Deletion" : "Bekræft sletning",
    "Mappings cleared successfully!" : "Tilknytningerne blev ryddet af vejen!",
    "Error while clearing the mappings." : "Fejl under rydning af tilknytninger.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Anonyme bindinger tillades ikke. Angiv venligst et User DN og adgangskode.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "LDAP-driftsfejl. Anonyme bindinger tillades muligvis ikke.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Lagringen mislykkedes. Sørg venligst for at databasen er i drift. Genindlæs for der fortsættes.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Skift af tilstanden vil betyde aktivering af automatiske LDAP-forespørgsler. Afhængig af størrelsen på din LDAP, vil det kunne tage noget tid. Ønsker du stadig at ændre tilstanden?",
    "Mode switch" : "Skift af tilstand",
    "Select attributes" : "Vælg attributter",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Bruger blev ikke fundet. Tjek venligst dine login-attributter og brugernavnet. Gældende filter (til kopiér-og-indsæt for validering via kommandolinje): <br/>",
    "User found and settings verified." : "Bruger blev fundetog indstillingerne bekræftet.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Overvej at lave en mere præcis søgning pga. den rammer mange brugere og kun den første er i stand til at logge ind.",
    "An unspecified error occurred. Please check log and settings." : "Der skete en uspecificeret fejl . Tjek log og indstillinger.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Søgefilteret er ugyldigt - sandsynligvis på grund af problemer med syntaksen, såsom et ulige antal åbne og lukkede parenteser. Gennemse venligst. ",
    "Please provide a login name to test against" : "Angiv venligst et loginnavn for at teste mod",
    "Password change rejected. Hint: " : "Kodeord ændring afvist. Hint:",
    "Please login with the new password" : "Log venligst ind med dit nye password",
    "LDAP User backend" : "LDAP Bruger-backend",
    "Your password will expire tomorrow." : "Dit password udløber i morgen.",
    "Your password will expire today." : "Dit password udløber i dag.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["Dit password udløber om en dag.","Dit password udløber om %n dage."],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Kunne ikke registrere navneattributten for visning af bruger. Angiv den venligst selv i de avancerede LDAP-indstillinger.",
    "Could not find the desired feature" : "Fandt ikke den ønskede funktion",
    "Invalid Host" : "Ugyldig vært",
    "LDAP user and group backend" : "LDAP bruger og gruppe backend",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "Denne applikation tillader administrator at forbinde Nextcloud til et LDAP bruger kartotek",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "Denne applikation tillader administrator at forbinde Nextcloud til et LDAP bruger kartotek som foretager godkendelse og overførsel af brugere, grupper og bruger egenskaber. Adminstrator kan via LDAP bruger græsnsefladen konfigurere denne applikation til at forbinde til et eller flere LDAP kartoteker eller Active Directories. Egenskaber så som bruger kvota, email, avatar billeder, gruppe tilhørsforhold og andet kan blive overført til nextcloud fra et bibliotek med med de korrekte forspørgsler og filtre. \n\nEn bruger logger ind i Nextcloud med deres LDAP eller AD legitimation og får adgang baseret på en legitimationsforspørgsel håndteret til den tilsluttede LDAP eller AD server. Nextcloud gemmer ikke LDAP eller AD password, men bruger disse til at legitimere en bruger og opsætter en bruger ID for brugerens ophold. Mere information er tilgængelig i LDAP bruger og Group Backend dokumentationen.",
    "Test Configuration" : "Test konfigurationen",
    "Help" : "Hjælp",
    "Groups meeting these criteria are available in %s:" : "Grupper som opfylder disse kriterier er tilgængelige i %s:",
    "Only these object classes:" : "Kun disse objektklasser:",
    "Only from these groups:" : "Kun fra disse grupper:",
    "Search groups" : "Søg grupper",
    "Available groups" : "Tilgængelige grupper",
    "Selected groups" : "Valgte grupper",
    "Edit LDAP Query" : "Redigér LDAP-forespørgsel",
    "LDAP Filter:" : "LDAP-filter:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Filteret angiver hvilke LDAP-grupper, der skal have adgang til instansen %s.",
    "Verify settings and count the groups" : "Verificér indstillinger og optællingsgrupper",
    "When logging in, %s will find the user based on the following attributes:" : "Når der logges ind, så vil %s finde brugeren baseret på følgende attributter:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "Tillader login mod en e-mailattribut. Mail og \"mailPrimaryAddress\" vil være tilladt.",
    "Other Attributes:" : "Andre attributter:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Definerer filtret der anvendes, når der er forsøg på at logge ind. \"%%uid\" erstattter brugernavnet i login-handlingen. Eksempel: \"uid=%%uid\"",
    "Test Loginname" : "Test loginnavn",
    "Verify settings" : "Kontrollér indstillinger",
    "%s. Server:" : "%s. server:",
    "Add a new configuration" : "Tilføj en ny konfiguration",
    "Copy current configuration into new directory binding" : "Kopiér nuværende konfiguration ind i en ny mappetilknytning",
    "Delete the current configuration" : "Slet den aktuelle konfiguration",
    "Host" : "Vært",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "Du kan udelade protokollen, medmindre du skal bruge SSL. Start i så fald med ldaps://",
    "Port" : "Port",
    "Detect Port" : "Registrér port",
    "User DN" : "Bruger DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN'et for klientbrugeren, for hvilken forbindelsen skal foretages, eks. uid=agent,dc=eksempel,dc=com. For anonym adgang lades DN og Password stå tomme.",
    "Password" : "Kodeord",
    "For anonymous access, leave DN and Password empty." : "For anonym adgang, skal du lade DN og Adgangskode tomme.",
    "Save Credentials" : "Gem brugeroplysninger",
    "One Base DN per line" : "Ét Base DN per linje",
    "You can specify Base DN for users and groups in the Advanced tab" : "Du kan specificere base DN for brugere og grupper i fanen Advanceret",
    "Detect Base DN" : "Registrér Base DN",
    "Test Base DN" : "Test Base DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Undgår automatiske LDAP-forespørgsler. Bedre på større opsætninger, men kræver en del LDAP-kendskab.",
    "Manually enter LDAP filters (recommended for large directories)" : "Angiv LDAP-filtre manuelt (anbefales til større kataloger)",
    "Listing and searching for users is constrained by these criteria:" : "Listning og søgning af brugere er begrænset af følgende kriterier:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "De fleste gængse objektklasser for brugere er organizationalPerson, person, user og inetOrgPerson. Hvis du ikker er sikker på hvilken objektklasse, der skal vælges, så tal med administratoren af dit katalog.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Filteret angiver hvilke LDAP-brugere, der skal have adgang til %s-instansen.",
    "Verify settings and count users" : "Kontrollér indstillinger og optalte brugere",
    "Saving" : "Gemmer",
    "Back" : "Tilbage",
    "Continue" : "Videre",
    "Please renew your password." : "Nulstil venligst dit password.",
    "An internal error occurred." : "Der opstod en intern fejl.",
    "Please try again or contact your administrator." : "Prøv venligst igen eller kontakt din administrator.",
    "Current password" : "Nuværende password",
    "New password" : "Nyt password",
    "Renew password" : "Forny venligst password",
    "Wrong password." : "Forkert password.",
    "Cancel" : "Annullér",
    "Server" : "Server",
    "Users" : "Brugere",
    "Login Attributes" : "Login-attributter",
    "Groups" : "Grupper",
    "Expert" : "Ekspert",
    "Advanced" : "Avanceret",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Advarsel:</b> PHP-modulet LDAP er ikke installeret - backend'en vil ikke fungere. Anmod venligst din systemadministrator om at installere det.",
    "Connection Settings" : "Forbindelsesindstillinger ",
    "Configuration Active" : "Konfiguration er aktiv",
    "When unchecked, this configuration will be skipped." : "Hvis der ikke er markeret, så springes denne konfiguration over.",
    "Backup (Replica) Host" : "Vært for sikkerhedskopier (replika)",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Angiv valgfrit en vært for sikkerhedskopiering. Dette skal være en replikering af den primære LDAP/AD-server.",
    "Backup (Replica) Port" : "Port for sikkerhedskopi (replika)",
    "Disable Main Server" : "Deaktivér hovedserver",
    "Only connect to the replica server." : "Forbind kun til replika serveren.",
    "Turn off SSL certificate validation." : "Deaktivér validering af SSL-certifikat.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Anbefales ikke - bruges kun til testformål! Hvis forbindelse udelukkende fungerer med dette tilvalg, så importér LDAP-serverens SSL-certifikat i din %s-server.",
    "Cache Time-To-Live" : "Cache levetid",
    "in seconds. A change empties the cache." : "i sekunder. En ændring vil tømme cachen.",
    "Directory Settings" : "Mappeindstillinger",
    "User Display Name Field" : "Vist brugernavn felt",
    "The LDAP attribute to use to generate the user's display name." : "LDAP-attributten som skal bruges til at oprette brugerens viste navn.",
    "2nd User Display Name Field" : "Felt for af 2. brugers viste navn",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Valgfri. En LDAP-attribut som tilføjes til vist navn inde i kantede anførselstegn. Giver eks. »John Doe (john.doe@example.org)«.",
    "Base User Tree" : "Base Bruger Træ",
    "One User Base DN per line" : "Én bruger-Base DN per linje",
    "User Search Attributes" : "Attributter for brugersøgning",
    "Optional; one attribute per line" : "Valgfrit; én attribut per linje",
    "Group Display Name Field" : "Navnefelt for gruppevisning",
    "The LDAP attribute to use to generate the groups's display name." : "LDAP-attributten som skal bruges til at oprette gruppens viste navn.",
    "Base Group Tree" : "Base Group Tree",
    "One Group Base DN per line" : "Ét gruppe-Base DN per linje",
    "Group Search Attributes" : "Attributter for gruppesøgning",
    "Group-Member association" : "Guppemedlem forening",
    "Dynamic Group Member URL" : "URL for dynamisk gruppemedlem",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "Den LDAP-attribut, som på gruppeobjekter indeholder en URL for LDAP-søgning, der afgør hvilke objekter som tilhører gruppen. (En værdiløs indstilling deaktiverer funktionalitet for dynamisk gruppemedlemskab.)",
    "Nested Groups" : "Indlejrede grupper",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Når slået til, så vil grupper som rummer grupper blive understøttet. (Dette fungerer kun, hvis attributten for gruppemedlem indeholder DN'er.)",
    "Paging chunksize" : "Fragmentstørrelse for sideinddeling",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Fragmentstørrelse som bruges til sideinddelte LDAP-søgninger, der kan returnere omfattende resultater såsom bruger eller gruppe-optælling. (Angivelse til 0 vil slå sideinddelte LDAP-søgninger fra for disse situationer.)",
    "Enable LDAP password changes per user" : "Aktivér ændringer i LDAP-adgangskoder per bruger",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Tillader at LDAP-brugere kan ændre deres adgangskode og tillader Superadministratorer og Gruppeadministratorer, at ændre adgangskoden for deres LDAP-brugere. Dette virker kun, hvis rettigheder for adgangskontrol er konfigureret tilsvarende på LDAP-serveren. Da adgangskoder sendes som klartekst til LDAP-serveren, så skal der anvendes en transportkryptering, samtidig som der bør være konfigureret således, at der sker en hashing af adgangskoder på LDAP-serveren.",
    "(New password is sent as plain text to LDAP)" : "(Ny adgangskode sendes som klartekst til LDAP)",
    "Default password policy DN" : "Standard password politik DN",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "DN for en standard password politik vil blive brugt til at håndtere udløb af password. Virker kun når LDAP password ændringer pr. bruger er aktiveret og understøtter kun OpenLDAP. Efterlad tom for at deaktivere håndtering password udløb.",
    "Special Attributes" : "Specielle attributter",
    "Quota Field" : "Kvote Felt",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Lad stå tom for brugerens standardkvota. Alternativt angives en LDAP/AD-attribut.",
    "Quota Default" : "Standard for kvota",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Tilsidesætter standardkvota for LDAP-brugere, der ikke har fået angivet en kvota i feltet Kvota.",
    "Email Field" : "Felt for e-mail",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Angiver brugerens e-mail fra deres LDAP-attribut. Lad stå tom for standardadfærd.",
    "User Home Folder Naming Rule" : "Navneregel for brugerens hjemmemappe",
    "$home in an external storage configuration will be replaced with the value of the specified attribute" : "$home i en ekstern lager konfiguration vil blive ombyttet med indholdet af den specificerede attribut",
    "Internal Username" : "Internt Brugernavn",
    "Internal Username Attribute:" : "Internt attribut for brugernavn:",
    "Override UUID detection" : "Tilsidesæt UUID-detektering",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Som udgangspunkt registreres UUID-attributten automatisk. UUID-attributten bruges til entydig identificering af LDAP-brugere og -grupper. I tillæg vil det interne brugernavn blive oprettes på basis af UUID'et, hvis andet ikke angives ovenfor. Du kan tilsidesætte indstillingen og angive en attribut efter eget valg. Du skal sørge for at dén attribut du selv vælger, kan hentes for både brugere og grupper, samt at den er unik. Lad stå tom for standardadfærd. Ændringer vil kun påvirke nyilgt kortlagte (tilføjede) LDAP-brugere  og -grupper.",
    "UUID Attribute for Users:" : "UUID-attribut for brugere:",
    "UUID Attribute for Groups:" : "UUID-attribut for grupper:",
    "Username-LDAP User Mapping" : "Kortlægning mellem brugernavn og LDAP-bruger",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Brugernavne bruges til at lagre og tildele metadata. For at kunne identificere og genkende brugere præcist, vil hver LDAP-bruger få oprettet et internt brugernavn. Det oprettede brugernavn svarer til UUID'et for LDAP-brugeren. I tillæg mellemlagres DN'et for at mindske LDAP-interaktioner, men det mellemlagrede benyttes ikke til identifikation. Hvis DN'et ændres, vil ændringerne blive registreret. Det interne brugernavn anvendes overalt. Hvis kortlægningerne ryddes, så vil der være rester overalt. Rydning af kortlægningerne er ikke konfigurationssensitivt - det påvirker alle LDAP-konfigurationer! Ryd aldrig kortlægningerne i et produktionsmiljø, kun i et teststadie eller eksperimentelt stadie.",
    "Clear Username-LDAP User Mapping" : "Ryd kortlægning mellem brugernavn og LDAP-bruger",
    "Clear Groupname-LDAP Group Mapping" : "Ryd kortlægning mellem gruppenavn og LDAP-gruppe"
},
"nplurals=2; plural=(n != 1);");
