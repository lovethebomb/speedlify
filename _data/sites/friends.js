module.exports = {
	description: "Friends & Others",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify-ilot",
	options: {
		frequency: 60 * 11 + 30, // 11h, 30m
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run",
	},
	urls: [
		"https://www.ilotreseau.net/",
		"https://www.ilot.sh/",
		"https://www.dysosmus.net/",
		"https://www.inesdurao.me/",
		"https://www.stevenmengin.com/",
		"https://www.nico.computer/",
		"https://www.lucas.computer/",
		"https://www.drunkenbyt.es/",
		"https://plantjes.lucas.computer/",
		"https://dnd.lucas.computer/",
		"https://disco.lucas.computer/"
	]
};