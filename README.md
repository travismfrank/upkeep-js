# UpkeepJS
Welcome to UpkeepJS: React video built for the mobile world. UpkeepJS is designed for frontend developers seeking a lightweight solution to mobile video.

## Getting Started

### Installing
Install `upkeep-js` and peer dependencies via NPM:

    npm install --save upkeep-js react react-dom prop-types styled-components

Import the UpkeepVideo component, then provide props according to the following specifications:

    src = 'string'
    // Required - provides the uri of the video to be loaded.
    // Accepts local filepaths and externally hosted videos.

    width = 'string'
    // Optional - provides width of the player.
    // Height is automatically adjusted based on the video's dimensions.

For example:

    import React from 'react';
    import UpkeepVideo from 'upkeep-js';

    export default props => {
      return (
        <div>
          <h1>New Video</h1>
          <UpkeepVideo
            src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
            width='200px'
          />
        </div>
      );
    };

## Contribute
Find UpkeepJS on [GitHub](https://github.com/TravisFrankMTG/upkeep-js)

## Authors
Travis Frank - Initial Author - [TravisFrankMTG](https://github.com/TravisFrankMTG/)

## License
This project is licensed under the MIT License
