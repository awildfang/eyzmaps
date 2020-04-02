// var maps = {}
// var req = require.context("././maps/", true, /\.(json)$/);
// req.keys().forEach(function(path){
// 	var key = path.match(/\/(.+)\.json/)[1]
//     maps[key] = req(path);
// });

// module.exports = maps
// export default maps
// export const maps = {
// if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  	// module.exports = {
// }


// Generated by CoffeeScript 1.6.3
(function() {
  var maps = {
		'frontend-keys': require('./maps/frontend-keys'),
		'iso3166-country-code-to-country-name': require('./maps/iso3166-country-code-to-country-name'),
		'iso3166-country-name-to-country-code': require('./maps/iso3166-country-name-to-country-code'),
		'iso3166-country-name_de': require('./maps/iso3166-country-name_de'),
		'iso3166-country-name_en': require('./maps/iso3166-country-name_en'),
		'iso3166-country-name_fr': require('./maps/iso3166-country-name_fr'),
		'iso3166-country-name_nl': require('./maps/iso3166-country-name_nl'),
		'iso639-2-language': require('./maps/iso639-2-language'),
		'kaltura-licensors': require('./maps/kaltura-licensors'),
		'kmc-countries': require('./maps/kmc-countries'),
		'kmc-primary-language': require('./maps/kmc-primary-language'),
		'kmc-subtitles': require('./maps/kmc-subtitles'),
		'rating-system': require('./maps/rating-system'),
		'rfc5646-country-code-to-language-tag': require('./maps/rfc5646-country-code-to-language-tag'),
		'rfc5646-country-code-to-language': require('./maps/rfc5646-country-code-to-language'),
		'rfc5646-language-tag-to-name': require('./maps/rfc5646-language-tag-to-name'),
		'rfc5646-language_de': require('./maps/rfc5646-language_de'),
		'rfc5646-language_en': require('./maps/rfc5646-language_en'),
		'rfc5646-language_fr': require('./maps/rfc5646-language_fr'),
		'rfc5646-language_nl': require('./maps/rfc5646-language_nl'),
		'rfc5646-name-to-language-tag': require('./maps/rfc5646-name-to-language-tag'),
		'zoho-uc-languages': require('./maps/zoho-uc-languages')
  };

// export default app
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') module.exports = maps
  else this['$t'] = maps

}).call(this);
