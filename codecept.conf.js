exports.config = {
  tests: 'test/**/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:9999',
      show: false
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'github-actions-example'
}