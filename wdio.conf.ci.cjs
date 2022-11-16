/*
 Copyright 2020 Google LLC
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

module.exports.config = {
  capabilities: [
    {
      'pageLoadStrategy': 'none',
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      'maxInstances': 1,
      //
      'browserName': 'chrome',
      // If outputDir is provided WebdriverIO can capture driver session logs
      // it is possible to configure which logTypes to include/exclude.
      // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
      // excludeDriverLogs: ['bugreport', 'server'],
      'goog:chromeOptions': {
        'excludeSwitches': ['enable-automation'],
        // Uncomment to test on Chrome Canary.
        // binary: '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary'
      },
    },
    {
      browserName: 'firefox',
      maxInstances: 1,
      pageLoadStrategy: 'none',
    },
  ],
};
