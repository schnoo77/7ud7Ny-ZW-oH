const uaup = require('uaup-js');


//This is Optional
const defaultStages = {
    Checking: "Checking...", // When Checking For Updates.
    Found: "Update Found!",  // If an Update is Found.
    NotFound: "No Update Found.", // If an Update is Not Found.
    Downloading: "Downloading...", // When Downloading Update.
    Unzipping: "Installing...", // When Unzipping the Archive into the Application Directory.
    Cleaning: "Finalizing...", // When Removing Temp Directories and Files (ex: update archive and tmp directory).
    Launch: "Launching..." // When Launching the Application.
};

const updateOptions = {
    gitRepo: "7ud7Ny-ZW-oH", // [Required] Your Repo Name
    gitUsername: "schnoo77",  // [Required] Your GitHub Username.

    appName: "Mod", //[Required] The Name of the app archive and the app folder.
    appExecutableName: "Run.exe", //[Required] The Executable of the Application to be Run after updating.

    appDirectory: "./FruitCash - Mod", //{Default is "Application Data/AppName"} [Optional]  Where the app will receide, make sure your app has permissions to be there.
    versionFile: "./settings/version.json", // {Default is "./settings/version.json"} [Optional] The Path to the Local Version File.
    tempDirectory: "./tmp", // {Default is "./tmp"} [Optional] Where the Update archive will download to.

    progressBar: document.getElementById("download"), // {Default is null} [Optional] If Using Electron with a HTML Progressbar, use that element here, otherwise ignore
    label: document.getElementById("download-label"), // {Default is null} [Optional] If Using Electron, this will be the area where we put status updates using InnerHTML
    stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
};

uaup.Update(updateOptions);
