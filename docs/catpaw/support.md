---
sidebar: auto
sidebarDepth: 2
---

# Support

## Where do I find my API Key?
You can find your OpenAi API key in your [OpenAi User settings](https://platform.openai.com/account/api-keys). To use the Gemini API, create a key in [Google AI Studio](https://makersuite.google.com/app/apikey).


## How can I check if the AI configuration I entered is working correctly.
Open CatPaw app, click 'AI Service', click the "Test" button below the settings interface to verify if the configuration you filled in is correct.

## How do I switch my default keyboard to CatPaw?
To switch to the CatPaw Keyboard:

Tap and hold the 🌐 keyboard key
Select CatPaw
If you don't see CatPaw on the keyboard list, you need to enable it in settings:

- Go to the Settings app
- Scroll down and select CatPaw
- Select Keyboards
- Enable CatPaw and Allow Full Access

If you don't see 'CatPaw' in Settings, you need to restart the Settings app: swipe up from the bottom of the screen, swipe left or right to find the app, then swipe up on the app's preview to close it. Alternatively, restart your device.

If at some point you deleted CatPaw and would like to install it again:

Go to the Settings app
Tap General -> Keyboard -> Keyboards
Tap Add New Keyboard
Select CatPaw and toggle Allow Full Access

## I'm being asked to "Allow Full Access," what is it?
Granting Full Access simply allows the keyboard to connect to the internet. Without it, you can still use the keyboard to type, but all AI features won't be available. CatPaw Keyboard is privacy-first by design, as it cannot access password or credit card fields and does not collect any data.

## Can I use CatPaw without paying?
Yes, you can! The free version grants you access to nearly all features with daily limits. The Pro membership provides unlimited access to everything.

## What is MagicType and how do I use it?
MagicType utilizes AI's error correction ability to understand your input intent even if you enter incorrect letters. Please click on the 🪄 icon in the top right corner of the CatPaw keyboard. An input box will appear above the keyboard. Simply input long sentences quickly, and you can ignore punctuation. If you input incorrect letters or their order, please ignore them as well. After completing your input, click the "Generate" button in the bottom right corner of the keyboard. The AI will recognize your input and fill it into the text box.

## How do I switch between the MagicType input box and my regular text input box?
In MagicType mode, you can click the toggle button to the left of the spacebar on the CatPaw keyboard to switch between input boxes. You can also manually click on the input box to switch to the template input box. To exit MagicType mode, click the 🪄 button in the top right corner of the keyboard again.

## How to create custom AI commands?
If you're on the keyboard interface, you can click on the menu button in the top right corner of the CatPaw keyboard to open the custom command panel. Then, click on the plus icon ➕ to navigate to the creation interface of the CatPaw app. Alternatively, on the CatPaw app home page, click on "AI commands" and then click on the plus icon ➕ in the top right corner to create a command.

## How to write an AI command prompt?

You can make your commands dynamic with placeholders. The Command will replace placeholder as follows. The supported placeholders are:


| Placeholder | Description |
| ---- | ---- |
| {full} | All text content in the text box. |
| {selection} | The selected text content in the text box. |
| {before} | The text content before the cursor. |
| {after} | The text content after the cursor. |
| {clipboard} | The text content in the clipboard. |
| {option} |  The option you have selected. |

⚠️ Note: If you use {selection}: you will not be able to use {full}. Also, due to system limitations, {before}, {after}, and {selection} may not return the entire content in some cases.

Example:
> Prompt: Translate this sentence into ```{option}```: ```{full}```

> Options: English, Chinese

When execute the command. CatPaw will replace the ```{option}``` with the option you have selected and the ```{full}``` with the text content in the text box.


## What is Creativity?
Creativity is essentially the temperature parameter. Lower values of temperature, result in more consistent outputs, while higher values, generate more diverse and creative results. When selecting a temperature value, consider the desired balance between coherence and creativity for your specific application.

## Still Need Help?
Contact Support: [zhiguistudio@gmail.com](mailto:zhiguistudio@gmail.com)
