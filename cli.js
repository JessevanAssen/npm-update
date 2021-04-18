#!/usr/bin/env node

const { execSync } = require('child_process');

const input = execSync( 'npm outdated --json');
const outdated = JSON.parse(input);
const toUpdate = Object.entries(outdated)
	.filter(([, { current, wanted }]) => current !== wanted)
	.map(([package, { wanted }]) => `${package}@${wanted}`);

if (toUpdate.length > 0) {
	console.log(`npm update ${toUpdate.join(' ')}`);
}
