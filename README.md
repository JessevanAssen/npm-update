# @jessevanassen/npm-update
At the time of writing, `npm update` doesn't modify the package.json any more, leading to mismatches between the package.json and package-lock.json.

This executable package will run `npm outdated` and print an `npm install` command containing the latest wanted packages. That command can then be used to replicate the old behavior of `npm update`.
