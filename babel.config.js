module.exports = {
	presets: [ '@vue/cli-plugin-babel/preset' ],
	plugins: [
		[
			'component',
			{
				libraryName: 'element-ui',
				styleLibraryName: 'theme-chalk'
			}
		],
		'@babel/plugin-proposal-nullish-coalescing-operator',
		'@babel/plugin-proposal-optional-chaining'
	]
};
