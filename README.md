# React Full-Page Autoscrolling Carousel with Report

This React application implements a full-page carousel that automatically scrolls through a series of images, and then smoothly transitions to a report section (e.g., a PDF document) after the image sequence completes. After the full carosel has been played, the user can manually scroll across the images.

## Features

*   **Full-Page Layout:** The carousel and report sections occupy the full height of the browser window (100vh).
*   **Automatic Image Scrolling:** The carousel automatically advances to the next image every 2 seconds.
*   **Smooth Transition to Report:** After the last image is displayed, the application smoothly scrolls to the report section.
*   **User-Initiated Scrolling (After Auto-Scroll):** After completing the automatic scrolling sequence, users can manually scroll through the images in the carousel.
*   **Parallax Effect (Optional):** Includes an option for a subtle parallax scrolling effect on the background images.
*   **Premium Visuals:** Leverages smooth transitions and well-defined styling to achieve a polished, professional aesthetic.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **CSS:** Styling the components with transitions and animations.

## **Start the Application:**

    ```bash
    npm start
    # or
    yarn start
    ```

    This will start the development server and open the application in your browser.

## Usage

*   The carousel will automatically scroll through the images every 2 seconds.
*   After the last image is displayed, the application will smoothly scroll to the report section.
*   After the automatic scrolling sequence is completed, users can manually scroll through the images by swiping or using the mouse wheel.
*   To enable the parallax effect (optional), uncomment the `background-attachment: fixed;` line in the `App.css` file.

## Known Issues

*   **Viewport Meta Tag:** The `100vh` CSS unit may not work correctly if the viewport meta tag is missing or incorrectly configured in your `public/index.html` file. Ensure that the following meta tag is present:

    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    ```

*   **CSS Specificity:** CSS rules with higher specificity may override the carousel styles. Use the browser's developer tools to inspect the elements and identify any conflicting CSS rules.

*   **`react-pdf` Rendering:** When using the `react-pdf` library, ensure that the PDF file is loaded correctly and that the `Document` and `Page` components are properly configured. The PDF has to load before `scrollIntoView` is called

*   **Smooth Scrolling Support:**  The `scroll-behavior: smooth;` property may not be supported by all browsers.

*   **Image Loading:** The carosel images may not be loaded correctly if they are not the right size. Make sure all the images are sized correctly

## Customization

*   **Image Paths:** Modify the `images` array in `App.js` to use your own image paths.
*   **Report Path:** Update the `src` attribute of the `<embed>` tag (or the `file` prop of the `Document` component if using `react-pdf`) to point to your report PDF file.
*   **Transition Timing:** Adjust the `transition` properties in `App.css` to change the speed and smoothness of the transitions.
*   **Styling:** Customize the styling of the carousel and report sections by modifying the CSS rules in `App.css`.
*   **Auto-Scroll Interval:** Change the `setInterval` and `setTimeout` values in `App.js` to adjust the auto-scroll interval.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.