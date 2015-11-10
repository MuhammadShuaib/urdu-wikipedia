/**
 * This is a sample translation file for these scripts. See https://meta.wikimedia.org/wiki/TemplateScript#Translation
 * for instructions on using translation files.
 * 
 * To translate these scripts:
 *   1. Copy this to a *new* file named with your language code.
 *   2. Translate the text inside 'quotes'. Be careful with the special tokens that look like
 *      {variable}; these are placeholders. Only translate the text right of the '=' symbol. For example,
 *      only "reset the form" should be translated for the "{resetForm|text=reset the form}" token.
 *   3. Submit a pull request to the Git repository, or simply post it to https://meta.wikimedia.org/wiki/User_talk:Pathoschild
 *      and I'll do the rest.
 */

var pathoschild = pathoschild || {};
pathoschild.i18n = {
	templatescript: {
		defaultHeaderText: 'سانچہ سکرپٹ', // the sidebar header text label for the default group
		regexEditor: 'ریجیکس خانہ ترمیم' // the default 'regex editor' script
	},
	regexeditor: {
		header: 'ریجیکس خانہ ترمیم', // the header text shown in the form
		search: 'تلاش',       // the search input label
		replace: 'تبدیلی',     // the replace input label
		nameSession: 'اس نشست کا نام درج کریں', // the prompt shown when saving the session
		loadSession: '"{name}" نشست لوڈ کریں',         // tooltip shown for a saved session, where {name} is replaced with the session name
		deleteSession: '"{name}" نشست حذف کریں',     // tooltip shown for the delete icon on a saved session, where {name} is replaced with the session name
		closeEditor: 'ریجیکس خانہ ترمیم بند کریں',        // tooltip shown for the close-editor icon
		addPatterns: 'پیٹرنز شامل کریں',                  // button text
		addPatternsTooltip: 'خانہ ہائے تلاش و تبدیلی شامل کریں', // button tooltip
		apply: 'اطلاق',                               // button text
		applyTooltip: 'درج بالا پیٹرنز کو نافذ کریں',   // button tooltip
		undo: 'آخری تنفیذ کا استرجع کریں',                  // button text
		undoTooltip: 'آخری تنفیذ کا استرجع کریں',           // button tooltip
		save: 'محفوظ کریں',                                 // button text
		saveTooltip: 'آئندہ استعمال کے لیے اس نشست کو محفوظ کریں', // button tooltip
		instructions: 'تنفیذ کے لیے ریگیولر ایکسپریشنز درج کریں۔ تلاش کا پیٹرن اس طرح ہوگا "{code|text=search pattern}" یا "{code|text=/pattern/modifiers}"، اور تبدیلی پیٹرن میں ریفرینس گروپس بھی شامل کیے جا سکتے ہیں مثلاً "{code|text=$1}" (ملاحظہ فرمائیں {helplink|text=tutorial|title=JavaScript regex tutorial|url=http://www.regular-expressions.info/javascript.html})۔'
	}
};
