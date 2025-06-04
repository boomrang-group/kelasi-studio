# Video Studio Pro

A web application for recording, managing, and enhancing media using AI-powered tools.

## Features

*   **Versatile Recording:** Record from your webcam, capture your screen, record audio only, or combine screen and webcam footage.
*   **File Uploads:** Easily upload existing video, audio, PDF, and PowerPoint files.
*   **Media Management:** Preview your recordings and uploads, export them for offline use, and manage your media library.
*   **AI-Powered Content Assistance:**
    *   Generate catchy titles and engaging descriptions for your video and audio content based on keywords.
    *   Get content ideas (suggested video titles, key talking points, promotional blurbs) for your documents (PDFs, PPTs) by providing a brief summary.

## Getting Started

### Prerequisites

*   **Node.js and npm (or yarn):** Required for managing project dependencies and running scripts. You can download Node.js from [https://nodejs.org/](https://nodejs.org/).
*   **Modern Web Browser:** A browser like Chrome, Firefox, or Edge with permissions to access your camera and microphone for recording features.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
    (Replace `<repository-url>` with the actual URL of this Git repository)
2.  **Navigate to the project directory:**
    ```bash
    cd my-react-app
    ```
    (If your project directory is named differently, use that name instead)
3.  **Install dependencies:**
    ```bash
    npm install
    ```
    (or if you prefer yarn: `yarn install`)

### Firebase Configuration

This application uses Firebase for user authentication.

*   The Firebase configuration is located in `src/App.jsx` within the `firebaseConfig` object.
*   If you are running this project locally or in a new Firebase environment, you **must** replace the placeholder values in `firebaseConfig` with your own Firebase project's configuration details (apiKey, authDomain, projectId, etc.).
*   If you are using a pre-configured environment (like Google IDX or a similar platform), the Firebase configuration might be injected automatically (e.g., via a global `__firebase_config` variable). In such cases, you might not need to modify this manually.

### AI API Key Configuration

The AI Helper features (generating titles, descriptions, and content ideas) rely on a generative AI model API, such as Google's Gemini API.

*   The API key is used in the `AIHelperModal` component located in `src/App.jsx`. Look for the `apiKey` constant.
*   You **must** replace the empty string `""` in `const apiKey = "";` with your valid API key for the generative AI service you intend to use.
*   **Important:** Keep your API key confidential. Do not commit it directly to public repositories if you are modifying the code for your own use. Consider using environment variables or a secure configuration method for production or shared environments.
*   In some integrated development environments (like Google IDX), the API key might be injected (e.g., via a `__api_key` global variable if the environment is set up for it).

### Running the Application

Once dependencies are installed and configurations are set:

```bash
npm start
```
(or `yarn start`)

This will:
*   Run the app in development mode.
*   Open it automatically in your default web browser (usually at `http://localhost:3000`).
*   The page will reload if you make edits to the source files.

## Usage

*   **Recording Media:** Navigate to the "Record Media" section. Choose your desired recording type (Webcam, Screen, Audio, Screen + Cam) and click the button to start. Click "Stop Recording" when finished.
*   **Uploading Files:** Go to the "Upload Files" view. You can click to browse files or drag and drop your video, audio, PDF, or PowerPoint files into the designated area.
*   **Managing Media:**
    *   Uploaded and recorded media will appear in the "Media Library" section on their respective views, and all media is available in the "Media Studio" view.
    *   Click "Preview" on video/audio items to watch or listen to them in the "Media Studio".
    *   Click "Export" to download a copy of the media.
    *   Click "Delete" to remove an item from the library.
*   **AI Tools:** For any media item in the library, click the "AI Tools" (✨) button.
    *   For video/audio: Enter keywords to generate a title and description.
    *   For PDF/PPT: Enter a brief summary of the document to generate content ideas like video titles, talking points, and a promotional blurb.

## Available Scripts

In the project directory, you can run:

*   ### `npm start`
    Runs the app in the development mode.    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    The page will reload if you make edits. You will also see any lint errors in the console.

*   ### `npm test`
    Launches the test runner in the interactive watch mode.    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

*   ### `npm run build`
    Builds the app for production to the `build` folder.    It correctly bundles React in production mode and optimizes the build for the best performance.
    The build is minified and the filenames include the hashes.    Your app is ready to be deployed!
    See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

*   ### `npm run eject`
    **Note: this is a one-way operation. Once you `eject`, you can’t go back!**
    If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
    Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All ofвлеthe commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

## Contributing

Contributions are welcome! If you'd like to contribute to Video Studio Pro, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix (`git checkout -b feature/my-new-feature` or `bugfix/issue-number`).
3.  Make your changes and commit them with clear, descriptive messages.
4.  Push your changes to your forked repository.
5.  Submit a pull request to the main repository, detailing the changes you've made.

## License

This project is licensed under the ISC License. See the `LICENSE` file (if one exists) or refer to the `license` field in the `package.json` for more details.
