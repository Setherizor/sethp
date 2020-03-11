'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Seth H. Parrish'),
  handle: chalk.white('setherizor'),
  work: chalk.white('Cybersecurity, Fullstack, Linux, JS'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('setherizor'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~sethp'),
  github: chalk.gray('https://github.com/') + chalk.green('setherizor'),
  linkedin:
    chalk.gray('https://linkedin.com/in/') + chalk.blue('thesethparrish'),
  dev: chalk.gray('https://dev.to/') + chalk.red('setherizor'),
  web: chalk.cyan('https://sethp.cc'),
  npx: chalk.red('npx') + ' ' + chalk.white('setherizor'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelDev: chalk.white.bold('     Dev.to:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const deving = `${data.labelDev}  ${data.dev}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  twittering +
  newline + // data.labelTwitter + data.twitter
  npming +
  newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  deving + // data.labelDev + data.dev
  newline +
  webing +
  newline +
  newline + // data.labelWeb + data.web
  carding // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.green(boxen(output, options))
)
