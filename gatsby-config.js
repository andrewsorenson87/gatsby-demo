module.exports = {
	plugins: [
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: "./src/images",
				name: "images"
			}
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp"
	]
}

