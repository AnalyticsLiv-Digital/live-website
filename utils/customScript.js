// customfitScript.js
export function loadCustomFitScript() {
    const customfitPreInit = document.getElementById("customfitpreinit");

    console.log('customfitpreinit',customfitPreInit)
    if (customfitPreInit) {
        // Insert the CSS block for customfit-invisible-preinit-block
        customfitPreInit.insertAdjacentHTML(
            "beforebegin",
            '<style type="text/css">.customfit-invisible-preinit-block{visibility:hidden !important; opacity:0 !important}</style>'
        );

        // Add the invisible class to the html tag
        const htmlElement = document.querySelector("html");
        htmlElement.classList.add("customfit-invisible-preinit-block");

        // Remove the invisible class after 5 seconds
        setTimeout(() => {
            htmlElement.classList.remove("customfit-invisible-preinit-block");
        }, 5000);

        // Create and insert the customfit script
        const firstScript = document.getElementsByTagName("script")[0];
        const customfitScript = document.createElement("script");
        customfitScript.id = "customfitinit";
        customfitScript.setAttribute("crossorigin", "*");
        customfitScript.async = true;
        customfitScript.src = "https://sdk.customfit.ai/3dea8570-8ba1-11ef-be42-6746678c203d/cf-js-sdk-min.js";
        customfitScript.type = "text/javascript";
        firstScript.parentNode.insertBefore(customfitScript, firstScript);

        // Error handler for the customfit script
        customfitScript.onerror = function () {
            const invisibleElement = document.getElementById("customfit-invisible-preinit-block");
            if (invisibleElement) {
                invisibleElement.parentNode.removeChild(invisibleElement);
            }
        };
    }
}
