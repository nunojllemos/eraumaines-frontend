module.exports = {
	// This will lint and format Javascript files
	'**/*.(js|jsx)': filenames => [`npx eslint --fix ${filenames.join(' ')}`, `npx prettier --write ${filenames.join(' ')}`],

	// this will format MarkDown and JSON files
	'**/*.(md|json)': filenames => `npx prettier --write ${filenames.join(' ')}`,
}
