Code Debugger Chrome Extension

Description

Code Debugger is a Chrome extension designed to help users easily debug code snippets. By selecting code on a web page, users can trigger the extension to identify errors and provide corrected code. The extension utilizes Google's Gemini API for the debugging process.

Features

Context Menu Integration: Right-click on selected text and choose 'Code-debugger' to trigger the debugging process.

Automatic Error Detection and Correction: The API processes selected code and returns a corrected version.

Simple User Interface: View the corrected code in a stylish popup with an option to copy the corrected code.

Installation

Clone the repository or download the files.

Open Chrome and go to chrome://extensions/.

Enable Developer mode.

Click on Load unpacked and select the folder containing this extension's files.

Usage

Right-click on any selected code text on a webpage.

Click on Code-debugger from the context menu.

A popup will appear displaying the corrected code.

Click on the '📋 Copy to Clipboard' button to copy the corrected code.

File Structure

background.js: Handles context menu creation and triggers the popup.

popup.html: The HTML structure for the response popup.

popup.css: Styles for the popup interface.

popup.js: Handles the copy-to-clipboard functionality.

content.js: Interacts with the API to process the selected code.

manifest.json: Configuration file for the Chrome extension.

Permissions

The extension requires the following permissions:

storage: To store selected text temporarily.

tabs: To interact with current tabs.

scripting: To execute scripts on web pages.

contextMenus: To add options to the right-click menu.

activeTab: To access content from the active tab.
