# John Doe Chrome
A Chrome extension to anonymize some of the data exposed by your browser

Install from [Chrome Web Store](https://chrome.google.com/webstore/detail/john-doe-chrome/nnfemicgpfdgigkclmajeghkjiiemoaa)

## Details
John Doe Chrome improves privacy and reduces fingerprinting effectivness.

- Replaces Http headers with generic ones
- Removes cookies during google searches
- Replaces non-essential javascript APIs attributes with generic ones
- Removes analytics parameters from urls
- Deletes unused cookies when closing a tab

## Development
Install dependencies
```
yarn install
```

Run tests
```
yarn test
```

To test it inside the browser: enable developer mode in `chrome://extensions`, click `Load unpacked extension` button and choose `src` directory.
